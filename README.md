# 🌐 AI Powered Summarizer

A full-stack web application that lets users **input a URL, upload a document**, or **paste plain text**, and receive a concise summary in either **short** or **detailed** formats. The summarization is powered by **Gemini API**, and the system includes a responsive React frontend and a robust Flask backend.

---

## 🚀 Features

* 🔗 Accepts **URL**, **file upload**, or **plain text** input
* 🧠 Summarization powered by **Google’s Gemini API**
* ⚡ **Short** or **detailed** summary options
* 🌐 Frontend built using **React** & **Tailwind CSS**
* 🐍 Backend built with **Flask (Python)**
* ☁️ Deployable on **Google Cloud Platform** (GCP)
* 🎯 Frontend deployable via **Vercel**

---

## 📁 Project Structure

```
web-summarizer/
├── web-summarizer-backend/
│   ├── app.py
│   ├── summarizer/
│   │   ├── gemini.py
│   │   └── scraper.py
│   └── requirements.txt
├── react-summarizer/
│   ├── src/
│   │   └── App.jsx
│   ├── .env
│   └── vite.config.js
```

---

## ⚙️ Setup Instructions

### 🔙 Backend (Flask)

1. Navigate to the backend folder:

   ```bash
   cd web-summarizer-backend
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file and add your Gemini API key:

   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Run the Flask server:

   ```bash
   python app.py
   ```

---

### 🖥️ Frontend (React + Vite)

1. Navigate to the frontend folder:

   ```bash
   cd react-summarizer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your backend URL:

   ```
   VITE_BACKEND_URL=https://your-backend-url
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

---

## 🚀 Deployment

### ⚡ Frontend (Vercel)

1. Push your frontend code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your GitHub project
3. Add the environment variable `VITE_BACKEND_URL` in the Vercel dashboard
4. Deploy with one click

---

### ☁️ Backend (Google Cloud Run)

1. **Install Google Cloud SDK**
   → [Download & Install](https://cloud.google.com/sdk/docs/install)

2. Authenticate your account:

   ```bash
   gcloud auth login
   ```

3. Set your GCP project:

   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

4. Submit a build:

   ```bash
   gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/web-summarizer
   ```

5. Deploy the container:

   ```bash
   gcloud run deploy web-summarizer \
     --image gcr.io/YOUR_PROJECT_ID/web-summarizer \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

6. Add environment variables in Cloud Run:

   * Go to **Cloud Run > Services > web-summarizer**
   * Click **"Edit & Deploy New Revision"**
   * Add: `GEMINI_API_KEY`

---
