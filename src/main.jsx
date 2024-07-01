import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Etablissement from "./pages/Etablissement";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/etablissement" element={<Etablissement />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
