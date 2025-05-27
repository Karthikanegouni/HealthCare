import AppointmentCard from './AppointmentCard';
import './CalendarView.css';

function CalendarView() {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];

  const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  const activeSlots = {
    'Tues': ['09:00'],
    'Thurs': ['11:00'],
    'Sat': ['13:00'],
    'Sun': ['09:00']
  };

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h4>October 2021</h4>
        <div className="calendar-nav">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => (
          <div key={day} className="calendar-day">
            <p className="day-label">{day}</p>
            <p className="date-label">{dates[index]}</p>
            {times.map((time) => (
              <div
                key={time}
                className={`time-slot ${activeSlots[day]?.includes(time) ? 'active' : ''}`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <AppointmentCard
          title="Dentist"
          time="09:00–11:00"
          doctor="Dr. Cameron Williamson"
          icon="🦷"
          variant="purple"
        />
        <AppointmentCard
          title="Physiotherapy Appointment"
          time="11:00–12:00"
          doctor="Dr. Kevin Djones"
          icon="💪"
        />
      </div>
    </div>
  );
}

export default CalendarView;