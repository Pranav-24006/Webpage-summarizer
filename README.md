# Webpage Summarizer

This is a full-stack project that takes a webpage URL, scrapes the content from it, and uses Google's Gemini model to generate a concise summary of the page.

## What It Does

- User enters a URL in the frontend interface (built with React).
- The backend (built using Flask) fetches the page's content using a web scraper.
- The content is sent to the Gemini language model to generate a summary.
- The summary is sent back and displayed in the frontend.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Language Model**: Gemini via Google Generative AI API
- **Web Scraping**: BeautifulSoup and Requests
