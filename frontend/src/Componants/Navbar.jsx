import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="active">
        Roxiler Systems
      </NavLink>
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
      <NavLink to="/static" activeClassName="active">
        Static
      </NavLink>
      <NavLink to="/barchart" activeClassName="active">
        BarChart
      </NavLink>
    </nav>
  );
}

export default Navbar;
