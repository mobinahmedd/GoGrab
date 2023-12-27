import React from "react";
import "./Cart.css";
import deleteIcon from "../../Assets/del.png";
import productImg from "../../Assets/product.png";
import quantityPlusIcon from "../../Assets/quantity-plus.png";
import quantityMinusIcon from "../../Assets/quantity-minus.png";
import divider from "../../Assets/divider.png";

const CartProduct = (props) => {
  const [quantity, setQuantity] = React.useState(props.quantity);
  const [productTotal, setProductTotal] = React.useState(
    props.price * quantity
  );

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
    setProductTotal(props.price * (quantity + 1));
  };
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      return prev === 1 ? prev : prev - 1;
    });
    setProductTotal(props.price * quantity !== 1 ? quantity - 1 : quantity);
  };
  return (
    <div className="cart-cart-item">
      <img className="cart-divider" alt="Divider" src={divider} />
      <div className="cart-text-wrapper-4">${Math.round(productTotal)}</div>
      <div className="cart-text-wrapper-5">${Math.round(props.price)}</div>
      <div className="cart-qty">
        <div className="cart-overlap-group-2">
          <div onClick={handleDecreaseQuantity} className="cart-minus">
            <img
              className="cart-rectangle-copy"
              alt="Rectangle copy"
              src={quantityMinusIcon}
            />
          </div>
          <div
            style={quantity < 10 ? { left: "56px" } : { left: "51px" }}
            className="cart-text-wrapper-6"
          >
            {quantity}
          </div>
          <div onClick={handleIncreaseQuantity} className="cart-plus">
            <img className="cart-group" alt="Group" src={quantityPlusIcon} />
          </div>
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
    </div>
  );
};

export default CartProduct;
