import React from "react";
import ProductCard from "../Product/ProductCard";
import "./Body.css";
import { Link } from "react-router-dom";

const CardList = ({ currentPost }) => {
  return (
    <>
      <div className="layout">
        {currentPost.map((element, index) => {
          return <ProductCard {...element} key={element.id} />;
        })}
      </div>
    </>
  );
};

export default CardList;
