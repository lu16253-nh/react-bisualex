import React from "react";
import "./StyleEscenaInicio.css";
import fondo from "./assets/fondo1.png";
import personaje from "./assets/Oso.json";
import mesa from "./assets/logo.png";
import computador from "./assets/terminal_antigua.jpg";
import disco from "./assets/disco.jpg";

const EscenaInicio = () => {
  return (
    <div className="escena">

      <img
        src={fondo}
        alt="Fondo"
        className="fondo"
      />

      <img
        src={personaje}
        alt="Personaje"
        className="personaje"
      />

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
        alt="Disquete"
        className="disco"
      />

    </div>
  );
};

export default EscenaInicio;