import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIX_5H6g0ztW_eKqsA6LWHC8VCyD9q7yQ",
  authDomain: "coderhouse-71360.firebaseapp.com",
  projectId: "coderhouse-71360",
  storageBucket: "coderhouse-71360.appspot.com",
  messagingSenderId: "26056502797",
  appId: "1:26056502797:web:54c6da985ae766cf3e2f44"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
