import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

import toast from "react-hot-toast";
export const Log = createContext();

const Logincontext = ({ children }) => {};

export default Logincontext;
