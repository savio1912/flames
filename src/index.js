import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import Signup from "./Auth/Signup.js";
const rootelement = document.getElementById("root");

const root = ReactDOM.createRoot(rootelement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Signup />
    </HelmetProvider>
  </React.StrictMode>
);
