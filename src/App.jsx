import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AnimalDetails from './components/AnimalDetails.jsx'
import AnimalForm from './components/AnimalForm.jsx'
import AnimalEditForm from './components/AnimalEditForm.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais/:id" element={<AnimalDetails />} />
        <Route path="/cadastrar" element={<AnimalForm />} />
        <Route path="/animais/editar/:id" element={<AnimalEditForm />} />
      </Routes>
    </div>
  )
}

export default App
