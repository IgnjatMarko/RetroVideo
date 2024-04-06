import React, { useContext } from "react";
import "./CartItems.scss";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import plus_icon from "../Assets/cart_plus_icon.png"

export const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((elem) => {
        if (cartItems[elem.id] > 0) {
          return (
            <div>
              <div className="cartitems-format">
                <img
                  src={elem.image}
                  alt={elem.name}
                  className="carticon-product-icon"
                />
                <p>{elem.name}</p>
                <p>${elem.new_price}</p>
                <button className="cartitems-quantity">
                  <p>{cartItems[elem.id]}</p>
                  <img src={plus_icon} alt="" onClick={()=> {addToCart(elem.id)}}/>
                </button>
                <p>${elem.new_price*cartItems[elem.id]}</p>
                <img
                  className="carticon-addremove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(elem.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};
