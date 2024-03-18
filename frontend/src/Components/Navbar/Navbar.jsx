import React, { useContext, useRef, useState } from "react";
import "./Navbar.scss";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import dropdown_icon from "../Assets/drop-down.png";

import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Retro Video</p>
      </div>
      <img className="nav-dropdown" onClick={dropdownToggle} src={dropdown_icon} alt="dropdown-icon" />
      <ul ref={menuRef} className="nav-menu">
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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
