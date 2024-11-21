import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { AuthContext } from "../../Context/ProductContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { update } from "../../Redux/Slices/cartSlice";
const ProductDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  const [qt, setQnty] = useState();
  const { info, setInfo } = useContext(AuthContext);
  const { id } = useParams();
  const dispatch = useDispatch();

  const itemIndex = carts.findIndex((item) => item.id === info.id);

  useEffect(() => {
    getProduct();
  }, []);

  const send = (qt, info) => {
    if (qt > 0 && qt < 11) {
      const a = { ...info, qnty: qt };
      dispatch(update(a));
    } else {
      alert("invalid");
    }
  };
  const getProduct = async () => {
    try {
      const data = await fetch(`https://fakestoreapi.in/api/products/${id}`);

      const json = await data.json();

      setInfo(json.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="product_container">
        <div id="image">
          <img src={info.image} />
        </div>
        <div id="text">
          <h1>{info.brand}</h1>

          <p id="head_tag">{info.title}</p>
          <hr></hr>
          <div id="detail">
            <p class="thick"></p>

            <p class="thick">
              Color :<span id="ab"> {info.color}</span>
            </p>

            <p class="thick">
              Model : <span id="ab"> {info.model}</span>
            </p>
          </div>

          <h1>
            ${info.price}
            <span id="inputqty">
              {!info.qnty && !carts[itemIndex]?.qnty ? (
                <>
                  {console.log(qt)}
                  <input
                    id="productqty"
                    type="text"
                    min="1"
                    max="100"
                    placeholder="0"
                    onChange={(e) => {
                      e.preventDefault();

                      setQnty(Number(e.target.value));
                    }}
                  ></input>
                </>
              ) : (
                <>
                  <input
                    id="productqty"
                    type="text"
                    min="1"
                    max="100"
                    placeholder={carts[itemIndex]?.qnty}
                    onChange={(e) => {
                      e.preventDefault();
                      setQnty(Number(e.target.value));
                    }}
                  ></input>
                </>
              )}
            </span>
          </h1>
          <p>inclusive of all taxes</p>

          <button id="add" onClick={(e) => send(qt, info)}>
            <h2>Add to Cart</h2>
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
