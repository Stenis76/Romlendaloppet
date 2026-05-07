export function CtaBanner({ registrationDeadline, registrationUrl }) {
  return (
    <div className="cta-banner">
      <div className="container cta-banner-inner">
        <div className="cta-text">
          <h2>REDO ATT STÄLLA UPP?</h2>
          <p>Sista anmälningsdag: {registrationDeadline}</p>
        </div>
        <a href={registrationUrl} target="_blank" rel="noreferrer" className="btn btn-dark">
          Anmäl dig här →
        </a>
      </div>
    </div>
  );
}
