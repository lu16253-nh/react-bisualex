import React from "react";
import "./StyleTerminal.css";
import terminal from "../../assets/terminal.png";

const Terminal = ({ cerrar }) => {
  return (
    <div className="terminal-overlay">

      <div className="terminal-contenedor">

        <img
          src={terminal}
          alt="Terminal"
          className="terminal-imagen"
        />

        <div className="pantalla">

          <p>
            Bienvenido.
            <br /><br />
            Inserte un disquete para comenzar.
          </p>

          <button onClick={cerrar}>
            Cerrar
          </button>

        </div>

      </div>

    </div>
  );
};

export default Terminal;