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
            <li>Se recomienda activar el sonido para una mejor experiencia.</li>
            <li>Haz clic en los objetos interactivos.</li>
            <li>Explora cuidadosamente el entorno para encontrar pistas.</li>
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
