import { useState } from 'react';
import axios from 'axios';
import { marked } from 'marked';

function App() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState('short');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarizeURL = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${backendURL}/summarize`, { url, mode });
      setSummary(response.data.summary);
    } catch (err) {
      setSummary('Error: ' + err.message);
    }
    setLoading(false);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setSummary('Please select a file first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);          // ✅ corrected
    formData.append('mode', mode);          // ✅ corrected

    try {
      const response = await axios.post(`${backendURL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSummary(response.data.summary);
    } catch (err) {
      setSummary('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Webpage & Document Summarizer</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Summarize from URL</h3>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
        />
        <button onClick={handleSummarizeURL} disabled={loading}>
          {loading ? 'Summarizing...' : 'Summarize URL'}
        </button>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Upload a Document</h3>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div style={{ marginTop: '0.5rem' }}>
          <label>Summary Type: </label>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="short">Short</option>
            <option value="detailed">Detailed</option>
          </select>
        </div>
        <button onClick={handleFileUpload} disabled={loading} style={{ marginTop: '0.5rem' }}>
          {loading ? 'Summarizing...' : 'Summarize Document'}
        </button>
      </section>

      {summary && (
        <div>
          <h3>Summary</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(summary),
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
