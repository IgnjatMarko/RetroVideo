import React from "react";
import "./Breadcrumb.scss";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import { Link } from "react-router-dom";

function Breadcrumbs(props) {
  const { product } = props;

  return (
    <div className="breadcrumb">
      <Link style={{ textDecoration: "none" }} to="/">
        HOME <img src={arrow_icon} alt="" /> SHOP{" "}
      </Link>
      <img src={arrow_icon} alt="" />
      <Link
        to={`/${product.category.toLowerCase().replace(/ /g, "")}`}
      >
        {product.category} <img src={arrow_icon} alt="" />
      </Link>{" "}
      {product.name}
    </div>
  );
}

export default Breadcrumbs;
