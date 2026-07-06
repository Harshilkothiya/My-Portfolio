import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Define theme object
const theme = {
  colors: {
    btn: "#007bff", // Define your button color
    shadow: "rgba(0, 0, 0, 0.2)",
  },
  media: {
    mobile: "768px", // Define media query breakpoints
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap everything inside ThemeProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
