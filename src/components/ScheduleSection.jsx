export function ScheduleSection({ schedule }) {
  return (
    <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container">
        <h2 className="section-title">TIDER <span className="gold-text">& SCHEMA</span></h2>
        <div className="schedule-container">
          {schedule.map((item, i) => (
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
  );
}
