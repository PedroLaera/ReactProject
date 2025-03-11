import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login/:id" element={<Login />} />
          <Route path="/Pokedex" element={<Pokedex />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
