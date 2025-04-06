from flask import Flask
from routes.api_routes import api_bp
from routes.chat_routes import chat_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(api_bp, url_prefix='/api')
app.register_blueprint(chat_bp, url_prefix='/chat')

if __name__ == '__main__':
    app.run(debug=True, port=4000)
