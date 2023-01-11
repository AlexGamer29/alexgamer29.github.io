import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignUpButton, LoginButton, Dropdown } from "../index.js";
import images from "../../constants/images";

import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <div className="navbar-logo">
            <img src={images.logo} alt="" className="logo" />
          </div>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/make-todolist"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Make todoList <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />} 
          </li>
          <li className="nav-item">
            <Link to="/explore" className="nav-links" onClick={closeMobileMenu}>
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
              Learn
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div className="nav-authorization-area">
          <SignUpButton />
          <div class="divider" />
          <LoginButton />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
