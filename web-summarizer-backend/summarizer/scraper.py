from bs4 import BeautifulSoup
import requests
import fitz  # PyMuPDF
import docx
import io
import os

def scrape_text(input_source):
    try:
        # If input_source is a string, it might be a URL or a local file path
        if isinstance(input_source, str):
            if os.path.isfile(input_source):  # Local file path
                if input_source.endswith(".pdf"):
                    with open(input_source, "rb") as f:
                        return extract_text_from_pdf(f)
                elif input_source.endswith(".docx"):
                    with open(input_source, "rb") as f:
                        return extract_text_from_docx(f)
                else:
                    raise ValueError("Unsupported local file type")
            elif input_source.startswith("http"):
                if input_source.endswith(".pdf"):
                    response = requests.get(input_source, timeout=10)
                    response.raise_for_status()
                    return extract_text_from_pdf(io.BytesIO(response.content))
                elif input_source.endswith(".docx"):
                    response = requests.get(input_source, timeout=10)
                    response.raise_for_status()
                    return extract_text_from_docx(io.BytesIO(response.content))
                else:
                    return extract_text_from_web(input_source)
            else:
                raise ValueError("Invalid string input (neither file nor URL)")

        # If it's a file-like object (from form upload)
        else:
            filename = input_source.filename.lower()
            input_source.seek(0)
            if filename.endswith(".pdf"):
                return extract_text_from_pdf(input_source)
            elif filename.endswith(".docx"):
                return extract_text_from_docx(input_source)
            else:
                raise ValueError("Unsupported file type")

    except Exception as e:
        raise RuntimeError(f"Failed to extract text: {e}")

def extract_text_from_web(url):
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')
    return ' '.join(p.get_text() for p in soup.find_all('p'))

def extract_text_from_pdf(file_stream):
    try:
        text = ""
        doc = fitz.open(stream=file_stream.read(), filetype="pdf")
        for page in doc:
            text += page.get_text()
        return text
    except Exception as e:
        raise ValueError("Could not read PDF: " + str(e))

def extract_text_from_docx(file_stream):
    try:
        doc = docx.Document(file_stream)
        return ' '.join(para.text for para in doc.paragraphs)
    except Exception as e:
        raise ValueError("Could not read DOCX: " + str(e))
