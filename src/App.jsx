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
  
  // Sociala medier (lämna tomma om de inte ska visas)
  socials: {
    facebook: "https://www.facebook.com/groups/1919682515126062", 
    instagram: "https://www.instagram.com/romelandauf_p14/" 
  },
  
  // Bildspel (Hero)
  slides: [
    {
      badge: "22 AUGUSTI 2026",
      titleLine1: "ROMELANDA",
      titleLine2: "LOPPET",
      subtitle: "Gunnars äng · Romelanda · Kl 10–14",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: "Läs mer",
      bgImage: `${import.meta.env.BASE_URL}assets/bollkastning.jpeg`, 
    },
    {
      badge: "FÖR HELA FAMILJEN",
      titleLine1: "FYRA",
      titleLine2: "LOPP",
      subtitle: "250 m · 2 km · 3,5 km · 6,5 km",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: null,
      bgImage: `${import.meta.env.BASE_URL}assets/vinnare.JPG`, 
    },
    {
      badge: "PRISER & LOTTERI",
      titleLine1: "TÄVLA",
      titleLine2: "& VINN",
      subtitle: "Fika · Aktiviteter · Gemenskap",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: null,
      bgImage: `${import.meta.env.BASE_URL}assets/flagga.jpeg`,
    }
  ],

  // Infobar under hero
  infoStats: [
    { label: "Startkategorier", value: "4" },
    { label: "Åldrar välkomna", value: "0–99+" },
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
      type: "Jogga med vår maskot",
      price: "50 kr",
      featured: false
    },
    {
      id: "junior",
      name: "Juniorloppet",
      age: "7–12 år",
      distance: "2 km",
      start: "10:30 masstart",
      type: "Jogga i din egen takt, alla kan var med",
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
      type: "Motionär och elit",
      price: "150 kr",
      featured: true // Ger en guldkantad ram
    }
  ],

  // Tidslinje / Schema
  schedule: [
    { time: "10:00", name: "Knatteloppet", detail: "250 m · Uppvärmning med maskot 09:45 · Masstart" },
    { time: "10:30", name: "Juniorloppet", detail: "2 km · Masstart" },
    { time: "11:30", name: "Lilla loppet", detail: "3,5 km · Nivåstart - löpning och promenad" },
    { time: "12:30", name: "Stora loppet", detail: "6,5 km · Nivåstart - motionär och elit" },
    { time: "~14:00", name: "Prisutdelning & avslutning", detail: "Lotteri, priser och firande" }
  ],

  // Praktisk Info
  practicalInfo: [
    { 
      title: "Plats", 
      desc: "Gunnars äng, Romelanda (Diseröd)",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=57.924942,12.022068" // Länk till Google Maps
    },
    { 
      title: "Sista anmälan", 
      desc: "Torsdag 20 aug — Efteranmälan på plats +50 kr (vuxen), +25 kr (barn/junior)",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    { 
      title: "På plats", 
      desc: "Fika, aktiviteter och lotteri",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    },
    { 
      title: "Kontakt", 
      desc: "romelandaloppet@gmail.com",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    }
  ],

  // Sponsorer och Samarbetspartners
  sponsors: [
    {
      name: "Renta",
      logoUrl: `${import.meta.env.BASE_URL}assets/renta.png`, // Byt ut mot uppladdad bild, t.ex. "/renta.png"
      website: "https://www.renta.se"
    },
    {
      name: "Sponsor 2",
      logoUrl: "https://placehold.co/300x120/transparent/666666?text=SPONSOR+2", 
      website: "#"
    },
    {
      name: "Sponsor 3",
      logoUrl: "https://placehold.co/300x120/transparent/666666?text=SPONSOR+3", 
      website: "#"
    }
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
    <div className="app-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">
            ROMELANDA<span className="gold-text">LOPPET</span>
          </a>
          <div className="nav-links">
            <a href="#om">Om loppet</a>
            <a href="#kategorier">Kategorier</a>
            <a href="#info">Info</a>
            <a href={CONFIG.registrationUrl} target="_blank" rel="noreferrer" className="nav-cta">Anmäl dig</a>
          </div>
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
        <div className="container info-bar-inner">
          {CONFIG.infoStats.map((stat, i) => (
            <div key={i} className="info-item">
              <span className="info-value">{stat.value}</span>
              <span className="info-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Kategorier */}
      <section className="section" id="kategorier">
        <div className="container">
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
        </div>
      </section>

      {/* Anmälningsbanner */}
      <div className="cta-banner">
        <div className="container cta-banner-inner">
          <div className="cta-text">
            <h2>REDO ATT STÄLLA UPP?</h2>
            <p>Sista anmälningsdag: {CONFIG.registrationDeadline}</p>
          </div>
          <a href={CONFIG.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
            Anmäl dig här →
          </a>
        </div>
      </div>

      {/* Schema */}
      <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
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
        </div>
      </section>

      {/* Praktisk Info */}
      <section className="section" id="info">
        <div className="container">
          <h2 className="section-title">PRAKTISK <span className="gold-text">INFO</span></h2>
          <div className="info-grid">
            {CONFIG.practicalInfo.map((info, i) => {
              const CardContent = (
                <>
                  <div className="info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p>{info.desc}</p>
                </>
              );

              return info.mapUrl ? (
                <a 
                  key={i} 
                  href={info.mapUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="info-card premium-card clickable-card"
                >
                  {CardContent}
                  <div className="card-link-hint">📍 Klicka för karta →</div>
                </a>
              ) : (
                <div key={i} className="info-card premium-card">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorer */}
      {CONFIG.sponsors && CONFIG.sponsors.length > 0 && (
        <section className="section" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <h2 className="section-title">SPONSORER <span className="gold-text">& PARTNERS</span></h2>
            <div className="sponsors-grid">
              {CONFIG.sponsors.map((sponsor, i) => (
                <a 
                  key={i} 
                  href={sponsor.website} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sponsor-card"
                  title={`Besök ${sponsor.name}`}
                >
                  {sponsor.logoUrl ? (
                    <img src={sponsor.logoUrl} alt={`${sponsor.name} logotyp`} className="sponsor-logo" />
                  ) : (
                    <span className="sponsor-name">{sponsor.name}</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer>
        <div className="container">
          <h2>FRÅGOR? HÖR AV DIG!</h2>
          <a href={`mailto:${CONFIG.contactEmail}`}>{CONFIG.contactEmail}</a>
          
          {(CONFIG.socials.facebook || CONFIG.socials.instagram) && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '40px' }}>
              {CONFIG.socials.facebook && (
                <a href={CONFIG.socials.facebook} target="_blank" rel="noreferrer" style={{ marginBottom: 0 }} title="Följ oss på Facebook">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              )}
              {CONFIG.socials.instagram && (
                <a href={CONFIG.socials.instagram} target="_blank" rel="noreferrer" style={{ marginBottom: 0 }} title="Följ oss på Instagram">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              )}
            </div>
          )}

          <div className="footer-organizer">ARRANGERAS AV {CONFIG.organizer.toUpperCase()}</div>
        </div>
      </footer>
    </div>
  );
}
