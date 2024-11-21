import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
const SideBar = ({ category, isOpen }) => {
  const sidebarClass = isOpen ? "sidenav active" : "sidenav";

  return (
    <div className={sidebarClass}>
      <ul>
        <NavLink to="/audio">
          <li>
            <h2 id="x">Audio</h2>
          </li>
        </NavLink>
        <NavLink to="/gaming">
          <li>
            <h2 id="x">Gaming</h2>
          </li>
        </NavLink>
        <NavLink to="/mobile">
          <li>
            <h2 id="x">Mobile</h2>
          </li>
        </NavLink>
        <NavLink to="/tv">
          <li>
            <h2 id="x">TV</h2>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
