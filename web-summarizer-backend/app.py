from flask import Flask, request, jsonify
from flask_cors import CORS
from summarizer.gemini import summarize_text
from summarizer.scraper import scrape_text
import os

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        url = request.get_json().get("url")
        mode = request.get_json().get("mode", "short")
        content = scrape_text(url)
        summary = summarize_text(content, mode)
        return jsonify({"summary": summary})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400
        
        mode = request.form.get("mode", "short") 

        # Save the file temporarily
        filepath = os.path.join("temp", file.filename)
        os.makedirs("temp", exist_ok=True)
        file.save(filepath)

        # Extract text using scrape_text for PDFs/DOCX
        content = scrape_text(filepath)
        summary = summarize_text(content, mode)

        os.remove(filepath)
        return jsonify({"summary": summary})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)