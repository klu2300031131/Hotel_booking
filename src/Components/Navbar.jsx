import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // ✅ Load user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setUser(null);
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo"><strong>HΔVENLY</strong></span>
      </div>

      <div className="nav-right">
        <span className="currency">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="India Flag"
            className="flag-icon"
          />
          INR
        </span>

        <span className="nav-item">
          <Link to="/packages">Packages</Link>
        </span>

        <span className="nav-item">
          <Link to="/about">About Us</Link>
        </span>

        <span className="nav-item">
          <Link to="/booking">Booking</Link>
        </span>

        {/* ✅ Favorites */}
        <span className="nav-item">
          <Link to="/favorites">Favorites</Link>
        </span>

        {user ? (
          <div className="user-dropdown">
            <span
              className="nav-item user-name"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user.name ? user.name : user.email} 
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <span className="dropdown-item" onClick={handleLogout}>
                  Logout
                </span>
              </div>
            )}
          </div>
        ) : (
          <span className="nav-item">
            <Link to="/login">Sign in / Login</Link>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
