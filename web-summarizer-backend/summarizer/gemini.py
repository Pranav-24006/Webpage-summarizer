import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-2.0-flash")

def summarize_text(content, mode="short"):
    if mode == "detailed":
        prompt = f"Provide a paragraph-wise detailed summary of the following text:\n\n{content}"
    else:
        prompt = f"Summarize the following text briefly:\n\n{content}"
    result = model.generate_content(prompt)
    return result.text