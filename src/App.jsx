import { useState, useEffect } from 'react';
import './App.css';

// ==========================================
// CONFIG - ALL REDIGERBAR DATA FÖR LOPPET
// ==========================================
const CONFIG = {
  eventDate: "22 augusti 2026",
  eventLocation: "Gunnars äng, Romelanda (Diseröd)",
  eventTime: "Kl 10–14",
  registrationUrl: "https://forms.gle/84LgLtXCx37ZLwBc7",
  registrationDeadline: "Torsdag 20 augusti",
  contactEmail: "romelandaloppet@gmail.com",
  organizer: "RUF P-14 · Romelanda UF",
  
  // Bildspel (Hero)
  slides: [
    {
      badge: "22 AUGUSTI 2026",
      titleLine1: "ROMELANDA",
      titleLine2: "LOPPET",
      subtitle: "Gunnars äng · Romelanda · Kl 10–14",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: "Läs mer",
      // Byt ut dessa mot riktiga bilduppladdningar senare. (ex: "url(/images/slide1.jpg)")
      // Använder en mörk bakgrundsfärg nu som platshållare.
      bgImage: "/assets/bollkastning.jpeg", 
    },
    {
      badge: "FÖR HELA FAMILJEN",
      titleLine1: "FYRA",
      titleLine2: "LOPP",
      subtitle: "250 m · 2 km · 3,5 km · 6,5 km",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: null,
      bgImage: "public/assets/vinnare.JPG", 
    },
    {
      badge: "PRISER & LOTTERI",
      titleLine1: "TÄVLA",
      titleLine2: "& VINN",
      subtitle: "Fika · Aktiviteter · Gemenskap",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: null,
      bgImage: "public/assets/flagga.jpeg",
    }
  ],

  // Infobar under hero
  infoStats: [
    { label: "Startkategorier", value: "4" },
    { label: "Åldrar välkomna", value: "0–99" },
    { label: "Sista anmälan", value: "20 aug" },
    { label: "Arrangör", value: "RUF P-14" }
  ],

  // Lopp-kategorier
  races: [
    {
      id: "knatte",
      name: "Knatteloppet",
      age: "0–6 år",
      distance: "250 m",
      start: "10:00",
      type: "–",
      price: "50 kr",
      featured: false
    },
    {
      id: "junior",
      name: "Juniorloppet",
      age: "7–12 år",
      distance: "2 km",
      start: "10:30 masstart",
      type: "Pris till vinnaren",
      price: "50 kr",
      featured: false
    },
    {
      id: "lilla",
      name: "Lilla loppet",
      age: "Ungdom/vuxen",
      distance: "3,5 km",
      start: "11:30 masstart",
      type: "Promenad eller jogg",
      price: "150 kr",
      featured: false
    },
    {
      id: "stora",
      name: "Stora loppet",
      age: "Ungdom/vuxen",
      distance: "6,5 km",
      start: "12:30 nivåstart",
      type: "Pris till vinnaren",
      price: "150 kr",
      featured: true // Ger en guldkantad ram
    }
  ],

  // Tidslinje / Schema
  schedule: [
    { time: "10:00", name: "Knatteloppet", detail: "250 m · Uppvärmning med maskot 09:45" },
    { time: "10:30", name: "Juniorloppet", detail: "2 km · Masstart" },
    { time: "11:30", name: "Lilla loppet", detail: "3,5 km · Masstart · Promenad eller jogg" },
    { time: "12:30", name: "Stora loppet", detail: "6,5 km · Nivåstart · Pris till vinnaren" },
    { time: "~14:00", name: "Prisutdelning & avslutning", detail: "Lotteri, priser och firande" }
  ],

  // Praktisk Info
  practicalInfo: [
    { title: "Plats", desc: "Gunnars äng, Romelanda (Diseröd)" },
    { title: "Sista anmälningsdag", desc: "Torsdag 20 aug — Efteranmälan på plats +50 kr (vuxen), +25 kr (barn/junior)" },
    { title: "På plats", desc: "Fika, aktiviteter och lotteri" },
    { title: "Kontakt", desc: "romelandaloppet@gmail.com" }
  ]
};

