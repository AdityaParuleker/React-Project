import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import "./CardDesign.css";

const CardDesign = (element) => {
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };
  return (
    <Card style={{ width: "22rem", border: "none" }} className="hove mb-4">
      <Card.Img variant="top" className="cd" src={element.imgdata} />

      <div className="card_body">
        <div className="upper_data d-flex justify-content-between align-items-center">
          <h4 className="mt-2">{element.dish}</h4>
          <span>{element.rating}&nbsp;★</span>
        </div>

        <div className="lower_data d-flex justify-content-between ">
          <h5>{element.address}</h5>
          <span>₹ {element.price}</span>
        </div>
        <div className="extra"></div>

        <div className="last_data d-flex justify-content-between align-items-center">
          <img src={element.arrimg} className="limg" alt="" />
          <Button
            style={{ width: "150px", background: "#ff3054db", border: "none" }}
            variant="outline-light"
            className="mt-2 mb-2"
            onClick={() => send(element)}
          >
            Add TO Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CardDesign;