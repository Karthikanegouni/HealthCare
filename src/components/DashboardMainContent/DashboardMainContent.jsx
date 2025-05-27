import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "./DashboardMainContent.css";

function DashboardMainContent() {
  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="dashboard-left">
          <div className="title-container">
            <h2>Dashboard</h2>
            <button className="week-tag" aria-label="Select week">
              This Week <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          <div className="anatomy-health-section">
            <AnatomySection />
            <HealthStatusCards />
          </div>

          <ActivityFeed />
        </div>

        <div className="dashboard-right">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
}

export default DashboardMainContent;
