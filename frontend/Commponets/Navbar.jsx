import React from "react";
import "./CompanyList.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">★</span>
        <span className="logo-text">
          Review<span className="logo-accent">&RATE</span>
        </span>
      </div>

<div className="right">
<div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">🔍</button>
      </div>

      <div className="auth-links">
        <a href="#">SignUp</a>
        <a href="#">Login</a>
      </div>
</div>
    </nav>
  );
};

export default Navbar;
