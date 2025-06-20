import { inputBox, inputField } from '../styles';

export default function InputField({ inputType, url, setUrl, setFile }) {
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
      ) : (
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      )}
    </div>
  );
}
