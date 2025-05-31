function AnimalList() {
    // Mock de dados até conectar com API
    const animais = [
      {
        nome: 'Rex',
        idade: '3',
        especie: 'Cachorro',
        porte: 'Médio',
        vacinas: 'Raiva, V10',
        comportamento: 'Brincalhão',
        imagem: 'https://via.placeholder.com/100'
      },
      {
        nome: 'Mimi',
        idade: '2',
        especie: 'Gato',
        porte: 'Pequeno',
        vacinas: 'Tríplice felina',
        comportamento: 'Calma',
        imagem: 'https://via.placeholder.com/100'
      }
    ]
  
    return (
      <div>
        {animais.map((animal, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={animal.imagem} alt={animal.nome} width="100" />
            <p><strong>Nome:</strong> {animal.nome}</p>
            <p><strong>Idade:</strong> {animal.idade}</p>
            <p><strong>Espécie:</strong> {animal.especie}</p>
            <p><strong>Porte:</strong> {animal.porte}</p>
            <p><strong>Vacinas:</strong> {animal.vacinas}</p>
            <p><strong>Comportamento:</strong> {animal.comportamento}</p>
          </div>
        ))}
      </div>
    )
  }
  
  export default AnimalList
  