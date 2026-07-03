import React from "react";
import { useNavigate } from "react-router-dom";

const ComicApp = () => {
  const navigate = useNavigate();

  const iniciar = () => {
    alert("¡Comienza la historia del cómic!");
    navigate("/historia");
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-10 text-center">

          <h1 className="display-7 fw-bold text-primary mb-4">
            UNA SOLA MENTE COLECTIVA
          </h1>

          <p className="fs-4 text-secondary mb-4">
            La era digital nos invita a vivir las historias de otra manera. Aquí no solo lees, sino que eliges, exploras y sientes.

          </p>

          

          <button
            className="btn btn-primary btn-lg px-5 py-3 shadow"
            onClick={iniciar}
          >
            Iniciar
          </button>

        </div>

      </div>

    </div>
  );
};

export default ComicApp;
