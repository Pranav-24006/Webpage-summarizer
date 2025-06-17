import { useState } from 'react';
import axios from 'axios';

function App() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${backendURL}/summarize`,
        { url }
      );
      setSummary(response.data.summary);
    } catch (err) {
      setSummary('Error: ' + err.message);
    }
    setLoading(false);
  };
  

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Webpage Summarizer</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: '60%', padding: '0.5rem' }}
      />
      <button onClick={handleSummarize} disabled={loading} style={{ marginLeft: '1rem' }}>
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>

      <div style={{ marginTop: '2rem' }}>
        <h3>Summary</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default App;
