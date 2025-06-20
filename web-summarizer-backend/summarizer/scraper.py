from bs4 import BeautifulSoup
import requests
import fitz  # PyMuPDF
import docx
import io

def scrape_text(input_source):
    if isinstance(input_source, str):
        if input_source.endswith(".pdf"):
            response = requests.get(input_source)
            return extract_text_from_pdf(io.BytesIO(response.content))
        elif input_source.endswith(".docx"):
            response = requests.get(input_source)
            return extract_text_from_docx(io.BytesIO(response.content))
        else:
            return extract_text_from_web(input_source)
    else:
        filename = input_source.filename.lower()
        if filename.endswith(".pdf"):
            return extract_text_from_pdf(input_source)
        elif filename.endswith(".docx"):
            return extract_text_from_docx(input_source)
        else:
            raise ValueError("Unsupported file type")

def extract_text_from_web(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    return ' '.join(p.get_text() for p in soup.find_all('p'))

def extract_text_from_pdf(file_stream):
    text = ""
    doc = fitz.open(stream=file_stream, filetype="pdf")
    for page in doc:
        text += page.get_text()
    return text

def extract_text_from_docx(file_stream):
    doc = docx.Document(file_stream)
    return ' '.join(para.text for para in doc.paragraphs)
