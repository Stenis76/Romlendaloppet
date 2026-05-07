export function Navbar({ registrationUrl }) {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="nav-logo">
          ROMELANDA<span className="gold-text">LOPPET</span>
        </a>
        <div className="nav-links">
          <a href="#om">Om loppet</a>
          <a href="#kategorier">Kategorier</a>
          <a href="#info">Info</a>
          <a href={registrationUrl} target="_blank" rel="noreferrer" className="nav-cta">Anmäl dig</a>
        </div>
      </div>
    </nav>
  );
}
