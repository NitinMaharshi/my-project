import React from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export { PrivateRoute };
