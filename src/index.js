import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";

import "./styles/style.scss";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCrK7hTqvm8787uLJIl_X9Ot6zmpMqS_Fg",
  authDomain: "hormiguero-solidario.firebaseapp.com",
  projectId: "hormiguero-solidario",
  storageBucket: "hormiguero-solidario.appspot.com",
  messagingSenderId: "21958441",
  appId: "1:21958441:web:18574871f77e441499b138",
  measurementId: "G-2CJM0ZGSD5"
};

initializeApp(firebaseConfig);
getAnalytics();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
