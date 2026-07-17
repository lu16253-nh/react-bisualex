import React, { useRef, useState, useEffect } from "react";
import lottieReact from "lottie-react";
const Lottie = lottieReact.default;

import "./StyleEscenaInicio.css";
import fondo from "../../assets/fondo1.png";
import personaje from "../../assets/personaje.json";
import mesa from "../../assets/mesa.png";
import computador from "../../assets/computador.png";
import disco from "../../assets/disco.png";
import musica from "../../assets/music.mp3";

const EscenaInicio = () => {

  const audioRef = useRef(new Audio(musica));

  const [reproduciendo, setReproduciendo] = useState(false);

  const reproducirMusica = () => {
    if (reproduciendo) {
      audioRef.current.pause();
      setReproduciendo(false);
    } else {
      audioRef.current.play();
      setReproduciendo(true);
    }
  };

  useEffect(() => {
    audioRef.current.onended = () => {
      setReproduciendo(false);
    };
  }, []);

  return (
    <div className="escena">

      <img
        src={fondo}
        alt="Fondo"
        className="fondo"
      />

      <div className="personaje-container">
        <Lottie
          animationData={personaje}
          className="personaje"
        />
      </div>

      <img
        src={mesa}
        alt="Mesa"
        className="mesa"
      />

      <img
        src={computador}
        alt="Computador"
        className="computador"
      />

      <img
        src={disco}
        alt="Disco"
        className="disco"
        onClick={reproducirMusica}
        style={{ cursor: "pointer" }}
      />

    </div>
  );
};

export default EscenaInicio;