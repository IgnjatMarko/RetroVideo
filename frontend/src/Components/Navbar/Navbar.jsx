import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Retro Video Club</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shop2");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shop2">
            Shop2
          </Link>
          {menu === "shop2" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shop3");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shop3">
            Shop3
          </Link>
          {menu === "shop3" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("shop4");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/shop4">
            Shop4
          </Link>
          {menu === "shop4" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
