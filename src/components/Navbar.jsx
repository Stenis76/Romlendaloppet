import { useState } from 'react';

export function Navbar({ registrationUrl }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="nav-logo" onClick={close}>
          ROMELANDA<span className="gold-text">LOPPET</span>
        </a>

        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Meny"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <div className={`nav-links${open ? ' nav-links--open' : ''}`}>
          <a href="#om" onClick={close}>Om loppet</a>
          <a href="#kategorier" onClick={close}>Kategorier</a>
          <a href="#info" onClick={close}>Info</a>
          <a href={registrationUrl} target="_blank" rel="noreferrer" className="nav-cta" onClick={close}>Anmäl dig</a>
        </div>
      </div>
    </nav>
  );
}
