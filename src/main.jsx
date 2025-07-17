import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HelaWidget from "./HelaWidget.jsx";
import EmilyWidget from "./emily.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadConvaiWidget } from "./utils/loadConvaiWidget.js";

// load script for widget
loadConvaiWidget()


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HelaWidget />} /> */}
        <Route path="/" element={<EmilyWidget />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
