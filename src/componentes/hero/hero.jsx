import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero d-flex align-items-center text-center">
      <div className="container hero-content">
        
        <h1 className="hero-title">UNA SOLA MENTE COLECTIVA</h1>

        
        <p className="hero-text">
          La era digital nos invita a vivir las historias de otra manera. 
          Aquí no solo lees, sino que eliges, exploras y sientes.
        </p>
        <p className="hero-text">
          Una narrativa interactiva donde las imágenes, el sonido y la tecnología 
          se unen para crear una experiencia única.
        </p>

       
        <button className="btn btn-primary btn-lg hero-btn">
          VIVE LA EXPERIENCIA
        </button>
      </div>
    </section>
  );
}
