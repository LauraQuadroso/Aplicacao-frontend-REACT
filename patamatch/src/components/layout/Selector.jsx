import React from 'react';

function Selector() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
      <select>
        <option value="tipo">Tipo do animal</option>
        
      </select>
      <select>
        <option value="porte">Porte</option>
      
      </select>
      <select>
        <option value="idade">Idade</option>
        
      </select>
      <button>De um match</button>
    </div>
  );
}

export default Selector;