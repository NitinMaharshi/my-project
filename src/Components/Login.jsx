import React from "react";
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [form, setForm] = useState({});
  const { handleToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Enter Email"
      />
      <input
        type="text"
        onChange={handleChange}
        name="password"
        placeholder="Enter Password"
      />
      <button
        onClick={() => {
          handleToken("123456");
          navigate("/login");
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export { Login };
