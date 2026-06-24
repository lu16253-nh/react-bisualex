import React from 'react'

const ComicApp = () => {
  const iniciar = () => {
    alert("¡Comienza la historia del cómic!");
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <div style={{
        backgroundColor: '#dccccc',
        padding: '40px',
        borderRadius: '8px',
        width: '60%',
        margin: '0 auto'
      }}>
        <h2>UNA SOLA MENTE COLECTIVA</h2>
      </div>

      <div style={{
        backgroundColor: '#b8b0b0',
        padding: '20px',
        borderRadius: '6px',
        width: '50%',
        margin: '20px auto'
      }}>
        <p>Corta sinopsis</p>
      </div>

      <button
        style={{
          backgroundColor: '#8ecae6',
          color: 'black',
          border: 'none',
          padding: '10px 30px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
        onClick={iniciar}
      >
        iniciar
      </button>
    </div>
  )
}

export default ComicApp
