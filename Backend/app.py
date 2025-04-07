from flask import Flask
from routes.api_routes import api_bp
from routes.chat_routes import chat_bp
from flask_cors import CORS
import os

app = Flask(__name__)


VERCEL_FRONTEND_URL = "https://studio-sync.vercel.app"


CORS(app, origins=[VERCEL_FRONTEND_URL], supports_credentials=True)


app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(chat_bp, url_prefix='/chat')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 4000))
    app.run(debug=False, host='0.0.0.0', port=port)


