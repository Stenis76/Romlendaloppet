export function RaceCategories({ races }) {
  return (
    <section className="section" id="kategorier">
      <div className="container">
        <h2 className="section-title">VÄLJ DITT <span className="gold-text">LOPP</span></h2>
        <div className="categories-grid">
          {races.map((race) => (
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

              <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
                * Inkluderar {parseInt(race.price) > 50 ? 'vuxenlotteri' : 'barnlotteri'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
