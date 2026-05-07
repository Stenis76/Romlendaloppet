export function PracticalInfo({ items }) {
  return (
    <section className="section" id="info">
      <div className="container">
        <h2 className="section-title">PRAKTISK <span className="gold-text">INFO</span></h2>
        <div className="info-grid">
          {items.map((info, i) => {
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
  );
}
