import "./AnatomySection.css";
import bodyImage from "../../assets/human-body.png";

function AnatomySection() {
  return (
    <div className="body-container">
      <img src={bodyImage} alt="Illustration of human body anatomy" className="body-image" />
      <div className="health-badge heart">❤️ Healthy Heart</div>
      <div className="health-badge leg">🦵 Healthy Leg</div>
    </div>
  );
}

export default AnatomySection;
