import React, { useState, useEffect } from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";

function Item(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = props.image;
    img.onload = () => setLoading(false);
  }, [props.image]);

  return (
    <div className="item">
      {loading ? (
        <SyncLoader />
      ) : (
        <>
          <Link to={`/product/${props.id}`}>
            <img onClick={window.scrollTo(0, 0)} src={props.image} alt="img" />
          </Link>
          <p>{props.name}</p>
          <div className="item-prices">
            <div className="item-price-new">${props.new_price}</div>
            <div className="item-price-old">${props.old_price}</div>
            {props.quantity === 0 ? (
              <div className="item-price-new red">Out of Stock</div>
            ) : props.quantity < 5 ? (
              <div className="item-price-new red">Low Stock</div>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Item;