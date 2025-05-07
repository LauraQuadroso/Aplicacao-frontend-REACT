import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Lista from './pages/Lista'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </>
  )
}

export default App
