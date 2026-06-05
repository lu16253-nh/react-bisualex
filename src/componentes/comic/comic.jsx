import { useState } from "react";
import "./Comic.css";

export default function Comic() {
  const [showCharacters, setShowCharacters] = useState(false);

  return (
    <section className="comic text-center">
      <div className="container comic-content">
        <p className="comic-text">
          Este cómic digital interactivo transmedia nace en la era digital para fusionar ilustración,
          música y caminos múltiples que dependen de ti. Aquí descubrirás que cada decisión no solo abre
          un nuevo sendero, sino que también enseña cómo la narrativa evoluciona con la tecnología.
        </p>
        <p className="comic-text">
          La línea del tiempo te guiará por los distintos recorridos, permitiéndote revivir escenas,
          comparar elecciones y aprender que en este universo nada es fijo: todo está en constante transformación.
        </p>

        <button 
          className="btn comic-btn" 
          onClick={() => setShowCharacters(!showCharacters)}
        >
          {showCharacters ? "OCULTAR PERSONAJES" : "CONOCE A NUESTROS PERSONAJES"}
        </button>

        {showCharacters && (
          <>
            <h2 className="comic-title">PERSONAJES</h2>
            <div className="row">
              <div className="col-md-4">
                <img src="/src/assets/leo.png" alt="Leo" className="comic-img" />
                <h3>LEO</h3>
                <p className="comic-desc">
                  El joven programador, apasionado por la tecnología y el pasado digital...
                </p>
              </div>
              <div className="col-md-4">
                <img src="/src/assets/nora.png" alt="Nora" className="comic-img" />
                <h3>NORA</h3>
                <p className="comic-desc">
                  IA nacida en los primeros días de ARPANET, diseñada para leer recuerdos...
                </p>
              </div>
              <div className="col-md-4">
                <img src="/src/assets/ninove.png" alt="Ninove" className="comic-img" />
                <h3>NINOVE</h3>
                <p className="comic-desc">
                  Guardiana del tiempo que advierte a Leo sobre los riesgos de Nora...
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
