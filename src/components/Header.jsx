import "./Header.css";
import avatar from "../assets/avatar.png";

function Header({ onHamburgerClick }) {
  return (
    <div className="header-container">
      {/* Hamburger icon for mobile */}
      <button className="hamburger-icon" onClick={onHamburgerClick}>
        ☰
      </button>

      <h1>
        <span>Health</span>care.
      </h1>

      <div className="header-left">
        <div className="search-container">
          <i className="search-icon bi bi-search"></i>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <i
          className="bi bi-bell-fill notification-icon"
          role="button"
          aria-label="Notifications"
          tabIndex={0}
        ></i>
      </div>

      <div className="header-right">
        <div className="user-profile">
          <img src={avatar} alt="User" className="user-avatar" />
        </div>
        <button className="add-button" aria-label="Add new">
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
