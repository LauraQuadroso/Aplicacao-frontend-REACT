
//roteamento

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Container from "./components/layout/Container";

// Importação das páginas
import Home from './components/pages/Home';

// Importação do layout
import Navbar from './components/layout/NavBar';

function App() {
    return (
        <BrowserRouter>
            <Navbar /> 
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
