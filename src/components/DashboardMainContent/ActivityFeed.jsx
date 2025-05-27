import "./ActivityFeed.css";

function ActivityFeed() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  // Each sub-array: 4 bars [height, color]
  const chartData = [
    [ [40, "gray"], [30, "cyan"], [20, "purple"], [50, "gray"] ],
    [ [25, "gray"], [45, "cyan"], [35, "purple"], [40, "gray"] ],
    [ [30, "gray"], [20, "cyan"], [25, "purple"], [50, "gray"] ],
    [ [35, "gray"], [25, "cyan"], [30, "purple"], [45, "gray"] ],
    [ [20, "gray"], [50, "cyan"], [30, "purple"], [40, "gray"] ],
    [ [25, "gray"], [30, "cyan"], [20, "purple"], [45, "gray"] ],
    [ [40, "gray"], [35, "cyan"], [25, "purple"], [30, "gray"] ],
  ];

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h4>Activity</h4>
        <p>3 appointment on this week</p>
      </div>

      <div className="activity-bars">
        {chartData.map((bars, index) => (
          <div className="bar-column" key={index}>
            <div className="bars">
              {bars.map((bar, i) => (
                <div
                  key={i}
                  className={`bar ${bar[1]}`}
                  style={{ height: `${bar[0]}px` }}
                ></div>
              ))}
            </div>
            <p className="day-label">{days[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
