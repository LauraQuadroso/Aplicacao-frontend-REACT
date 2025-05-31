
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './AnimalForm.module.css'; 

function AnimalEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    especie: '',
    porte: '',
    vacinas: '',
    comportamento: '',
    imagem: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
   
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`http://localhost:3000/animais/${id}`);
        if (!response.ok) {
          throw new Error('Animal não encontrado.');
        }
        const data = await response.json();
        setFormData({
          nome: data.nome || '',
          idade: data.idade || '',
          especie: data.especie || '',
          porte: data.porte || '',
          vacinas: data.vacinas || '',
          comportamento: data.comportamento || '',
          imagem: data.imagem || ''
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    try {
      const response = await fetch(`http://localhost:3000/animais/${id}`, {
        method: 'PUT', // Atualização
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Animal atualizado com sucesso!');
        navigate(`/animais/${id}`); 
      } else {
        setSubmitError(result.message || 'Erro desconhecido ao atualizar.');
      }
    } catch (err) {
      setSubmitError('Erro ao conectar com a API ou problema de rede.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <p className={styles.loadingMessage}>Carregando dados do animal...</p>;
  }

  if (error) {
    return <p className={styles.errorMessage}>Erro: {error}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Editar Animal</h2>

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
          min="0"
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

      {submitError && <p className={styles.errorMessage}>{submitError}</p>}

      <button type="submit" className={styles.button} disabled={submitting}>
        {submitting ? 'Salvando...' : 'Salvar Alterações'}
      </button>
    </form>
  );
}

export default AnimalEditForm;
