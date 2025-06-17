from flask import Flask, request, jsonify
from flask_cors import CORS

from summarizer.scraper import scrape_text
from summarizer.gemini import summarize_text


app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        url = request.get_json().get("url")
        content = scrape_text(url)
        summary = summarize_text(content)
        return jsonify({"summary": summary})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

