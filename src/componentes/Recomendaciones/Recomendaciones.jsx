function Recomendaciones() {
  const navigate = useNavigate();

  return (
    <div className="contenedor">
      <button
        className="volver"
        onClick={() => navigate(-1)}
      >
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

      <button
        className="btn-continuar"
        onClick={() => navigate("/")}
      >
        Continuar
      </button>
    </div>
  );
}

export default Recomendaciones;