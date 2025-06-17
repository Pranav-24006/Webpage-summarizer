import google.generativeai as genai
import os

from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-2.0-flash")

def summarize_text(raw_text):
    prompt = f"Summarize the following text:\n\n{raw_text}"
    result = model.generate_content(prompt)
    return result.text
