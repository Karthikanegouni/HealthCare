import lungsIcon from "../../assets/lungs.png";
import teethIcon from "../../assets/teeth.png";
import boneIcon from "../../assets/bone.png";
import "./HealthStatusCards.css";

function HealthStatusCards() {
  const data = [
    {
      title: "Lungs",
      date: "26 Oct 2021",
      progress: 80,
      icon: lungsIcon,
      progressClass: "progress-red",
    },
    {
      title: "Teeth",
      date: "26 Oct 2021",
      progress: 80,
      icon: teethIcon,
      progressClass: "progress-green",
    },
    {
      title: "Bone",
      date: "26 Oct 2021",
      progress: 60,
      icon: boneIcon,
      progressClass: "progress-orange",
    },
  ];

  return (
    <section className="health-cards">
      {data.map((item) => (
        <div className="card" key={item.title}>
          <div className="card-header">
            <img src={item.icon} alt={item.title} className="icon-img" />
            <h3>{item.title}</h3>
          </div>
          <p>Date: {item.date}</p>
          <progress
            className={item.progressClass}
            value={item.progress}
            max="100"
          ></progress>
        </div>
      ))}
      <p className="details">Details <i class="fa-solid fa-arrow-right"></i></p>
    </section>
  );
}

export default HealthStatusCards;
