import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDLpmCYwlArZNdBJ-6bCHDK-yue7ODCuUw",
  authDomain: "cart-604d0.firebaseapp.com",
  projectId: "cart-604d0",
  storageBucket: "cart-604d0.appspot.com",
  messagingSenderId: "832564564744",
  appId: "1:832564564744:web:0ca5990623ba29fabc92bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

