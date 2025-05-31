// src/pages/Home.jsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx' // CORRIGIDO: importado como NavBar
import styles from './Home.module.css'; // Caminho correto para o CSS Module da Home
import banner from '/slide1pata.png'; // ajuste o nome conforme salvou (se estiver na raiz pública)
import AnimalList from '../components/AnimalList.jsx'; // Caminho corrigido para AnimalList

function Home() {
    const [tipoAnimal, setTipoAnimal] = useState('');
    const [porte, setPorte] = useState('');
    const [idade, setIdade] = useState('');
    const [matchClicked, setMatchClicked] = useState(false);
    const [noMatches, setNoMatches] = useState(false);

    const handleMatchClick = () => {
        setMatchClicked(true);
    };

    const handleResetFilters = () => {
        setTipoAnimal('');
        setPorte('');
        setIdade('');
        setMatchClicked(false);
        setNoMatches(false);
    };

    return (
        <div className={styles.container}>
            <NavBar /> {/* Renderizado como NavBar, correspondendo ao import */}
            <div className={styles.banner}>
                <img src={banner} alt="Banner Patamatch" className={styles.bannerImg} />
            </div>

            <div className={styles.filtros}>
                <select
                    className={styles.selectFilter}
                    value={tipoAnimal}
                    onChange={(e) => setTipoAnimal(e.target.value)}
                >
                    <option value="">Tipo do animal</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                </select>

                <select
                    className={styles.selectFilter}
                    value={porte}
                    onChange={(e) => setPorte(e.target.value)}
                >
                    <option value="">Porte</option>
                    <option value="Pequeno">Pequeno</option>
                    <option value="Médio">Médio</option>
                    <option value="Grande">Grande</option>
                </select>

                <select
                    className={styles.selectFilter}
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                >
                    <option value="">Idade</option>
                    <option value="filhote">Filhote (0-1 ano)</option>
                    <option value="jovem">Jovem (1-5 anos)</option>
                    <option value="adulto">Adulto (5+ anos)</option>
                </select>

                <button className={styles.botaoMatch} onClick={handleMatchClick}>
                    De um match
                </button>
                {(tipoAnimal || porte || idade) && (
                    <button className={styles.botaoLimpar} onClick={handleResetFilters}>
                        Limpar Filtros
                    </button>
                )}
            </div>

            <h2 className={styles.sectionTitle}>Animais Disponíveis para Adoção</h2>

            {noMatches && (
                <div className={styles.noMatchesMessage}>
                    <p>Puxa! Não encontramos nenhum animal com esses critérios. 😔</p>
                    <p>Mas não desanime! Veja outros amiguinhos que também buscam um lar:</p>
                </div>
            )}

            <AnimalList
                tipoAnimal={tipoAnimal}
                porte={porte}
                idade={idade}
                matchClicked={matchClicked}
                setNoMatches={setNoMatches}
            />
        </div>
    );
}

export default Home;