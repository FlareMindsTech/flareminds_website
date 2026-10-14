import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./styles/index.css";
import "./styles/pages/global.css";
import "./styles/pages/web.css";
import './components/layout/footer.css';
import './components/ui/runningtext.css';
import './styles/components-global.css';

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);
