from flask import Blueprint, jsonify, request
import json
import os
from datetime import datetime
from dotenv import load_dotenv
import openai
import ast

api_bp = Blueprint('api', __name__)

# Load OpenAI key from .env
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Paths
DATA_DIR = os.path.join(os.path.dirname(__file__), '../data')
FEEDBACK_FILE = os.path.join(DATA_DIR, 'feedback.json')
SUMMARY_FILE = os.path.join(DATA_DIR, 'feedback_summary.json')

# Utility: Load JSON
def load_json(filename):
    with open(os.path.join(DATA_DIR, filename), 'r') as f:
        return json.load(f)

# Utility: Save feedback entry
def save_feedback_entry(entry):
    try:
        if not os.path.exists(FEEDBACK_FILE):
            with open(FEEDBACK_FILE, 'w') as f:
                json.dump([], f)
        with open(FEEDBACK_FILE, 'r') as f:
            feedback = json.load(f)
        feedback.append(entry)
        with open(FEEDBACK_FILE, 'w') as f:
            json.dump(feedback, f, indent=2)
    except Exception as e:
        print("Error saving feedback:", e)

# Utility: Save AI summary
def save_ai_summary(summary_obj):
    with open(SUMMARY_FILE, 'w') as f:
        json.dump(summary_obj, f, indent=2)

# Utility: Load cached summary if available
def load_cached_summary():
    if os.path.exists(SUMMARY_FILE):
        with open(SUMMARY_FILE, 'r') as f:
            return json.load(f)
    return None



# Utility: Analyze sentiment
def analyze_sentiment(text):
    prompt = f"""
You are a feedback analyzer.

Classify the following client review as:
- sentiment: "positive", "neutral", or "negative"
- reason: a short explanation (1 sentence)

Respond ONLY with valid JSON. No extra text or markdown.

Example:
{{"sentiment": "positive", "reason": "Mentions great instructor and clean space."}}

Review: {text}
"""

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You analyze client feedback sentiment and return only JSON."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.4
        )

        content = response['choices'][0]['message']['content'].strip()
        print("Raw sentiment response from GPT:\n", content)

        # Remove markdown code fences (```json ... ```)
        import re
        match = re.search(r"```(?:json)?(.*?)```", content, re.DOTALL)
        json_str = match.group(1).strip() if match else content

        return json.loads(json_str)

    except Exception as e:
        print("Sentiment analysis error:", e)
        return {"sentiment": "unknown", "reason": "Could not parse GPT response"}




@api_bp.route('/studio-info')
def studio_info():
    return jsonify(load_json('studioinfo.json'))

@api_bp.route('/schedule')
def schedule():
    return jsonify(load_json('bcycle_schedule.json'))

@api_bp.route('/clients')
def clients():
    return jsonify(load_json('clients_100.json'))

# Submit client feedback
@api_bp.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.get_json()
    category = data.get("category")
    message = data.get("message")
    client_name = data.get("clientName", "Anonymous")

    if not category or not message:
        return jsonify({"error": "Missing category or message"}), 400

    sentiment_result = analyze_sentiment(message)

    entry = {
        "category": category,
        "message": message,
        "clientName": client_name,
        "timestamp": datetime.utcnow().isoformat(),
        "sentiment": sentiment_result["sentiment"],
        "reason": sentiment_result["reason"]
    }

    save_feedback_entry(entry)
    generate_feedback_summary()

    return jsonify({"status": "success", "entry": entry})

# Get all feedback entries
@api_bp.route('/feedback', methods=['GET'])
def get_feedback_entries():
    if not os.path.exists(FEEDBACK_FILE):
        return jsonify({"feedbackEntries": []})

    with open(FEEDBACK_FILE, 'r') as f:
        feedback = json.load(f)

    formatted = [
        {
            "id": str(i),
            "clientName": f.get("clientName", "Anonymous"),
            "category": f.get("category", "other"),
            "feedback": f.get("message", ""),
            "date": f.get("timestamp", ""),
            "sentiment": f.get("sentiment", "unknown"),
            "reason": f.get("reason", "")
        }
        for i, f in enumerate(feedback)
    ]

    return jsonify({"feedbackEntries": formatted})

# AI-generated feedback summary
@api_bp.route('/feedback-summary', methods=['GET'])
def feedback_summary():
    cached = load_cached_summary()
    if cached:
        return jsonify(cached)
    else:
        return jsonify({
            "summary": "No summary available.",
            "categories": {
                "praise": [],
                "criticism": []
            },
            "suggestions": []
        })

def generate_feedback_summary():
    if not os.path.exists(FEEDBACK_FILE):
        return

    with open(FEEDBACK_FILE, 'r') as f:
        feedback = json.load(f)

    if not feedback:
        return

    # Local sentiment count
    sentiment_counts = {"positive": 0, "neutral": 0, "negative": 0}
    for fb in feedback:
        sentiment = fb.get("sentiment", "unknown")
        if sentiment in sentiment_counts:
            sentiment_counts[sentiment] += 1

    # Format for GPT
    formatted_entries = [f"{fb['category'].capitalize()}: {fb['message']}" for fb in feedback]
    prompt = (
        "You are an AI assistant summarizing client feedback for a fitness studio manager.\n"
        "Here is the client feedback:\n"
        f"{chr(10).join(formatted_entries)}\n\n"
        "Return a JSON object wrapped in triple backticks like this:\n"
        "```\n"
        '{\n'
        '  "summary": "short paragraph summary of the overall feedback",\n'
        '  "categories": {\n'
        '    "praise": ["positive point 1", "positive point 2"],\n'
        '    "criticism": ["negative point 1", "negative point 2"]\n'
        '  },\n'
        '  "suggestions": ["suggestion 1", "suggestion 2"]\n'
        '}\n'
        "```"
    )

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a helpful assistant that summarizes client feedback for a fitness studio manager."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.6
        )

        content = response['choices'][0]['message']['content']
        print("Raw feedback summary GPT response:\n", content)

        # Extract JSON between triple backticks
        import re
        match = re.search(r"```(?:json)?(.*?)```", content, re.DOTALL)
        if not match:
            raise ValueError("No JSON block found in GPT response")

        raw_json = match.group(1).strip()
        parsed = json.loads(raw_json)

        # Add sentiment breakdown
        parsed["sentimentBreakdown"] = sentiment_counts

        save_ai_summary(parsed)

    except Exception as e:
        print("Error generating AI summary:", e)
