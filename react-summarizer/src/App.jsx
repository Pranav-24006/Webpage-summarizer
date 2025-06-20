import { useState } from 'react';
import axios from 'axios';
import { container } from './styles';

import Header from './components/Header';
import InputToggle from './components/InputToggle';
import InputField from './components/InputField';
import SummaryModeSelector from './components/SummaryModeSelector';
import SubmitButton from './components/SubmitButton';
import SummaryBox from './components/SummaryBox';

function App() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [inputType, setInputType] = useState('url');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [mode, setMode] = useState('short');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    setSummary('');
    try {
      if (inputType === 'url') {
        const res = await axios.post(`${backendURL}/summarize`, { url, mode });
        setSummary(res.data.summary);
      } else {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('mode', mode);
        const res = await axios.post(`${backendURL}/upload`, formData);
        setSummary(res.data.summary);
      }
    } catch (err) {
      setSummary('Error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
      <Header />
      <InputToggle inputType={inputType} setInputType={setInputType} />
      <InputField
        inputType={inputType}
        url={url}
        setUrl={setUrl}
        setFile={setFile}
      />
      <SummaryModeSelector mode={mode} setMode={setMode} />
      <SubmitButton loading={loading} handleSummarize={handleSummarize} />
      <SummaryBox summary={summary} />
    </div>
</div>
  );
}

export default App;
