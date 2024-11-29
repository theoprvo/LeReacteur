// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import Pokedex from "./pages/Pokedex/Pokedex";
import PokedexSingle from "./pages/PokedexSingle/PokedexSingle";
import Typechart from "./pages/Typechart/Typechart";
import TypechartSingle from "./pages/TypechartSingle/TypechartSingle";

// COMPONENTS
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexSingle />} />
          <Route path="/typechart" element={<Typechart />} />
          <Route path="/typechart/:id" element={<TypechartSingle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
