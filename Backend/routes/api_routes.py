from flask import Blueprint, jsonify
import json
import os

api_bp = Blueprint('api', __name__)

DATA_DIR = os.path.join(os.path.dirname(__file__), '../data')

def load_json(filename):
    with open(os.path.join(DATA_DIR, filename), 'r') as f:
        return json.load(f)

@api_bp.route('/studio-info')
def studio_info():
    return jsonify(load_json('studioinfo.json'))

@api_bp.route('/schedule')
def schedule():
    return jsonify(load_json('bcycle_schedule.json'))

@api_bp.route('/clients')
def clients():
    return jsonify(load_json('clients_100.json'))
