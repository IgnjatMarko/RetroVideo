import React from "react";
import "./Breadcrumb.scss";
import arrow_icon from "../Assets/breadcrum_arrow.png";

function Breadcrumbs(props) {
  const { product } = props;
  return (
    <div className="breadcrumb">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt=""/> {product.name}
    </div>
  );
}

export default Breadcrumbs;
