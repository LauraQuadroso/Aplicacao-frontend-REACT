// src/components/AnimalDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './AnimalDetails.module.css'; // Importe o CSS Module para detalhes

function AnimalDetails() {
    const { id } = useParams(); // Pega o ID da URL
    const navigate = useNavigate(); // Hook para navegação
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    useEffect(() => {
        const fetchAnimalDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/animais/${id}`);
                if (!response.ok) {
                    throw new Error('Animal não encontrado ou erro ao buscar.');
                }
                const data = await response.json();
                setAnimal(data);
            } catch (err) {
                setError(err.message);
                console.error('Erro ao buscar detalhes do animal:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimalDetails();
    }, [id]);

    const handleEdit = () => {
        navigate(`/animais/editar/${id}`);
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir este animal? Esta ação não pode ser desfeita.');
        if (!confirmDelete) return;

        setDeleting(true);
        setDeleteError(null);

        try {
            const response = await fetch(`http://localhost:3000/animais/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Erro ao excluir o animal.');
            }
            // Após excluir, voltar para a lista
            navigate('/');
        } catch (err) {
            setDeleteError(err.message);
            setDeleting(false);
        }
    };

    if (loading) {
        return <div className={styles.loadingMessage}>Carregando detalhes do animal...</div>;
    }

    if (error) {
        return <div className={styles.errorMessage}>Erro: {error}</div>;
    }

    if (!animal) {
        return <div className={styles.errorMessage}>Animal não encontrado.</div>;
    }

    return (
        <div className={styles.detailsContainer}>
            <button className={styles.backButton} onClick={() => navigate('/')}>
                ← Voltar para a lista
            </button>
            <div className={styles.header}>
                <div className={styles.imageWrapper}>
                    <img src={animal.imagem} alt={animal.nome} className={styles.animalImage} />
                </div>
                <div className={styles.headerInfo}>
                    <h1 className={styles.animalName}>{animal.nome}</h1>
                    <p className={styles.animalAge}>{animal.idade} {animal.idade === 1 ? 'ano' : 'anos'}</p>
                    <p className={styles.animalSex}>{animal.sexo || 'Sexo não informado'}</p>
                </div>
            </div>

            <div className={styles.infoSection}>
                <p><strong>Espécie:</strong> {animal.especie || 'Não informada'}</p>
                <p><strong>Porte:</strong> {animal.porte || 'Não informado'}</p>
                <p><strong>Raça:</strong> {animal.raca || 'Sem raça definida'}</p>
            </div>

            <div className={styles.infoSection}>
                <h2>Informações Adicionais</h2>
                <p><strong>Vacinas:</strong> {animal.vacinas || 'Nenhuma vacina registrada'}</p>
                <p><strong>Comportamento:</strong> {animal.comportamento || 'Não informado'}</p>
            </div>

            {/* Botões Editar e Excluir */}
            <div className={styles.actions}>
                <button
                    className={styles.adoptButton}
                    onClick={handleEdit}
                    disabled={deleting}
                >
                    Editar
                </button>
                <button 
                    className={styles.adoptButton}
                    onClick={handleDelete}
                    disabled={deleting}
                >
                    {deleting ? 'Excluindo...' : 'Excluir'}
                </button>
            </div>

            {deleteError && <p className={styles.errorMessage}>Erro ao excluir: {deleteError}</p>}
        </div>
    );
}

export default AnimalDetails;
