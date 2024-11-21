import React, { useEffect, useState } from "react";
import "./Cartdetail.css";
import { useSelector } from "react-redux";
import { removeCart } from "../../Redux/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { addToCart, removeSingle, empty } from "../../Redux/Slices/cartSlice";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
const CartDetail = () => {
  const dispatch = useDispatch();

  const { carts } = useSelector((state) => state.allCart);
  const [total, setTotal] = useState(0);
  const [totalqn, setTotalQn] = useState(0);

  const bill = () => {
    let total = 0;
    let totalqn = 0;
    carts.map((item, index) => {
      total += item.price * item.qnty;
      totalqn += item.qnty;
    });
    setTotal(total);
    setTotalQn(totalqn);
  };
  useEffect(() => bill(), [bill]);
  return (
    <>
      <header
        id="header"
        style={{ height: "60px", background: "black", color: "white" }}
      >
        <h1 id="cart_title">C A R T</h1>
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
      {carts.length <= 0 ? (
        <h1 style={{ textAlign: "center", marginTop: 100, color: "red" }}>
          {" "}
          Cart is empty. Add something.
        </h1>
      ) : (
        <div className="cart">
          <div className="carttag">
            <button
              id="empty"
              onClick={() => {
                dispatch(empty());
                toast.success("Your Cart is Empty");
              }}
            >
              Empty All
            </button>
            {carts.map((item) => {
              return (
                <div id="pimage">
                  <button
                    id="remove"
                    onClick={(e) => {
                      dispatch(removeCart(item.id));
                      toast.success("Item Removed From Your Cart");
                    }}
                  >
                    <h1> X</h1>
                  </button>

                  <div id="btnpm">
                    <div id="bt">
                      <table>
                        <tr>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>

                        <tr>
                          <td>
                            {" "}
                            <img id="cartproduct" src={item.image} />
                          </td>
                          <td id="btnpm">
                            <button
                              id="pl"
                              onClick={(e) => dispatch(addToCart(item))}
                            >
                              +
                            </button>
                            <h2>{item.qnty}</h2>

                            <button
                              id="mn"
                              onClick={
                                item.qnty <= 1
                                  ? () => {
                                      dispatch(removeCart(item.id));
                                      toast.success(
                                        "Item Removed From Your Cart"
                                      );
                                    }
                                  : () => dispatch(removeSingle(item))
                              }
                            >
                              -
                            </button>
                          </td>
                          <td>${item.price * item.qnty}</td>
                        </tr>
                      </table>
                    </div>
                    <h4></h4>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="price">
            <div>
              <h1>Bill</h1>
            </div>
            <div id="total">
              Total Cost: <span style={{ color: "red" }}>${total}</span>
            </div>
            <div id="totalqn">
              Total Quantity: <span style={{ color: "red" }}>{totalqn}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDetail;
