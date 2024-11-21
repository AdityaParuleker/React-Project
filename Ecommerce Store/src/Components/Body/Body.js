import React from "react";
import { useState, useEffect, useContext } from "react";
import ProductCard from "../Product/ProductCard";
import { AuthContext } from "../../Context/ProductContext";
import { NavLink, Link } from "react-router-dom";
import Pagination from "./Pagination";
import "./Pagination.css";
import "./Body.css";
import Audio from "../Category/Audio";
import { useOutletContext } from "react-router-dom";
import CardList from "./CardList";

import SideBar from "../Header/SideBar";
import Shimmer from "../Product/Shimmer";

const Body = () => {
  const {
    category,
    product,
    setProduct,
    filterProduct,
    setFilterProduct,
    load,
  } = useOutletContext();
  const [infiniteProduct, setInfiniteProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPost = product.slice(firstPostIndex, lastPostIndex);
  let totalPosts = product.length;
  const { handleViewSidebar, sidebarOpen, setBar } = useContext(AuthContext);

  setBar(false);

  return load ? (
    <div className="layout">
      <Shimmer />
    </div>
  ) : product.length == 0 ? (
    <div className="layout">
      <h1>No Product found</h1>
    </div>
  ) : (
    <>
      <CardList currentPost={currentPost} />

      <Pagination
        totalPosts={product.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Body;
