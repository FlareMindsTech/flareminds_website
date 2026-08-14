import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/index.css";
import "./styles/pages/global.css";
import "./styles/pages/about.css";
import "./styles/pages/blog.css";
import "./styles/pages/contact.css";
import "./styles/pages/home.css";
import "./styles/pages/services.css"
import "./styles/pages/web.css";
import "./styles/pages/training.css";
import './components/layout/footer.css'
import './components/ui/runningtext.css'
import './styles/components-global.css'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
