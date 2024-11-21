import React, { useContext } from "react";
import "./Login.css";
import { useState } from "react";
import { Log } from "../Context/Logincontext";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandl = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div id="login">
      <form
        id="loginform"
        onSubmit={(e) => {
          submitHandl(e);
        }}
      >
        <div id="email">
          <h1 id="cart_title">SIGN IN</h1>
          <div>
            <input
              type="email"
              id="emailid"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button id="getlogged" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
