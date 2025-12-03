import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import "./pages/css/global.css";
import "./pages/css/about.css";
import "./pages/css/blog.css";
import "./pages/css/contact.css";
import "./pages/css/home.css";
import "./pages/css/services.css"
import "./pages/css/web.css";
import "./pages/css/appdev.css";

import './components/css/footer.css'
import './components/css/runningtext.css'
import './components/css/global.css'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
