export function Sponsors({ sponsors }) {
  if (!sponsors || sponsors.length === 0) {
    return null;
  }

  return (
    <section className="section" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <h2 className="section-title">SPONSORER <span className="gold-text">& PARTNERS</span></h2>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, i) => (
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
  );
}
