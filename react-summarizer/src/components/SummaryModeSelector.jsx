import { radioGroup } from '../styles';

export default function SummaryModeSelector({ mode, setMode }) {
  return (
    <div style={radioGroup}>
      <label style={{ marginRight: '1rem' }}>
        <input
          type="radio"
          value="short"
          checked={mode === 'short'}
          onChange={() => setMode('short')}
        /> Short
      </label>
      <label>
        <input
          type="radio"
          value="detailed"
          checked={mode === 'detailed'}
          onChange={() => setMode('detailed')}
        /> Detailed
      </label>
    </div>
  );
}
