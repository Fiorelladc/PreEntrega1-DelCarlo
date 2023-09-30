import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIOAELTE9BW7vQQMtXqia0_GWhhOrwvkM",
  authDomain: "coderhouse-ecommerce-a4a37.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a4a37",
  storageBucket: "coderhouse-ecommerce-a4a37.appspot.com",
  messagingSenderId: "181043195271",
  appId: "1:181043195271:web:957288f074a0edf2847722",
  measurementId: "G-5CSP5MXRX3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

