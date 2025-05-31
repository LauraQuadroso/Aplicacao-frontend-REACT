// src/components/AnimalForm.jsx
import React, { useState } from 'react';
import styles from './AnimalForm.module.css'; 

function AnimalForm() {
    const [formData, setFormData] = useState({
        nome: '',
        idade: '',
        especie: '',
        porte: '',
        vacinas: '',
        comportamento: '',
        imagem: '' // Para a URL da imagem
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/animais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Animal cadastrado com sucesso!');
                // Limpa o formulário após o sucesso
                setFormData({
                    nome: '',
                    idade: '',
                    especie: '',
                    porte: '',
                    vacinas: '',
                    comportamento: '',
                    imagem: ''
                });
            } else {
                alert('Erro: ' + (result.message || 'Erro desconhecido ao cadastrar.'));
            }
        } catch (err) {
            console.error('Erro na requisição:', err);
            alert('Erro ao conectar com a API ou problema de rede.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h2 className={styles.formTitle}>Cadastrar Novo Animal</h2> {/* Título para o formulário */}
            
            <div className={styles.formGroup}>
                <label htmlFor="nome" className={styles.label}>Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome do Animal"
                    value={formData.nome}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="idade" className={styles.label}>Idade</label>
                <input
                    type="number"
                    id="idade"
                    name="idade"
                    placeholder="Idade em Anos"
                    value={formData.idade}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="especie" className={styles.label}>Espécie</label>
                <input
                    type="text"
                    id="especie"
                    name="especie"
                    placeholder="Ex: Cachorro, Gato"
                    value={formData.especie}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="porte" className={styles.label}>Porte</label>
                <input
                    type="text"
                    id="porte"
                    name="porte"
                    placeholder="Ex: Pequeno, Médio, Grande"
                    value={formData.porte}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="vacinas" className={styles.label}>Vacinas</label>
                <input
                    type="text"
                    id="vacinas"
                    name="vacinas"
                    placeholder="Ex: Raiva, V10"
                    value={formData.vacinas}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="comportamento" className={styles.label}>Comportamento</label>
                <input
                    type="text"
                    id="comportamento"
                    name="comportamento"
                    placeholder="Ex: Brincalhão, Calmo"
                    value={formData.comportamento}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="imagem" className={styles.label}>URL da Foto</label>
                <input
                    type="text"
                    id="imagem"
                    name="imagem"
                    placeholder="Insira a URL da imagem"
                    value={formData.imagem}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>

            <button type="submit" className={styles.button}>Cadastrar Animal</button>
        </form>
    );
}

export default AnimalForm;