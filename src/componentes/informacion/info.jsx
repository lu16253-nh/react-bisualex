import "./Info.css";

export default function Info() {
  return (
    <section className="info d-flex align-items-center text-center">
      <div className="container info-content">
        <h2 className="info-title">¿QUÉ ES UN CÓMIC DIGITAL INTERACTIVO?</h2>

        <p className="info-text">
          Es una historia ilustrada en formato digital que combina imágenes, texto y opciones de interacción,
          permitiendo al lector explorar la trama de manera dinámica y participativa.
        </p>
        <p className="info-text">
          No se limita a mostrar viñetas estáticas, sino que integra recursos como animaciones, sonidos,
          transiciones, música o incluso decisiones del lector que pueden modificar el recorrido narrativo.
        </p>
        <p className="info-text">
          De esta manera un cómic se convierte en una experiencia inmersiva donde el público ya no es un espectador,
          sino un participante activo dentro de la historia.
        </p>

        <button className="btn info-btn">¡CONOCE NUESTRO CÓMIC!</button>
      </div>
    </section>
  );
}
