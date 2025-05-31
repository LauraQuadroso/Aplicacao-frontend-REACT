// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // REMOVA 'BrowserRouter as Router' daqui
import Home from './pages/Home.jsx';
import AnimalDetails from './components/AnimalDetails.jsx';
import AnimalForm from './components/AnimalForm.jsx';

function App() {
  return (
    // REMOVA O <Router> AQUI. Ele já está no main.jsx
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais/:id" element={<AnimalDetails />} />
        <Route path="/cadastrar" element={<AnimalForm />} />
      </Routes>
    </div>
    // REMOVA O FECHAMENTO </Router> AQUI TAMBÉM
  );
}

export default App;