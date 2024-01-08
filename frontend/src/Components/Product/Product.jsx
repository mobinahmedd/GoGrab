import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mainServerInstance } from "../../Axios/axiosInstance";
import { Link } from "react-router-dom";
import "./Product.css";
import { NotificationContext } from "../../NotificationContext";
import Wishlist from "../Wishlist/Wishlist";
import { Helmet } from "react-helmet";
import Rating from "@mui/material/Rating";
import Alert from "@mui/material/Alert";

// import { Carousel } from "flowbite-react";
// import Carousel from "react-material-ui-carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { Carousel } from "react-bootstrap";

import profileIcon from "../../Assets/profile.png";
import red from "../../Assets/red.png";
import blue from "../../Assets/blue.png";
import black from "../../Assets/black.png";
import yellow from "../../Assets/yellow.png";
import yellowSelected from "../../Assets/yellowSelected.png";
import blackSelected from "../../Assets/blackSelected.png";
import blueSelected from "../../Assets/blueSelected.png";
import redSelected from "../../Assets/redSelected.png";
import cartIcon from "../../Assets/prime_shopping-cart.png";
import searchIcon from "../../Assets/search-icon.png";
import logo from "../../Assets/logo.png";
import Sponser1 from "../../Assets/Breitling.png";
import Spnoser2 from "../../Assets/Ralph-Lauren.png";
import Spnoser3 from "../../Assets/chanel.png";
import Spnoser4 from "../../Assets/mighty-furnitures.png";
import Spnoser5 from "../../Assets/hermes-paris.png";
import footerDivider from "../../Assets/footer-divider.png";
import footerSearchIcon from "../../Assets/footer-search.png";
import fbIcon from "../../Assets/facebook.png";
import twitterIcon from "../../Assets/twitter.png";
import messengerIcon from "../../Assets/messenger.png";
import logoDark from "../../Assets/logo-dark.png";
import rate from "../../Assets/rate.png";
import colorsImg from "../../Assets/colors.png";
import divider1 from "../../Assets/divider1.png";
import divider3 from "../../Assets/divider3.png";
import quantityPlusIcon from "../../Assets/quantity-plus.png";
import quantityMinusIcon from "../../Assets/quantity-minus.png";
import cart from "../../Assets/cart-icon.png";
import paymentMethods from "../../Assets/payment-methods.png";
import fb from "../../Assets/facebook2.png";
import twitter from "../../Assets/twitter2.png";
import productImg from "../../Assets/product-image.png";
import favIcon from "../../Assets/favourites.png";
import favouritesFilled from "../../Assets/favouritesFilled.png";
import fav from "../../Assets/favourite-icon.png";
import ProductCard from "./ProductCard";

import productImg1 from "../../Assets/product1.png";
import productImg2 from "../../Assets/product2.png";
import productImg3 from "../../Assets/product3.png";
import productImg4 from "../../Assets/product4.png";

