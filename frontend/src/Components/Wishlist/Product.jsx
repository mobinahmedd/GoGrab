import React from "react";
import "./Product.css";
import delIcon from "../../Assets/del.png";
import { mainServerInstance } from "../../Axios/axiosInstance";
import { NotificationContext } from "../../NotificationContext";

const Product = (props) => {
  const { notification, setNotification } =
    React.useContext(NotificationContext);

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };

  const addToCart = async () => {
    try {
      const response = await mainServerInstance.post("api/cart/addToCart", {
        productId: props.id,
      });
      if (response.status === 201) {
        showMessage("Added to Cart", "success");
      }
    } catch (error) {
      showMessage(error.response.data.message, "error");
    }
  };

  return (
    <div className="wl-product">
      {/* <div className="wl-delIcon">
        <img src={delIcon} alt="" />
      </div> */}
      <div className="productpic">
        <img
          className="wl-image"
          alt="Image"
          src={`data:image/png;base64,${props.img}`}
        />
      </div>
      <div className="wl-text-wrapper-4">
        <div className="wl-product-name">{props.name} </div>
      </div>
      <button
        style={{ backgroundColor: "transparent" }}
        className="wl-overlap-group"
        onClick={addToCart}
      >
        Add to Cart
      </button>
      <div className="wl-text-wrapper-6">{"$" + props.price}</div>
    </div>
  );
};

export default Product;
