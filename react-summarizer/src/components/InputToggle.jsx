import { toggleButtons, button } from '../styles';

export default function InputToggle({ inputType, setInputType }) {
  return (
    <div style={toggleButtons}>
      <button onClick={() => setInputType('url')} style={button(inputType === 'url')}>URL</button>
      <button onClick={() => setInputType('document')} style={button(inputType === 'document')}>Document</button>
    </div>
  );
}
