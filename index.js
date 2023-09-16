// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { StrictMode } from "react";
import './App.css'; // Import your global styles if you have them
// import "./styles.scss";


ReactDOM.render(
  <StrictMode>
  <App />
</StrictMode>,

  document.getElementById('root')
);
