import "../scss/Header.scss";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  return (
    <header className="wrapper">
      <div className="logo" />

      <nav>
        <NavLink exact to="/" activeClassName="active">
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
      </nav>
      <MobileNavbar />
    </header>
  );
}
