import React from "react";
import Swal from "sweetalert2";
import "./SCSS/Checkout.scss";
import arrow_icon from "../Components/Assets/arrow.png";

export default function Checkout() {

    const proceedHandler = () => {
        return Swal.fire('Oops...', 'Invalid card details')
    }

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h1>Checkout</h1>
        <div className="checkout-fields">
          <input
            type="text"
            name="name"
            placeholder="Card Number"
            className="number"
          />
          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="visa"
          />
        </div>
        <div className="checkout-fields">
          <input
            type="text"
            name="name"
            placeholder="Cardholder's Name"
            className="name"
          />
        </div>
        <div className="checkout-fields">
          <input type="text" name="name" placeholder="MM/YYYY" className="extra"/>
          <input type="text" name="name" placeholder="Cvv" className="extra"/>
          <button onClick={proceedHandler}><img src={arrow_icon} alt="" /></button>
        </div>
      </div>
    </div>
  );
}
