import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import "./Header.css";

const Headers = ({ loggedInUserData, user, handleLogOut }) => {
  const { carts } = useSelector((state) => state.allCart);

  const context = useContext(AuthContext);

  const [cartData, setCartData] = context["cartState"];

  const [cardDataCopy, setCardDataCopy] = context["cartStateCopy"];

  return (
    <>
      <header>
        <Navbar
          id="top"
          style={{ height: "60px", background: "black", color: "white" }}
        >
          <Container>
            <NavLink to="/" className="text-decoration-none text-light mx-2">
              <h3
                className="text-light"
                onClick={() => {
                  setCartData(cardDataCopy);
                }}
              >
                RESTAURANT
              </h3>
            </NavLink>

            <div id="ex3">
              <NavLink
                to="/cart"
                className="text-decoration-none text-light mx-2"
              >
                <div id="ex4">
                  <span
                    className="p1 fa-stack fa-2x has-badge"
                    data-count={carts.length}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                </div>
              </NavLink>

              <div id="ex5">
                {user === "logged" ? (
                  <div class="dropdown">
                    <h4 className="text-light" style={{ cursor: "pointer" }}>
                      {loggedInUserData.firstName}
                    </h4>
                    <div class="dropdown-content">
                      <a
                        onClick={handleLogOut}
                        style={{ color: "black", cursor: "pointer" }}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className="text-decoration-none text-light"
                  >
                    <h4 className="text-light">Login</h4>
                  </NavLink>
                )}
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Headers;
