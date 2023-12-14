import React from "react";
import "./Product.css";
import productHeart from "../../Assets/productHeart.png";
import star from "../../Assets/star.png";
import headphoneProduct from "../../Assets/headphoneProduct.png";
import productCardLine from "../../Assets/productCardLine.png";
import nextArrow from "../../Assets/next.png";

const Product = () => {
  return (
    <div className="box">
      <div className="products-cards">
        <div className="ui-challenge-day">
          <div className="text-wrapper">Beats by Dre</div>
          <div className="div">$16</div>
          <div className="frame">
            <div className="overlap-group1">
              <div className="group">
                <img
                  className="iconamoon-arrow"
                  alt="Iconamoon arrow"
                  src={nextArrow}
                />
                <div className="text-wrapper-2">Add to Cart</div>
              </div>
            </div>
          </div>
          <img className="favourites" alt="Favourites" src={productHeart} />
          <img className="image" alt="Image" src={headphoneProduct} />
          <img className="line" alt="Line" src={productCardLine} />
          <div className="text-wrapper-3">4.8</div>
          <img className="star" alt="Star" src={star} />
          <p className="sold">
            <span className="span">
              Sold : <span style={{ fontWeight: "normal" }}>(2.2k)</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
