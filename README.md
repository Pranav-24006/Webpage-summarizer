# Webpage Summarizer

This is a full-stack web application that allows users to input the URL of a webpage and receive a concise summary of its content. The application uses a Python Flask backend with Gemini API for summarization and a React frontend for user interaction.

## Features

- 🔗 Input a webpage URL
- 🧠 Summarizes using Google's Gemini API
- 🌐 Frontend built with React
- 🐍 Backend built with Flask
- ☁️ Backend deployable via Google Cloud Platform (GCP)
- ⚡ Frontend deployable via Vercel

## Project Structure

```
web-summarizer/
├── web-summarizer-backend/
│   ├── app.py
│   ├── summarizer/
│   │   ├── gemini.py
│   │   └── scraper.py
│   └── requirements.txt
├── web-summarizer-frontend/
│   ├── src/
│   │   └── App.jsx
│   ├── .env
│   └── vite.config.js
```

## Setup Instructions

### Backend

1. Navigate to the backend folder:

   ```bash
   cd web-summarizer-backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. Run the server:

   ```bash
   python app.py
   ```

---

### Frontend

1. Navigate to the frontend folder:

   ```bash
   cd web-summarizer-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   VITE_BACKEND_URL=https://your-backend-url
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

---

## Deployment

### Frontend (Vercel)

1. Push your frontend code to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your GitHub project.
3. Set the environment variable `VITE_BACKEND_URL` in the Vercel dashboard.
4. Deploy.

---

### Backend (Google Cloud Run via GCP)

1. **Install Google Cloud SDK**  
   [Download and install gcloud](https://cloud.google.com/sdk/docs/install)

2. **Authenticate:**

   ```bash
   gcloud auth login
   ```

3. **Set your project:**

   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

4. **Deploy:**

   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/web-summarizer
   gcloud run deploy web-summarizer      --image gcr.io/YOUR_PROJECT_ID/web-summarizer      --platform managed      --region us-central1      --allow-unauthenticated
   ```

5. **Set `GEMINI_API_KEY`** in Cloud Run > Service > Edit & Deploy New Revision > Add Environment Variable.

---

## License

This project is licensed under the MIT License.
