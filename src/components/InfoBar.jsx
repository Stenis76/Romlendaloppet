export function InfoBar({ stats }) {
  return (
    <div className="info-bar">
      <div className="container info-bar-inner">
        {stats.map((stat, i) => (
          <div key={i} className="info-item">
            <span className="info-value">{stat.value}</span>
            <span className="info-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
