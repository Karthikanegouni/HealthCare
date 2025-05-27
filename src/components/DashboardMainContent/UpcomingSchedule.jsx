import SimpleAppointmentCard from "./SimpleAppointmentCard";
import checkIcon from "../../assets/check.png";
import eyeIcon from "../../assets/eye.png";
import heartIcon from "../../assets/heart.png";
import brainIcon from "../../assets/doctor.png";
import "./UpcomingSchedule.css";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>

      <div className="day-group">
        <h4>On Thursday</h4>
        <div className="card-row">
          <SimpleAppointmentCard title="Health checkup complete" time="11:00 AM" icon={checkIcon} />
          <SimpleAppointmentCard title="Ophthalmologist" time="14:00 PM" icon={eyeIcon} />
        </div>
      </div>

      <div className="day-group">
        <h4>On Saturday</h4>
        <div className="card-row">
          <SimpleAppointmentCard title="Cardiologist" time="12:00 AM" icon={heartIcon} />
          <SimpleAppointmentCard title="Neurologist" time="16:00 PM" icon={brainIcon} />
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
