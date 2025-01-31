import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import { QuizProvider } from './context/QuizContext';

// Create the root with React 18's createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within the root
root.render(
  <QuizProvider>
    <App />
  </QuizProvider>
);
