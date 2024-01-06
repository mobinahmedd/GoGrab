import React from "react";
import "./Product.css";
import productImg from "../../Assets/product-image.png";
import favouriteIcon from "../../Assets/productHeart.png";
import filledHeart from "../../Assets/filledHeart.png";
import divider2 from "../../Assets/product-divider.png";
import star from "../../Assets/star.png";
import arrow from "../../Assets/arrow.png";
import { NotificationContext } from "../../NotificationContext";
import { mainServerInstance } from "../../Axios/axiosInstance";
import { useNavigate, useParams, Link } from "react-router-dom";

const ProductCard = (props) => {
  const { productId } = useParams(); // Access the product ID from the route parameters

  const { notification, setNotification } =
    React.useContext(NotificationContext);

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };

  const [isProductInWishlist, setIsProductInWishlist] = React.useState(true);

  console.log(isProductInWishlist);
  const [review, setReview] = React.useState("");

  React.useEffect(() => {
    setIsProductInWishlist(props.isFavourite);
    console.log(props.isFavourite, "is?");
  }, [props.isFavourite]);

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

  const addToCart = async () => {
    try {
      const response = await mainServerInstance.post("api/cart/addToCart", {
        productId: productId,
      });
      if (response.status === 201) {
        showMessage("Added to Cart", "success");
      }
    } catch (error) {
      showMessage(error.response.data.message, "error");
    }
  };

  const handleToggleFavourite = () => {
    if (isProductInWishlist) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };

  const handleClick = () => {
    props.onRerender();
  };

  return (
    <div className="product-ui-challenge-day">
      <div style={{ cursor: "pointer" }} className="product-text-wrapper-35">
        {props.name}
      </div>
      <div className="product-text-wrapper-36">${props.price}</div>
      <div className="product-overlap-group-wrapper">
        <div
          title="Add Product to Cart"
          style={{ cursor: "pointer" }}
          className="product-group-wrapper"
        >
          <div onClick={addToCart} className="product-group-4">
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
        src={isProductInWishlist ? filledHeart : favouriteIcon}
        onClick={handleToggleFavourite}
      />
      <Link to={`/product/${props.id}`}>
        <img className="product-image-2" alt="Image" src={productImg} />
      </Link>
      <img className="product-line-2" alt="Line" src={divider2} />
      <div className="product-text-wrapper-38">{review}</div>
      <img className="product-star" alt="Star" src={star} />
      <p className="product-sold">
        <span className="product-text-wrapper-39">Sold : </span>
        <span className="product-text-wrapper-40">{props.timesSold}</span>
      </p>
    </div>
  );
};

export default ProductCard;
