import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//ReactDOM.createRoot(document.getElementById('root')).render(<App />);

//Com o modo estrito
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  
