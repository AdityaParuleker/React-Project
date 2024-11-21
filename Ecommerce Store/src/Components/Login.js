import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { AuthContext } from "../Context/ProductContext";
import { LogContext } from "../Context/LoginContext";
import "./Login.css";

import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    user,
    handleLogOut,
    loggedInUserData,
    handleLogin,
  } = useContext(LogContext);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };
  const navigate = useNavigate();
  return (
    <>
      <header
        id="header"
        style={{ height: "60px", background: "black", color: "white" }}
      >
        <NavLink to="/login">
          {user === "logged" ? (
            <div class="dropdown">
              <h4 style={{ color: "white" }}>
                User {loggedInUserData.firstName}
              </h4>
              <div class="dropdown-content">
                <a onClick={handleLogOut}>Logout</a>
              </div>
            </div>
          ) : (
            <h1 style={{ color: "white" }}>Login</h1>
          )}
        </NavLink>
      </header>
      <div id="barcart" style={{ backgroundColor: "black", color: "white" }}>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/audio">
          <h3> Audio</h3>
        </NavLink>
        <NavLink to="/gaming">
          <h3> Gaming</h3>
        </NavLink>
        <NavLink to="/mobile">
          <h3> Mobile</h3>
        </NavLink>
        <NavLink to="/tv">
          <h3> TV</h3>
        </NavLink>
      </div>
      <div id="login">
        <Form
          id="loginform"
          onSubmit={(e) => {
            submitHandler(e);
            handleLogin(email, password);
          }}
        >
          <div id="email">
            <h1 id="cart_title">SIGN IN</h1>
            <div>
              <input
                type="email"
                id="id"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <input
                id="pass"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button id="getlogged" type="submit">
              Submit
            </button>
          </div>
        </Form>
        {user == "logged" ? navigate("/") : ""}
      </div>
    </>
  );
};

export default Login;
