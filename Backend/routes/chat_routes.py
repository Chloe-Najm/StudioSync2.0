from flask import Blueprint, request, jsonify
import openai
import json
import os
from dotenv import load_dotenv

chat_bp = Blueprint('chat', __name__)
load_dotenv()

openai.api_key = os.getenv('OPENAI_API_KEY')

DATA_DIR = os.path.join(os.path.dirname(__file__), '../data')

def load_json(filename):
    with open(os.path.join(DATA_DIR, filename), 'r') as f:
        return json.load(f)

studio_info = load_json('studioinfo.json')
schedule = load_json('bcycle_schedule.json')
clients = load_json('clients_enriched.json')  # enriched with loyalty/churn
promo_stats = load_json('promo_stats.json')   # promotion stats
class_stats = load_json('class_stats.json')   # class popularity

def build_context(chat_type):
    if chat_type == 'client':
        return f"""
You are a helpful and friendly fitness studio receptionist. Your job is to assist fitness clients by answering questions about schedules, studio policies, promotions, and amenities.

✅ Always format your answers for clarity:
- Use bullet points or numbered lists when appropriate
- Use line breaks between sections
- Use emojis to enhance readability
- Use bold headers (e.g. **Studio Locations**, **Booking Policies**, etc.)
-End every answer with: "Let me know if you'd like help with anything else! 💪"


Use the following data to help you answer:
Studio Info:
{json.dumps(studio_info)}

Class Schedule:
{json.dumps(schedule)}
"""

    elif chat_type == 'studio':
        return f"""You are a smart assistant helping fitness studio staff. Format responses clearly, well spaced out, using bullet points when necessary, and emojis. When you list names of clients, make them into a bullet point list and list them vertically, not horizonatlly. Your answers must be very warm and friendly. Use the following data to answer questions about client behavior, loyalty, retention, class popularity, and promotions:

Client Analytics (sample of 25):
{json.dumps(clients[:25])}

Promotion Performance:
{json.dumps(promo_stats)}

Class Popularity:
{json.dumps(class_stats)}
"""

@chat_bp.route('/<chat_type>', methods=['POST'])
def chat(chat_type):
    user_message = request.json.get('message')
    context = build_context(chat_type)

    try:
        response = openai.chat.completions.create(
            model='gpt-4',
            messages=[
                {"role": "system", "content": context},
                {"role": "user", "content": user_message}
            ],
            temperature=0.7
        )
        reply = response.choices[0].message.content
        return jsonify({'reply': reply})
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500
