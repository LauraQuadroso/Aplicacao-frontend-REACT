// src/components/AnimalList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AnimalCard.module.css';

function AnimalList({ tipoAnimal, porte, idade, matchClicked, setNoMatches }) { // <--- noMatches aqui
    const [animais, setAnimais] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Adicione um estado local para controlar se não há correspondências na AnimalList
    // Isso é importante porque setNoMatches é um setter da Home.jsx.
    // Vamos usar noMatches para a exibição da mensagem de "nenhum animal cadastrado"
    // E setNoMatches para a lógica de "nenhum match" para comunicar à Home.jsx
    const [localNoAnimalsFound, setLocalNoAnimalsFound] = useState(false); 


    useEffect(() => {
        const fetchAnimais = async () => {
            setLoading(true);
            setNoMatches(false); // Reseta a mensagem de "não encontrados" na Home.jsx
            setLocalNoAnimalsFound(false); // Reseta o estado local de animais não encontrados

            let apiUrl = 'http://localhost:3000/animais';
            const params = new URLSearchParams();

            if (matchClicked) {
                if (tipoAnimal) params.append('especie', tipoAnimal);
                if (porte) params.append('porte', porte);
                if (idade) params.append('idadeFaixa', idade);
            }

            const queryString = params.toString();
            if (queryString) {
                apiUrl = `${apiUrl}?${queryString}`;
            }

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Erro ao buscar os animais');
                }
                const data = await response.json();
                
                setAnimais(data);
                
                // Lógica para a mensagem de "nenhum match" e "outros amiguinhos"
                if (matchClicked && data.length === 0 && (tipoAnimal || porte || idade)) {
                    setNoMatches(true); // Informa à Home.jsx que não houve correspondência com os filtros
                    // Busca todos os animais para mostrar "outros amiguinhos"
                    const allAnimalsResponse = await fetch('http://localhost:3000/animais');
                    const allAnimalsData = await allAnimalsResponse.json();
                    setAnimais(allAnimalsData); 
                    setLocalNoAnimalsFound(false); // Garante que a mensagem "nenhum animal cadastrado" não apareça
                } else {
                    setNoMatches(false); // Garante que a mensagem de "não encontrados" não apareça na Home.jsx
                    if (data.length === 0) { // Se não tem animais NO GERAL (mesmo sem filtro ou sem match clicked)
                        setLocalNoAnimalsFound(true); // Define que não há animais para exibir a mensagem padrão
                    } else {
                        setLocalNoAnimalsFound(false);
                    }
                }

            } catch (error) {
                console.error('Erro:', error);
                setNoMatches(true); // Exibe a mensagem de erro na Home.jsx se a API falhar
                setAnimais([]); // Limpa a lista se houver erro
                setLocalNoAnimalsFound(false); // Não mostra a mensagem "nenhum animal cadastrado" em caso de erro de API
            } finally {
                setLoading(false);
            }
        };

        fetchAnimais();

    }, [tipoAnimal, porte, idade, matchClicked, setNoMatches]);

    const handleDetailsClick = (id) => {
        navigate(`/animais/${id}`);
    };

    if (loading) {
        return <p style={{ textAlign: 'center', margin: '20px' }}>Carregando animais...</p>;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>
            {animais.length > 0 ? (
                animais.map((animal) => (
                    <div key={animal.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <img src={animal.imagem} alt={animal.nome} className={styles.image} />
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.nameAge}>
                                {animal.nome}, {animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}
                            </div>
                        </div>
                        <div className={styles.detailsContainer}>
                            <div>{animal.sexo || 'Sexo não informado'}</div>
                            <div>{animal.porte || 'Porte não informado'}</div>
                            <div>{animal.raca || 'Sem raça definida'}</div>
                        </div>
                        <button
                            className={styles.bottomButton}
                            onClick={() => handleDetailsClick(animal.id)}
                        >
                            Detalhes
                        </button>
                    </div>
                ))
            ) : (
                // Linha 96: Usando localNoAnimalsFound para exibir a mensagem
                localNoAnimalsFound && <p>Nenhum animal cadastrado ainda.</p> 
            )}
        </div>
    );
}

export default AnimalList;