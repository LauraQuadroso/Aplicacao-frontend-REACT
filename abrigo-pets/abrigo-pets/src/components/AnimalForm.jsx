import { useState } from 'react'
import styles from './AnimalForm.module.css'

function AnimalForm() {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    especie: '',
    porte: '',
    vacinas: '',
    comportamento: '',
    imagem: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/animais', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        alert('Animal cadastrado com sucesso!')
        setFormData({
          nome: '',
          idade: '',
          especie: '',
          porte: '',
          vacinas: '',
          comportamento: '',
          imagem: ''
        })
      } else {
        alert('Erro: ' + result.message)
      }
    } catch (err) {
      console.error('Erro na requisição:', err)
      alert('Erro ao conectar com a API')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} className={styles.input} required />
      <input type="number" name="idade" placeholder="Idade" value={formData.idade} onChange={handleChange} className={styles.input} required />
      <input type="text" name="especie" placeholder="Espécie" value={formData.especie} onChange={handleChange} className={styles.input} required />
      <input type="text" name="porte" placeholder="Porte" value={formData.porte} onChange={handleChange} className={styles.input} required />
      <input type="text" name="vacinas" placeholder="Vacinas" value={formData.vacinas} onChange={handleChange} className={styles.input} />
      <input type="text" name="comportamento" placeholder="Comportamento" value={formData.comportamento} onChange={handleChange} className={styles.input} />
      <input type="text" name="imagem" placeholder="URL da Imagem" value={formData.imagem} onChange={handleChange} className={styles.input} />
      <button type="submit" className={styles.button}>Cadastrar</button>
    </form>
  )
}

export default AnimalForm
