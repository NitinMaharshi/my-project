import React from "react";
import { useState, createContext } from "react";

export const AuthContext = createContext({ token: "", handleToken: () => {} });

export const AuthContextProvider = ({ Children }) => {
  const [token, setToken] = useState("");

  const handleToken = (token) => {
    setToken(token);
  };
  return (
    <AuthContext.Provider value={{ token, handleToken }}>
      {Children}
    </AuthContext.Provider>
  );
};
