import React from "react";
import "./Cart.css";
import deleteIcon from "../../Assets/del.png";
import productImg from "../../Assets/product.png";
import quantityPlusIcon from "../../Assets/quantity-plus.png";
import quantityMinusIcon from "../../Assets/quantity-minus.png";
import divider from "../../Assets/divider.png";

const CartProduct = (props) => {
  const [quantity, setQuantity] = React.useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      return prev === 1 ? prev : prev - 1;
    });
  };
  return (
    <div className="cart-cart-item">
      <img className="cart-divider" alt="Divider" src={divider} />
      <div className="cart-text-wrapper-4">$32</div>
      <div className="cart-text-wrapper-5">$16</div>
      <div className="cart-qty">
        <div className="cart-overlap-group-2">
          <div className="cart-text-wrapper-6">{quantity}</div>
          <img
            style={{ cursor: "pointer" }}
            title="Increase"
            className="cart-group"
            alt="Group"
            src={quantityPlusIcon}
            onClick={handleIncreaseQuantity}
          />
          <img
            style={{ cursor: "pointer" }}
            title="Decrease"
            className="cart-rectangle-copy"
            alt="Rectangle copy"
            src={quantityMinusIcon}
            onClick={handleDecreaseQuantity}
          />
        </div>
      </div>
      <img
        style={{ cursor: "pointer" }}
        title="Remove Product"
        className="cart-del"
        alt="Del"
        src={deleteIcon}
      />
      <div className="cart-pic">
        <img className="cart-image" alt="Image" src={productImg} />
      </div>
      <div className="cart-text-wrapper-7">{props.name}</div>
      {/* <div className="cart-cart-item-2">
          <img className="cart-divider" alt="Divider" src={divider} />
          <div className="cart-text-wrapper-4">$32</div>
          <div className="cart-text-wrapper-5">$16</div>
          <div className="cart-qty">
            <div className="cart-overlap-group-3">
              <div className="cart-text-wrapper-6">2</div>
              <img className="cart-group" alt="Group" src={quantityPlusIcon} />
              <img
                className="cart-rectangle-copy"
                alt="Rectangle copy"
                src={quantityMinusIcon}
              />
            </div>
          </div>
          <img
            style={{ cursor: "pointer" }}
            title="Remove Product"
            className="cart-del"
            alt="Del"
            src={deleteIcon}
          />
          <div className="cart-image-wrapper">
            <img className="cart-image" alt="Image" src={productImg} />
          </div>
          <div className="cart-text-wrapper-7">Beats by Dre</div>
        </div>
        <div className="cart-cart-item-3">
          <img className="cart-divider" alt="Divider" src={divider} />
          <div className="cart-text-wrapper-8">Beats by Dre</div>
          <div className="cart-text-wrapper-9">$32</div>
          <div className="cart-text-wrapper-10">$16</div>
          <div className="cart-qty">
            <div className="cart-overlap-group-4">
              <div className="cart-text-wrapper-6">2</div>
              <img className="cart-group" alt="Group" src={quantityPlusIcon} />
              <img
                className="cart-rectangle-copy"
                alt="Rectangle copy"
                src={quantityMinusIcon}
              />
            </div>
          </div>
          <img
            style={{ cursor: "pointer" }}
            title="Remove Product"
            className="cart-del"
            alt="Del"
            src={deleteIcon}
          />
          <div className="cart-img-wrapper">
            <img className="cart-image" alt="Image" src={productImg} />
          </div>
        </div>
        <div className="cart-cart-item-4">
          <img className="cart-divider" alt="Divider" src={divider} />
          <div className="cart-text-wrapper-8">Beats by Dre</div>
          <div className="cart-text-wrapper-9">$32</div>
          <div className="cart-text-wrapper-10">$16</div>
          <div className="cart-qty">
            <div className="cart-overlap-group-5">
              <div className="cart-text-wrapper-6">2</div>
              <img className="cart-group" alt="Group" src={quantityPlusIcon} />
              <img
                className="cart-rectangle-copy"
                alt="Rectangle copy"
                src={quantityMinusIcon}
              />
            </div>
          </div>
          <img
            style={{ cursor: "pointer" }}
            title="Remove Product"
            className="cart-del"
            alt="Del"
            src={deleteIcon}
          />
          <div className="cart-pic-2">
            <img className="cart-image" alt="Image" src={productImg} />
          </div>
        </div> */}
    </div>
  );
};

export default CartProduct;
