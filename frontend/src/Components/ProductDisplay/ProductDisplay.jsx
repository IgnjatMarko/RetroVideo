import React, { useContext } from "react";
import "./ProductDisplay.scss";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Aliquam leo diam, vestibulum et libero non, tincidunt lacinia tellus.
          Quisque sit amet augue ornare, imperdiet velit a, porttitor odio.
          Praesent vel neque pulvinar, elementum leo et, pellentesque elit.
          Phasellus eu tristique tellus. Nunc laoreet nulla et congue ultrices.
          Phasellus blandit convallis convallis. Cras sed libero turpis. Morbi
          sit amet auctor massa. Praesent id facilisis odio. Curabitur malesuada
          dui ac accumsan porttitor.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Type</h1>
          <div className="productdisplay-right-sizes">
            <div>DVD</div>
            <div>BluRay</div>
            <div>Digital</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
