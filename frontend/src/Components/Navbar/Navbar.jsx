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
      <Link style={{ textDecoration: "none" }} to="/">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Retro Video</p>
      </div>
      </Link>
      <img className="nav-dropdown" onClick={dropdownToggle} src={dropdown_icon} alt="dropdown-icon" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Rent DVDs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/rentdvds">
            Rent DVDs
          </Link>
          {menu === "Rent DVDs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Buy DVDs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/buydvds">
            Buy DVDs
          </Link>
          {menu === "Buy DVDs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Digital");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/digitalmovies">
            Digital Movies
          </Link>
          {menu === "Digital" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>
        :<Link to="/login">
        <button>Login</button>
      </Link>}
        
        <Link to="/cart">
          <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
