import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./HojasEstilo/style.css"
import Inicio from "./Componentes/Inicio"
import Personaje from "./Componentes/Personaje"

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className='App bg-dark'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
