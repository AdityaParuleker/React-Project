import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { Log } from "../../Context/Logincontext";

const Header = ({ user, setUser }) => {
  const handleLogOut = () => {
    localStorage.setItem("loggedInUser", "");
    setUser("");
    // window.location.reload()
  };

  const id = user[0].toUpperCase() + user.substring(1);
  return (
    <div id="header">
      <div>
        <h1 id="title" className="text-light">
          Dashboard
        </h1>
      </div>
      <div>
        {user ? (
          <div class="dropdown">
            <h2 id="username">{id}</h2>
            <div class="dropdown-content">
              <a onClick={handleLogOut} style={{ cursor: "pointer" }}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <NavLink to="/">
            <h1 style={{ color: "white" }}>Login</h1>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
