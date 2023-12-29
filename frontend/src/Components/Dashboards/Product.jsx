import React from "react";
import "./Product.css";
import productHeart from "../../Assets/productHeart.png";
import filledHeart from "../../Assets/filledHeart.png";
import star from "../../Assets/star.png";
import productCardLine from "../../Assets/productCardLine.png";
import nextArrow from "../../Assets/next.png";
import { mainServerInstance } from "../../Axios/axiosInstance";
import { NotificationContext } from "../../NotificationContext";

const Product = (props) => {
  const [isProductInWishlist, setIsProductInWishlist] = React.useState(
    props.isFavourite
  );
  const [review, setReview] = React.useState("");
  const { notification, setNotification } =
    React.useContext(NotificationContext);

  React.useEffect(() => {
    getreview();
  }, []);

  const getreview = async () => {
    try {
      const response = await mainServerInstance.get(
        `/api/reviews/averageRating/${props.id}`
      );
      console.log("reviews:", response.data);
      setReview(response.data.averageRating);
    } catch (error) {
      console.error("Error fetching review:", error);
    }
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

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };

  const addToWishlist = async () => {
    try {
      const response = await mainServerInstance.post(
        "api/wishlist/addToWishlist",
        {
          productId: [props.id],
        }
      );
      console.log(response);

      setIsProductInWishlist(true);
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  };

  const removeFromWishlist = async () => {
    try {
      const response = await mainServerInstance.delete(
        `api/wishlist/removeFromWishlist/${props.id}`
      );
      console.log(response);
      setIsProductInWishlist(false);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  const handleToggleFavourite = () => {
    if (isProductInWishlist) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };

  return (
    <div className="box">
      <div className="products-cards">
        <div className="ui-challenge-day">
          <div className="text-wrapper">{props.name}</div>
          <div
            style={{
              width: "fit-content",
            }}
            className="div"
          >
            {"$" + props.price}
          </div>
          <div className="frame">
            <div className="overlap-group1">
              <div className="group">
                <img
                  className="iconamoon-arrow"
                  alt="Iconamoon arrow"
                  src={nextArrow}
                />
                <div onClick={addToCart} className="text-wrapper-2">
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
          <img
            className="favourites"
            alt="Favourites"
            src={isProductInWishlist ? filledHeart : productHeart}
            onClick={handleToggleFavourite}
          />
          <div className="image">
            <img
              className=""
              alt="Image"
              src={`data:image/png;base64,${props.img}`}
            />
          </div>
          <img className="line" alt="Line" src={productCardLine} />
          <div className="text-wrapper-3">{review || 0}</div>
          <img className="star" alt="Star" src={star} />
          <p className="sold">
            <span className="span">
              Sold :{" "}
              <span
                style={{ fontWeight: "normal" }}
              >{`(${props.timesSold})`}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
