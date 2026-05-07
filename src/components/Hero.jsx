export function Hero({ slides, registrationUrl, currentSlide, onSlideSelect }) {
  return (
    <header className="hero-container" id="om">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
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
              <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-gold">
                {slide.primaryButtonText}
              </a>
              {slide.secondaryButtonText && (
                <a href={slide.secondaryButtonLink || "#kategorier"} className="btn btn-outline">
                  {slide.secondaryButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="slide-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => onSlideSelect(index)}
          ></div>
        ))}
      </div>
    </header>
  );
}
