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
                <span style={{ textAlign: 'right' }}>{race.age}</span>
              </div>
              <div className="race-detail">
                <span className="race-label">Distans</span>
                <span style={{ textAlign: 'right' }}>{race.distance}</span>
              </div>
              <div className="race-detail">
                <span className="race-label">Start</span>
                <span style={{ textAlign: 'right' }}>{race.start}</span>
              </div>
              <div className="race-detail">
                <span className="race-label">Typ</span>
                <span style={{ textAlign: 'right', whiteSpace: 'pre-line' }}>{race.type}</span>
              </div>

              <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#666' }}>
                * Inkluderar {parseInt(race.price) > 50 ? 'vuxenlotteri' : 'barnlotteri'}
              </p>

              {race.mapUrl && (
                <div style={{ marginTop: '20px' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#999', marginBottom: '8px' }}>Rutt</p>
                  <img
                    src={race.mapUrl}
                    alt={`Karta för ${race.name}`}
                    style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: race.mapPosition || 'center', borderRadius: '8px', display: 'block' }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