// ==========================================
// REACT KOMPONENTER
// ==========================================

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay för bildspelet - byter slide var 4:e sekund
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CONFIG.slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          ROMELANDA<span className="gold-text">LOPPET</span>
        </a>
        <div className="nav-links">
          <a href="#om">Om loppet</a>
          <a href="#kategorier">Kategorier</a>
          <a href="#info">Info</a>
          <a href={CONFIG.registrationUrl} target="_blank" rel="noreferrer" className="nav-cta">Anmäl dig</a>
        </div>
      </nav>

      {/* Hero Bildspel */}
      <header className="hero-container" id="om">
        {CONFIG.slides.map((slide, index) => (
          <div 
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            // Om du har en riktig bildURL, ändra backgroundImage: `url(${slide.bgImage})`
            style={{ 
  backgroundImage: `url(${slide.bgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="slide-badge">{slide.badge}</div>
              <h1 className="slide-title">
                {slide.titleLine1}<br />
                {slide.titleLine2 === 'LOPPET' ? <span className="gold-text">{slide.titleLine2}</span> : slide.titleLine2}
              </h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="slide-buttons">
                <a href={CONFIG.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-gold">
                  {slide.primaryButtonText}
                </a>
                {slide.secondaryButtonText && (
                  <a href="#kategorier" className="btn btn-outline">
                    {slide.secondaryButtonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigationsprickar för bildspelet */}
        <div className="slide-dots">
          {CONFIG.slides.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </header>

      {/* Info Bar */}
      <div className="info-bar">
        {CONFIG.infoStats.map((stat, i) => (
          <div key={i} className="info-item">
            <span className="info-value">{stat.value}</span>
            <span className="info-label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Kategorier */}
      <section className="section" id="kategorier">
        <h2 className="section-title">VÄLJ DITT <span className="gold-text">LOPP</span></h2>
        <div className="categories-grid">
          {CONFIG.races.map((race) => (
            <div key={race.id} className={`race-card ${race.featured ? 'featured' : ''}`}>
              <div className="race-price-badge">{race.price}</div>
              <h3 className="race-title">{race.name}</h3>
              
              <div className="race-detail">
                <span className="race-label">Ålder</span>
                <span>{race.age}</span>
              </div>
              <div className="race-detail">
                <span className="race-label">Distans</span>
                <span>{race.distance}</span>
              </div>
              <div className="race-detail">
                <span className="race-label">Start</span>
                <span>{race.start}</span>
              </div>
              <div className="race-detail">
                <span className="race-label">Typ</span>
                <span>{race.type}</span>
              </div>
              
              {/* Extra info-text per lopp utifrån pris */}
              <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
                * Inkluderar {parseInt(race.price) > 50 ? 'vuxenlotteri' : 'barnlotteri'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Anmälningsbanner */}
      <div className="cta-banner">
        <div className="cta-text">
          <h2>REDO ATT STÄLLA UPP?</h2>
          <p>Sista anmälningsdag: {CONFIG.registrationDeadline}</p>
        </div>
        <a href={CONFIG.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
          Anmäl dig här →
        </a>
      </div>

      {/* Schema */}
      <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <h2 className="section-title">TIDER <span className="gold-text">& SCHEMA</span></h2>
        <div className="schedule-container">
          {CONFIG.schedule.map((item, i) => (
            <div key={i} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-info">
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Praktisk Info */}
      <section className="section" id="info">
        <h2 className="section-title">PRAKTISK <span className="gold-text">INFO</span></h2>
        <div className="info-grid">
          {CONFIG.practicalInfo.map((info, i) => (
            <div key={i} className="info-card">
              <h3>{info.title}</h3>
              <p>{info.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <h2>FRÅGOR? HÖR AV DIG!</h2>
        <a href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</a>
        <div className="footer-organizer">ARRANGERAS AV {CONFIG.organizer.toUpperCase()}</div>
      </footer>
    </>
  );
}
