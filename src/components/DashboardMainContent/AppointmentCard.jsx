import './AppointmentCard.css';

function AppointmentCard({ title, time, doctor, icon, variant = 'default' }) {
  return (
    <div className={`appointment-card ${variant}`}>
      <div className="card-header">
        <span>{title}</span>
        <span className="icon">{icon}</span>
      </div>
      <div className="card-details">
        <p>{time}</p>
        <p>{doctor}</p>
      </div>
    </div>
  );
}

export default AppointmentCard;
