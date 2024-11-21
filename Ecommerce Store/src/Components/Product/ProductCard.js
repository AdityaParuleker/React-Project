import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const ProductCard = (element) => {
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };

  return (
    <>
      <div class="card">
        <Link to={"/product/" + element.id}>
          <img className="image" src={element.image} />
        </Link>
        <h4>{element.title}</h4>
        <p class="price">${element.price}</p>
        <div>
          <button onClick={(e) => send(element)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