const Product = () => {
  const { productId } = useParams();

  // const [shouldRerender, setShouldRerender] = React.useState(true);

  // const handleRerender = () => {
  //   setShouldRerender(!shouldRerender);
  //   console.log("Render : ", shouldRerender);
  //   console.log("Product Id : ", productId);
  //   // setProductId(useParams().productId);
  // };
  const [showWishlist, setShowWishlist] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [isProductInWishlist, setIsProductInWishlist] = React.useState(true);
  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("red");
  const [productData, setProductData] = React.useState([]);
  const [allProducts, setAllProducts] = React.useState([]);
  const [favouriteProducts, setFavouriteProducts] = React.useState([]);
  console.log(isProductInWishlist);
  const [review, setReview] = React.useState("");
  const [productImages, setProductImages] = React.useState([]);

  const isFavourite = favouriteProducts.includes(productData._id);

  React.useEffect(() => {
    setIsProductInWishlist(isFavourite);
    console.log(isFavourite, "is?");
  }, [isFavourite]);

  React.useEffect(() => {
    getreview();
  }, []);

  React.useEffect(() => {
    getProductData();
    getAllProducts();
    getFavouriteProducts();
  }, [productId]);

  const getreview = async () => {
    try {
      const response = await mainServerInstance.get(
        `/api/reviews/averageRating/${productId}`
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
          productId: [productId],
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
        `api/wishlist/removeFromWishlist/${productId}`
      );
      console.log(response);
      setIsProductInWishlist(false);
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await mainServerInstance.get(
        `/api/products/similar-products/${productId}`
      );

      console.log("Similar Products:", response.data);
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      console.log(productData.categoryId);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const handleChangeColor = (event) => {
    setColor(event.target.name);
  };

  const getProductData = async () => {
    try {
      const response = await mainServerInstance.get(
        `/api/products/getProduct/${productId}`
      );
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
      // Handle errors or display an error message to the user
    }
  };

  const handleToggleFavourite = () => {
    if (isProductInWishlist) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };

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
        productId: productId,
      });
      if (response.status === 201) {
        showMessage("Added to Cart", "success");
      }
    } catch (error) {
      showMessage(error.response.data.message, "error");
    }
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      return prev === 1 ? prev : prev - 1;
    });
  };

  const toggleShowWishList = () => {
    setShowWishlist((prev) => !prev);
  };

  const getFavouriteProducts = async () => {
    try {
      const response = await mainServerInstance.get(
        "/api/wishlist/getWishlist"
      );
      const productIds = response.data.products.map(
        (product) => product.productId
      );
      setFavouriteProducts(productIds);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  const productPrice =
    productData.price - (productData.price * productData.discount) / 100;

  const products = allProducts?.map((product) => {
    const isFavourite = favouriteProducts.includes(product._id);
    console.log("Is favourite:", isFavourite);
    return (
      <ProductCard
        key={product._id}
        id={product._id}
        img={product.images[0]}
        name={product.name}
        timesSold={product.timesSold}
        price={product.price}
        isFavourite={isFavourite}
      />
    );
  });

  // // Slider settings
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // const productImages = [
  //   productImg,
  //   productImg1,
  //   productImg2,
  //   productImg3,
  //   productImg4,
  // ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productData.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.images.length - 1 : prevIndex - 1
    );
  };

  console.log(productData.images);

  return (
    <>
      {/* <Alert style={{ paddingLeft: "50%" }} severity="warning">
        Coming Soon
      </Alert> */}
      {showWishlist && <Wishlist toggleShowWishList={toggleShowWishList} />}
      <div
        style={showWishlist ? { filter: "blur(2px)" } : {}}
        className="product-frame"
      >
        <div className="product-div">
          <div className="product-footer">
            <div className="product-menu-header">
              <div
                style={{ backgroundColor: "#22242A" }}
                className="product-text-wrapper"
              >
                About
              </div>
              <div className="product-text-wrapper">Categories</div>
              <div className="product-text-wrapper">Products</div>
              <div className="product-text-wrapper">Profile</div>
              <div className="product-text-wrapper">Contact us</div>
            </div>
            <div className="product-menu-footer">
              <div className="product-text-wrapper-2">Privacy Policy</div>
              <div className="product-text-wrapper-2">Terms of Use</div>
              <div className="product-text-wrapper-2">Sales and Refunds</div>
              <div className="product-text-wrapper-2">Legal</div>
              <div className="product-text-wrapper-2">Site Map</div>
            </div>
            <div className="product-text-wrapper-3">© 2023 GoGrab</div>
            <img className="product-social" alt="Social" src={fbIcon} />
            <img className="product-img" alt="Social" src={twitterIcon} />
            <img
              className="product-social-2"
              alt="Social"
              src={messengerIcon}
            />
            <div className="product-social-3" />
            <img className="product-line" alt="Line" src={footerDivider} />
            <div className="product-overlap-group">
              <div className="product-search">
                <input
                  className="product-input"
                  placeholder="Search.."
                  type="text"
                />
              </div>
              <img
                title="Search"
                className="product-iconamoon-search"
                alt="Iconamoon search"
                src={footerSearchIcon}
              />
            </div>
            <img className="product-logo" alt="Logo" src={logoDark} />
          </div>
          <div className="product-colaborators">
            <img
              className="product-download-removebg"
              alt="Download removebg"
              src={Spnoser4}
            />
            <img
              className="product-chanel-removebg"
              alt="Chanel removebg"
              src={Spnoser3}
            />
            <img
              className="product-ralph-lauren-symbol"
              alt="Ralph lauren symbol"
              src={Spnoser2}
            />
            <img
              className="product-breitling-logo"
              alt="Breitling logo"
              src={Sponser1}
            />
            <img
              className="product-png-transparent"
              alt="Png transparent"
              src={Spnoser5}
            />
          </div>
          <div className="product-nav-bar-wrapper">
            <div className="product-nav-bar">
              <Link to="/dashboard" className="product-logo-2">
                <img alt="Logo" src={logo} />
              </Link>
              <Link to="/cart" className="product-prime-shopping-cart">
                <img
                  alt="Prime shopping cart"
                  src={cartIcon}
                  style={{ cursor: "pointer" }}
                  title="Cart"
                />
              </Link>
              <div className="product-search-button">
                <input
                  className="product-overlap-group-2"
                  placeholder="Search for 1000+ of available products"
                  type="text"
                />
                <div title="Search" className="product-overlap">
                  <img
                    className="product-search-icon"
                    alt="Search icon"
                    src={searchIcon}
                    title="Search"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <img
                className="product-favourites"
                alt="Favourites"
                src={favIcon}
                style={{ cursor: "pointer" }}
                title="Favourites"
                onClick={toggleShowWishList}
              />
              <Link to="/profile" className="product-profile">
                <img
                  title="Profile"
                  style={{ cursor: "pointer" }}
                  alt="Profile"
                  src={profileIcon}
                />
              </Link>
            </div>
          </div>
          <div className="product-heading">
            <div className="product-items">
              <div className="product-text-wrapper-4">Home</div>
              <div className="product-text-wrapper-5">/</div>
              <div className="product-text-wrapper-6">{productData.name}</div>
            </div>
          </div>
          <div className="product-pic">
            <div className="product-picture">
              {productData && productData.images && (
                <img
                  className="product-image"
                  alt={`Image ${currentIndex}`}
                  src={productData.images[currentIndex]}
                />
              )}
            </div>
            <div>
              <Helmet>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
              </Helmet>
              <lord-icon
                onClick={handleNext}
                className="product-next"
                src="https://cdn.lordicon.com/dwoxxgps.json"
                trigger="click"
                state="hover-arrow-up-2"
                style={{
                  cursor: "pointer",
                  width: "50px",
                  height: "50px",
                  transform: "rotate(90deg)",
                  position: "absolute",
                  // left: "300px",
                  // top: "530px",
                  left: "540px",
                  top: "270px",
                }}
              ></lord-icon>
              <lord-icon
                onClick={handlePrev}
                className="product-prev"
                src="https://cdn.lordicon.com/dwoxxgps.json"
                trigger="click"
                state="hover-arrow-up-2"
                style={{
                  cursor: "pointer",
                  width: "50px",
                  height: "50px",
                  transform: "rotate(-90deg)",
                  position: "absolute",
                  // left: "250px",
                  // top: "530px",
                  left: "10px",
                  top: "270px",
                }}
              ></lord-icon>
            </div>
          </div>
          <img className="product-rectangle" alt="Rectangle" src={divider3} />
          <img className="product-rectangle-2" alt="Rectangle" src={divider3} />
          <img className="product-rectangle-3" alt="Rectangle" src={divider3} />
          <div className="product-overlap-2">
            <img
              className="product-rectangle-4"
              alt="Rectangle"
              src={divider3}
            />
            <div className="product-accordion">
              <div className="product-panel-open">
                <div className="product-bulleted-list">
                  <div className="product-bulleted-line">
                    <div className="product-bullet" />
                    <div className="product-text-wrapper-7">
                      Free store return
                    </div>
                  </div>
                  <div className="product-bulleted-line">
                    <div className="product-bullet" />
                    <p className="product-text-wrapper-8">
                      Free returns via USPS Dropoff Service
                    </p>
                  </div>
                </div>
                <p className="product-you-have-days-to">
                  <span className="product-span">You have </span>
                  <span className="product-text-wrapper-9">60 days</span>
                  <span className="product-span">
                    {" "}
                    to return the item(s) using any of the following methods:
                  </span>
                </p>
                <div className="product-title">
                  <div className="product-text-wrapper-10">Return</div>
                </div>
              </div>
              <div className="product-panel-open-2">
                <div className="product-list">
                  <div className="product-overlap-group-3">
                    <img
                      className="product-divider"
                      alt="Divider"
                      src={divider3}
                    />
                    <img
                      className="product-divider-2"
                      alt="Divider"
                      src={divider3}
                    />
                    <img
                      className="product-divider-3"
                      alt="Divider"
                      src={divider3}
                    />
                    <div className="product-column">
                      <div className="product-text-wrapper-11">HOW MUCH</div>
                      <div className="product-text-wrapper-12">$4.50</div>
                      <div className="product-text-wrapper-12">$10.00</div>
                      <div className="product-text-wrapper-12">Free</div>
                    </div>
                    <div className="product-column-2">
                      <div className="product-text-wrapper-13">HOW LONG</div>
                      <div className="product-text-wrapper-14">
                        1-4 business days
                      </div>
                      <div className="product-text-wrapper-14">
                        1 business day
                      </div>
                      <div className="product-text-wrapper-14">
                        1-3 business days
                      </div>
                    </div>
                    <div className="product-column-3">
                      <div className="product-text-wrapper-13">TYPE</div>
                      <div className="product-text-wrapper-14">
                        Standard delivery
                      </div>
                      <div className="product-text-wrapper-14">
                        Express delivery
                      </div>
                      <div className="product-text-wrapper-14">
                        Pick up in store
                      </div>
                    </div>
                  </div>
                </div>
                <p className="product-text-wrapper-15">
                  Free standard shipping on orders over $35 before tax, plus
                  free returns.
                </p>
                <div className="product-div-wrapper">
                  <div className="product-text-wrapper-16">Delivery</div>
                </div>
              </div>
            </div>
          </div>
          <img className="product-rectangle-5" alt="Rectangle" src={divider3} />
          <div className="product-group">
            <div className="product-text-wrapper-17">Availability:</div>
            <div className="product-text-wrapper-18">Category:</div>
            <div className="product-overlap-3">
              <div className="product-text-wrapper-19">
                {productData.quantity > 50 ? "In Stock" : "Limited Stock"}
              </div>
              <div className="product-text-wrapper-20">
                {productData.categoryName}
              </div>
            </div>
          </div>
          <div className="product-text-wrapper-21">0 reviews</div>
          <div className="product-text-wrapper-22">Submit a review</div>
          <div className="product-text-wrapper-23">{productData.name}</div>
          {/* <img className="product-rate" alt="Rate" src={rate} /> */}
          {/* left: 806px; position: absolute; top: 325px; */}
          <Rating
            className="product-rate"
            name="half-rating-read"
            defaultValue={2.5}
            value={review}
            precision={0.5}
            readOnly
          />
          <div className="product-text-wrapper-24">${productPrice}</div>
          <div className="product-div-2">
            <div className="product-text-wrapper-25">${productData.price}</div>
            <div className="product-text-wrapper-26">
              {productData.discount}% Off
            </div>
          </div>
          <div className="product-color">
            <div className="product-text-wrapper-27">Select Color:</div>
            <div className="product-colors">
              <img
                onClick={handleChangeColor}
                style={
                  color === "blue"
                    ? { height: "25px", width: "25px" }
                    : { height: "20px", width: "20px" }
                }
                className="product-color-blue"
                alt="Blue"
                src={color === "blue" ? blueSelected : blue}
                name="blue"
              />
              <img
                onClick={handleChangeColor}
                style={
                  color === "red"
                    ? { height: "25px", width: "25px" }
                    : { height: "20px", width: "20px" }
                }
                className="product-color-red"
                alt="Red"
                src={color === "red" ? redSelected : red}
                name="red"
              />
              <img
                onClick={handleChangeColor}
                style={
                  color === "black"
                    ? { height: "25px", width: "25px" }
                    : { height: "20px", width: "20px" }
                }
                className="product-color-black"
                alt="Black"
                src={color === "black" ? blackSelected : black}
                name="black"
              />
              <img
                onClick={handleChangeColor}
                style={
                  color === "yellow"
                    ? { height: "25px", width: "25px" }
                    : { height: "20px", width: "20px" }
                }
                className="product-color-yellow"
                alt="Yellow"
                src={color === "yellow" ? yellowSelected : yellow}
                name="yellow"
              />
            </div>
          </div>
          <div className="product-qty">
            <div className="product-overlap-4">
              <div onClick={handleDecreaseQuantity} className="product-minus">
                <img
                  className="product-rectangle-copy"
                  alt="Rectangle copy"
                  src={quantityMinusIcon}
                />
              </div>
              <div className="product-text-wrapper-28">{quantity}</div>
              <div onClick={handleIncreaseQuantity} className="product-plus">
                <img
                  className="product-group-2"
                  alt="Group"
                  src={quantityPlusIcon}
                />
              </div>
            </div>
          </div>
          <button className="product-btn">
            <div onClick={addToCart} className="product-overlap-5">
              <img className="product-cart" alt="Cart" src={cart} />
              <div className="product-text-wrapper-29">Add To Cart</div>
            </div>
          </button>
          <img
            title="Add to Favourites"
            className="product-group-3"
            alt="Group"
            src={isProductInWishlist ? favouritesFilled : fav}
            onClick={handleToggleFavourite}
          />
          <div className="product-tabs">
            <div className="product-overlap-6">
              <p className="product-introducing-beats-by">
                {productData.description}
              </p>
              <div className="product-overlap-7">
                <div className="product-overlap-group-4">
                  <img
                    className="product-rectangle-copy-2"
                    alt="Rectangle copy"
                    src={divider3}
                  />
                  <div className="product-tab">
                    <div className="product-text-wrapper-30">
                      Product Infomation
                    </div>
                    <img
                      className="product-rectangle-copy-3"
                      alt="Rectangle copy"
                      src={divider1}
                    />
                  </div>
                </div>
                <div className="product-tab-2">
                  <div className="product-text-wrapper-31">Reviews</div>
                  <div className="product-text-wrapper-32">0</div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="product-payment-methods"
            alt="Payment methods"
            src={paymentMethods}
          />
          <div className="product-share">
            <div style={{ cursor: "pointer" }} className="product-share-btn">
              <div className="product-inner">
                <img className="product-facebook" alt="Facebook" src={fb} />
                <div className="product-text-wrapper-33">Share on Facebook</div>
              </div>
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="product-inner-wrapper"
            >
              <div className="product-inner-2">
                <div className="product-text-wrapper-34">Share on Twitter</div>
                <img className="product-twitter" alt="Twitter" src={twitter} />
              </div>
            </div>
          </div>
          <div className="product-products-cards">{products}</div>
          <div className="product-products-heading">
            <div className="product-text-wrapper-41">Similar Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
