import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
          
          <img src="/src/assets/logo.png" alt="Bisualex Logo" className="navbar-brand logo" />

          
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn nav-btn mx-2" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="btn nav-btn mx-2" href="#">Sobre Bisualex</a>
              </li>
              <li className="nav-item">
                <a className="btn nav-btn mx-2" href="#">Tienda</a>
              </li>

              
              <li className="nav-item d-flex align-items-center ms-3">
                <button className="btn lang-btn mx-1">EN</button>
                <button className="btn lang-btn mx-1">ES</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}