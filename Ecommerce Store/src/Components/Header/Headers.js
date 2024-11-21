import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ProductContext";
import { useState, useEffect, useContext } from "react";
import "./Header.css";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { LogContext } from "../../Context/LoginContext";
const Headers = ({ category, product, setProduct, filterProduct }) => {
  const { carts } = useSelector((state) => state.allCart);
  const { user, handleLogOut, loggedInUserData } = useContext(LogContext);
  const { sidebarOpen, handleViewSidebar, setBar, searchText, setSearchText } =
    useContext(AuthContext);
  const filteredItems = (searchText, filterProduct) => {
    const filteredData = filterProduct.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  };

  return (
    <>
      <header style={{ height: "60px", background: "black", color: "white" }}>
        <h1 id="title" className="text-light" onClick={handleViewSidebar}>
          ☰
        </h1>
        <SideBar
          isOpen={sidebarOpen}
          category={category}
          setProduct={setProduct}
          filterProduct={filterProduct}
        />

        <NavLink to="/">
          <h1
            id="title"
            className="text-light"
            onClick={() => setProduct(filterProduct)}
          >
            Store
          </h1>
        </NavLink>

        <form class="example">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLowerCase())}
            type="text"
            placeholder="Search.."
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const data = filteredItems(searchText, filterProduct);
              setProduct(data);
              setBar(true);
            }}
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
        <div id="right_header">
          <span
            id="st"
            className="p1 fa-stack fa-2x has-badge"
            data-count={carts.length}
          >
            <NavLink to="/cart">
              <span id="cartlogo">🛒</span>
            </NavLink>
          </span>

          {user === "logged" ? (
            <div class="dropdown">
              <h4 style={{ color: "white" }}>{loggedInUserData.firstName}</h4>
              <div class="dropdown-content">
                <a style={{ cursor: "pointer" }} onClick={handleLogOut}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <h1 className="log" style={{ color: "white", cursor: "pointer" }}>
                Login
              </h1>{" "}
            </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default Headers;
