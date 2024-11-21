import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "./style.css";
import CardDesign from "./CardDesign";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Home.css";
const Home = () => {
  const context = useContext(AuthContext);
  const [cartData, setCartData] = context["cartState"];
  const [cardDataCopy, setCardDataCopy] = context["cartStateCopy"];

  const [searchText, setSearchText] = useState("");

  const filteredItems = (searchText, cartData) => {
    const filteredData = cartData.filter((item) =>
      item.dish.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  };

  return (
    <>
      <section className="iteam_section mt-4 container">
        <div
          id="inp"
          className="row mt-2 d-flex justify-content-around align-items-center"
        >
          <InputGroup className="mb-3">
            <Form.Control
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              id="search-box"
              size="lg"
              type="text"
              placeholder="Search todays menu..."
            />
            <InputGroup.Text
              id="search-button"
              onClick={() => {
                const data = filteredItems(searchText, cardDataCopy);
                setCartData(data);
              }}
            >
              Search
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div id="body" className="row mt-2 d-flex">
          {cartData.length == 0 ? (
            <div id="no-menu">
              <h1>Not Match Found</h1>
            </div>
          ) : (
            cartData.map((element) => {
              return <CardDesign {...element} key={element.id} />;
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
