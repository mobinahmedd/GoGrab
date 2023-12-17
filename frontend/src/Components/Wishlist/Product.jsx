import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <div className="wl-product">
      <div className="productpic">
        <img className="wl-image" alt="Image" src={props.image} />
      </div>
      <div className="wl-div-wrapper">
        <div className="wl-text-wrapper-4">{props.name}</div>
      </div>
      <button
        style={{ backgroundColor: "transparent" }}
        className="wl-overlap-group"
      >
        Add to Cart
      </button>
      <div className="wl-text-wrapper-6">{"$" + props.price}</div>
    </div>
  );
};

export default Product;
