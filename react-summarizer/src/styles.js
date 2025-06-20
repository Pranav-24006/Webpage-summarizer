// src/styles.js

export const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9fafb',
};

export const header = {
  marginBottom: '2rem',
  fontSize: '2rem',
  textAlign: 'center',
};

export const toggleButtons = {
  marginBottom: '1rem',
};

export const button = (active) => ({
  padding: '0.5rem 1rem',
  marginRight: '1rem',
  backgroundColor: active ? '#4f46e5' : '#e5e7eb',
  color: active ? '#fff' : '#000',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
});

export const inputBox = {
  marginBottom: '1rem',
  width: '100%',
  maxWidth: '600px',
};

export const inputField = {
  padding: '0.5rem',
  width: '100%',
};

export const radioGroup = {
  marginBottom: '1rem',
};

export const submitButton = {
  padding: '0.5rem 1.5rem',
  backgroundColor: '#10b981',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export const summaryBox = {
  marginTop: '2rem',
  width: '100%',
  maxWidth: '700px',
  textAlign: 'left',
  backgroundColor: '#f3f4f6',
  color:'#111827',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(100,100,100,0.1)',
  minHeight: '100px',
};
