import React from "react";
import "./DescriptionBox.scss";

function DescriptionBox(props) {
  const { product } = props;


  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">{product.rating}</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
