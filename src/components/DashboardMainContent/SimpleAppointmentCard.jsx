import "./SimpleAppointmentCard.css";

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-appointment-card">
      <div className="text-content">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
      <img src={icon} alt="icon" className="icon" />
    </div>
  );
}

export default SimpleAppointmentCard;
