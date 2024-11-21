import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import CardList from "../Body/CardList";
import Pagination from "../Body/Pagination";
import { AuthContext } from "../../Context/ProductContext";
import Shimmer from "../Product/Shimmer";
import { useNavigate } from "react-router-dom";
const Gaming = () => {
  const { category, product, filterProduct, setFilterProduct, setProduct } =
    useOutletContext();

  let history = useNavigate();

  const { bar, setBar, setSearchText } = useContext(AuthContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  let items = [];

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  function filter(item) {
    if (item.category.toLowerCase() == "gaming") {
      items.push(item);
    }
  }

  filterProduct.forEach(filter);
  const currentPost = items.slice(firstPostIndex, lastPostIndex);

  return items.length == 0 ? (
    <div className="layout">
      <Shimmer />
    </div>
  ) : bar == true ? (
    history("/")
  ) : (
    <>
      <CardList key="gaming" currentPost={currentPost} />
      <Pagination
        key="gaming"
        totalPosts={items.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default Gaming;
