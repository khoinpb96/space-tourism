import "../scss/MobileNavbar.scss";
import hamburger from "../assets/icon-hamburger.svg";
import closeBtn from "../assets/icon-close.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function MobileNavbar() {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  return (
    <div className="navbar-mobile">
      <img
        src={hamburger}
        alt="hamburger-btn"
        onClick={() => {
          setNavbarIsOpen(true);
        }}
      />
      {navbarIsOpen && (
        <div className="navbar-mobile__container">
          <div
            className="close-btn"
            style={{ background: `url(${closeBtn})` }}
            onClick={() => {
              setNavbarIsOpen(false);
            }}
          />
          <div className="navlist">
            <NavLink exact to="/">
              <span>00</span>
              HOME
            </NavLink>

            <NavLink to="/destination">
              <span>01</span>
              DESTINATION
            </NavLink>

            <NavLink to="/crew">
              <span>02</span>
              CREW
            </NavLink>

            <NavLink to="/technology">
              <span>03</span>
              TECHNOLOGY
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
