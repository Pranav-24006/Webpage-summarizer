import requests
from bs4 import BeautifulSoup

def scrape_text(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    for tag in soup(["script", "style"]):
        tag.extract()
    return soup.get_text(separator=" ", strip=True)
