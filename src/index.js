import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
const rootelement = document.getElementById("root");

const root = ReactDOM.createRoot(rootelement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
