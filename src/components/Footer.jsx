export function Footer({ contactEmail, socials, organizer }) {
  return (
    <footer>
      <div className="container">
        <h2>FRÅGOR? HÖR AV DIG!</h2>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>

        {(socials.facebook || socials.instagram) && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', marginBottom: '40px' }}>
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noreferrer" style={{ marginBottom: 0 }} title="Följ oss på Facebook">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            )}
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noreferrer" style={{ marginBottom: 0 }} title="Följ oss på Instagram">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            )}
          </div>
        )}

        <div className="footer-organizer">ARRANGERAS AV {organizer.toUpperCase()}</div>
      </div>
    </footer>
  );
}
