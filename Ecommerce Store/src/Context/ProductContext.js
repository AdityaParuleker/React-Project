import React, { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "./constants";

export const AuthContext = createContext();

const ProductContext = ({ children }) => {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

  const [info, setInfo] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [userData, setUserData] = useState(null);
  const [bar, setBar] = useState(false);
  useEffect(() => {
    setLocalStorage();
    const { customers } = getLocalStorage();
    setUserData(customers);
  }, []);

  /*useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const data = await fetch(`https://fakestoreapi.in/api/products/${id}`);

    const json = await data.json();
    setInfo(json);
    console.log(info);
  };*/

  return (
    <AuthContext.Provider
      value={{
        info,
        setInfo,
        handleViewSidebar,
        sidebarOpen,

        userData,
        bar,
        setBar,
        searchText,
        setSearchText,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default ProductContext;
