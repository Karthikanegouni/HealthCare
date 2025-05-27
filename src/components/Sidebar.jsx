import { useState } from "react";
import "./Sidebar.css";

function Sidebar({ isOpen, onClose }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const generalMenuItems = [
    { name: "Dashboard", iconClass: "bi bi-grid-fill" },
    { name: "History", iconClass: "bi bi-arrow-down-up" },
    { name: "Calendar", iconClass: "bi bi-calendar3" },
    { name: "Appointments", iconClass: "bi bi-plus-square-fill" },
    { name: "Statistics", iconClass: "bi bi-file-earmark-bar-graph-fill" },
  ];

  const toolsMenuItems = [
    { name: "Chat", iconClass: "bi bi-chat-dots-fill" },
    { name: "Support", iconClass: "bi bi-telephone-fill" },
  ];

  const renderMenu = (items) =>
    items.map((item) => (
      <li
        key={item.name}
        className={`list-items ${activeItem === item.name ? "active" : ""}`}
        onClick={() => setActiveItem(item.name)}
      >
        <i className={item.iconClass}></i>
        <p>{item.name}</p>
      </li>
    ));

  return (
    <div className={`sidebar-container ${isOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-top">
        <p className="list-type">General</p>
        <ul>{renderMenu(generalMenuItems)}</ul>

        <p className="list-type">Tools</p>
        <ul>{renderMenu(toolsMenuItems)}</ul>
      </div>

      <div className="sidebar-bottom">
        <ul>
          <li
            className={`list-items ${activeItem === "Setting" ? "active" : ""}`}
            onClick={() => setActiveItem("Setting")}
          >
            <i className="bi bi-gear-fill"></i>
            <p>Setting</p>
          </li>
        </ul>
      </div>

      {/* Mobile Close Button */}
      <button className="close-btn" onClick={onClose}>✕</button>
    </div>
  );
}

export default Sidebar;
