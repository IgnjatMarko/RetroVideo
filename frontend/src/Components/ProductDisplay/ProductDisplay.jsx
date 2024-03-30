import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.scss";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  const [mainImage, setMainImage] = useState(product.image);

  useEffect(() => {
    setMainImage(product.image);
  }, [product]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleImageError = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img
            src={product.image}
            alt={product.name}
            onClick={() => handleImageClick(product.image)}
            onError={handleImageError}
          />
          {product.extraImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.name}
              onClick={() => handleImageClick(image)}
              onError={handleImageError}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={mainImage}
            alt={product.name}
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">{product.rating}</div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
          {product.quantity === 0 ? (
          <div className="productdisplay-right-price-new">Out of Stock</div>
        ) : product.quantity < 5 ? (
          <div className="productdisplay-right-price-new">Low Stock</div>
        ) : (
          <></>
        )}
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Tags</h1>
          <div className="productdisplay-right-sizes">
            <div>{product.tags[0]}</div>
            <div>{product.tags[1]}</div>
            <div>{product.tags[2]}</div>
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
          <span>Category: </span>
          {product.category}
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
