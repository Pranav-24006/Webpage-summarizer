import { submitButton } from '../styles';

export default function SubmitButton({ loading, handleSummarize }) {
  return (
    <button onClick={handleSummarize} disabled={loading} style={submitButton}>
      {loading ? 'Summarizing...' : 'Generate Summary'}
    </button>
  );
}
