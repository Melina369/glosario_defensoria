import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { TitleList } from "./components/TitleList";
import { WordList } from "./components/WordList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redireccionar la ruta raíz "/" a la ruta "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Ruta que muestra el componente TitleList */}
        <Route path="/home" element={<TitleList />} />

        {/* Ruta que muestra el componente WordList y espera un parámetro titleId */}
        <Route path="/palabras/:titleId" element={<WordList />} />
      </Routes>
    </Router>
  );
};

export default App;
