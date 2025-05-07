import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './AnimalList.module.css'

function AnimalList() {
  const [animais, setAnimais] = useState([])
  const [erro, setErro] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/animais')
      .then(response => {
        setAnimais(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar animais:', error)
        setErro('Erro ao carregar os dados.')
      })
  }, [])

  return (
    <div>
      <h2 className={styles.title}>Animais disponíveis para adoção</h2>
      {erro && <p className={styles.error}>{erro}</p>}
      <div className={styles.cardContainer}>
        {animais.map((animal, index) => (
          <div key={index} className={styles.card}>
            {animal.imagem && <img src={animal.imagem} alt={animal.nome} className={styles.image} />}
            <h3>{animal.nome}</h3>
            <p><strong>Idade:</strong> {animal.idade}</p>
            <p><strong>Espécie:</strong> {animal.especie}</p>
            <p><strong>Porte:</strong> {animal.porte}</p>
            <p><strong>Vacinas:</strong> {animal.vacinas}</p>
            <p><strong>Comportamento:</strong> {animal.comportamento}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimalList
