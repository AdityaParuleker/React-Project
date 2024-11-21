import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
import { Cardsdata } from "../components/constants";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [cartData, setCartData] = useState(Cardsdata);
  const [cardDataCopy, setCardDataCopy] = useState(Cardsdata);

  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLocalStorage();
    const { customers } = getLocalStorage();
    setUserData(customers);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state1: [userData],
        emailState: [email, setEmail],
        passwordState: [password, setPassword],
        cartState: [cartData, setCartData],
        cartStateCopy: [cardDataCopy, setCardDataCopy],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
