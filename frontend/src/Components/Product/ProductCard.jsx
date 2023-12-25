import React from "react";
import "./Product.css";
import productImg from "../../Assets/product-image.png";
import favouriteIcon from "../../Assets/favourites.png";
import divider2 from "../../Assets/product-divider.png";
import star from "../../Assets/star.png";
import arrow from "../../Assets/arrow.png";

const ProductCard = () => {
  return (
    <div className="product-ui-challenge-day">
      <div className="product-text-wrapper-35">Beats by Dre</div>
      <div className="product-text-wrapper-36">$16</div>
      <div className="product-overlap-group-wrapper">
        <div
          title="Add Product to Cart"
          style={{ cursor: "pointer" }}
          className="product-group-wrapper"
        >
          <div className="product-group-4">
            <img
              className="product-iconamoon-arrow"
              alt="Iconamoon arrow"
              src={arrow}
            />
            <div className="product-text-wrapper-37">Add to Cart</div>
          </div>
        </div>
      </div>
      <img
        style={{ cursor: "pointer" }}
        title="Add to Favourites"
        className="product-favourites-2"
        alt="Favourites"
        src={favouriteIcon}
      />
      <img className="product-image-2" alt="Image" src={productImg} />
      <img className="product-line-2" alt="Line" src={divider2} />
      <div className="product-text-wrapper-38">4.8</div>
      <img className="product-star" alt="Star" src={star} />
      <p className="product-sold">
        <span className="product-text-wrapper-39">Sold : </span>
        <span className="product-text-wrapper-40">(2.2k)</span>
      </p>
    </div>
  );
};

export default ProductCard;
