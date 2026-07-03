import "./Recomendaciones.css";


function Recomendaciones({ abierto, onCerrar, onContinuar }) {
  if (!abierto) return null;

  return (
    <div className="overlay" onClick={onCerrar}>
      <div className="contenedor" onClick={(e) => e.stopPropagation()}>
        <button className="volver" onClick={onCerrar}>
          ←
        </button>
        <h2>RECOMENDACIONES</h2>
        <div className="caja">
          <ol>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
          </ol>
        </div>
        <button className="btn-continuar" onClick={onContinuar}>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default Recomendaciones;
