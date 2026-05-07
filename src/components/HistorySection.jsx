export function HistorySection({ history }) {
  return (
    <section className="section" id="historia" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '10px' }}>VÅR <span className="gold-text">HISTORIA</span></h2>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-gray)', marginBottom: '30px', fontFamily: 'var(--font-condensed)', textTransform: 'uppercase' }}>
            {history.subtitle}
          </h3>
          <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
            {history.content.map((paragraph, i) => (
              <p key={i} style={{ marginBottom: '20px' }}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
