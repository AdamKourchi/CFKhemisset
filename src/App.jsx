import React from "react";
import Home from "./pages/Home";
import Etablissement from "./pages/Etablissement";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Groupe from "./pages/Groupe";

export default function App(){
    return(
    <HashRouter >
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/:name" element={<Etablissement/>} />
          <Route path="/:name/:group" element={<Groupe/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </HashRouter>
    )
}

