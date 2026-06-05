import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Columna izquierda: contacto */}
        <div className="footer-left">
          <h4>CONTACT US</h4>
          <p>bisualex04@gmail.com</p>
          <p>3144509485</p>
          <p>3118202253</p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Columna derecha: políticas y derechos */}
        <div className="footer-right">
          <a href="#" className="footer-policy">POLÍTICAS DE PRIVACIDAD</a>
          <p>© 2025 Bisualex. Todos los derechos reservados.</p>
          <p>MEDELLÍN - COLOMBIA</p>
        </div>
      </div>
    </footer>
  );
}
