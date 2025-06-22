import { inputBox, inputField } from '../styles';

export default function InputField({ inputType, url, setUrl, setFile, text, setText }) {
  return (
    <div style={inputBox}>
      {inputType === 'url' ? (
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          style={inputField}
        />
      ) : inputType === 'file' ? (
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      ) : (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or type plain text here"
          style={{ ...inputField, height: '150px', resize: 'vertical' }}
        />
      )}
    </div>
  );
}
