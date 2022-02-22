import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <Link className="nav" to="/">
        Home
      </Link>
      <Link className="nav" to="/about">
        About
      </Link>
      <Link className="nav" to="/contact">
        Contact
      </Link>
      <Link className="nav" to="/users">
        Users
      </Link>
      <Link className="nav" to="/login">
        Login
      </Link>
    </div>
  );
};

export { Navbar };
