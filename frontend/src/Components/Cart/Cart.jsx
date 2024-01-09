import React from "react";
import { mainServerInstance } from "../../Axios/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

import "./Cart.css";
import profileIcon from "../../Assets/profile.png";
import hero from "../../Assets/hero.png";
import divider from "../../Assets/divider.png";
import favouriteIcon from "../../Assets/favourites.png";
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
import CartProduct from "./CartProduct";

const Cart = () => {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getCartProducts();
  }, []);

  React.useEffect(() => {
    if (cartData.length !== 0) {
      updateCartProducts();
      const newTotalPrice = cartData.products.reduce(
        (total, product) => total + product.productId.price * product.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  }, [cartData]);

  const updateCartProducts = async () => {
    try {
      const response = await mainServerInstance.patch(`/api/cart/updateCart`, {
        products: cartData.products,
      });

      console.log("Cart updated:", response.data);
    } catch (error) {
      console.error("Error updating cart:", error);
      // Handle errors or display an error message to the user
    }
  };

  const removeProduct = (productId) => {
    // Update the cartData to remove the specified product
    setCartData((prevCart) => {
      const updatedCart = {
        ...prevCart,
        products: prevCart.products.filter(
          (product) => product._id !== productId
        ),
      };

      // Recalculate the total price
      const newTotalPrice = updatedCart.products.reduce(
        (total, product) => total + product.productId.price * product.quantity,
        0
      );
      setTotalPrice(newTotalPrice);

      return updatedCart;
    });
  };

  const updateProductQuantity = (productId, newQuantity) => {
    // Update the quantity for the specific product in the cartData
    setCartData((prevCart) => {
      const updatedCart = {
        ...prevCart,
        products: prevCart.products.map((product) => {
          if (product._id === productId) {
            return {
              ...product,
              quantity: newQuantity,
            };
          }
          return product;
        }),
      };
      // Recalculate the total price
      const newTotalPrice = updatedCart.products.reduce(
        (total, product) => total + product.productId.price * product.quantity,
        0
      );
      setTotalPrice(newTotalPrice);

      return updatedCart;
    });
  };

  const cartProduct = cartData.products?.map((product) => (
    <CartProduct
      key={product._id}
      image={product.productId.images[0]}
      name={product.productId.name}
      price={product.productId.price}
      quantity={product.quantity}
      updateQuantity={(newQuantity) =>
        updateProductQuantity(product._id, newQuantity)
      }
      productId={product._id}
      removeProduct={removeProduct}
    />
  ));

  const getCartProducts = async () => {
    try {
      const response = await mainServerInstance.get("/api/cart/getCart");

      console.log("Cart:", response.data);
      setCartData(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
      // Handle errors or display an error message to the user
    }
  };

  console.log(cartData);

  const handleCheckout = () => {
    navigate("/comingSoon");
  };

  return (
    <div className="cart-frame">
      <div className="cart-div">
        <div style={{ backgroundColor: "#22242A" }} className="cart-footer">
          <div className="cart-menu-header">
            <div className="cart-cart-text-wrapper">About</div>
            <div className="cart-text-wrapper">Categories</div>
            <div className="cart-text-wrapper">Products</div>
            <div className="cart-text-wrapper">Profile</div>
            <div className="cart-text-wrapper">Contact us</div>
          </div>
          <div className="cart-menu-footer">
            <div className="cart-text-wrapper-2">Privacy Policy</div>
            <div className="cart-text-wrapper-2">Terms of Use</div>
            <div className="cart-text-wrapper-2">Sales and Refunds</div>
            <div className="cart-text-wrapper-2">Legal</div>
            <div className="cart-text-wrapper-2">Site Map</div>
          </div>
          <div className="cart-text-wrapper-3">© 2023 GoGrab</div>
          <img className="cart-social" alt="Social" src={fbIcon} />
          <img className="cart-img" alt="Social" src={twitterIcon} />
          <img className="cart-social-2" alt="Social" src={messengerIcon} />
          <div className="cart-social-3" />
          <img className="cart-line" alt="Line" src={footerDivider} />
          <div className="cart-overlap-group">
            <div className="cart-search">
              <input
                className="cart-input"
                placeholder="Search.."
                type="text"
              />
            </div>
            <img
              style={{ cursor: "pointer" }}
              title="Search"
              className="cart-iconamoon-search"
              alt="Iconamoon search"
              src={footerSearchIcon}
            />
          </div>
          <img className="cart-logo" alt="Logo" src={logoDark} />
        </div>
        <div
          style={{
            backgroundColor: "linear-gradient(90deg, #D3D3D3 0%, #F4F4F4 100%)",
          }}
          className="cart-colaborators"
        >
          <img
            className="cart-download-removebg"
            alt="Download removebg"
            src={Spnoser4}
          />
          <img
            className="cart-chanel-removebg"
            alt="Chanel removebg"
            src={Spnoser3}
          />
          <img
            className="cart-ralph-lauren-symbol"
            alt="Ralph lauren symbol"
            src={Spnoser2}
          />
          <img
            className="cart-breitling-logo"
            alt="Breitling logo"
            src={Sponser1}
          />
          <img
            className="cart-png-transparent"
            alt="Png transparent"
            src={Spnoser5}
          />
        </div>
        <div className="cart-overlap">
          <div className="cart-div-2">
            <div className="cart-products">
              {/* <CartProduct name="Beats by Dre" /> */}
              {/* <CartProduct name="Beats by Jawad" />
              <CartProduct name="Beats by Mobin" />
              <CartProduct name="Beats by Adan" />
              <CartProduct name="Beats by Shahood" />
              <CartProduct name="Beats by Umer" /> */}
              {cartProduct}
            </div>
            <div className="cart-heading">
              <div className="cart-text-wrapper-11">Shopping Cart</div>
              <div className="cart-text-wrapper-12">4 Items</div>
              <img className="cart-divider-2" alt="Divider" src={divider} />
            </div>
            <div className="cart-thead">
              <div className="cart-text-wrapper-13">PRODUCT</div>
              <div className="cart-text-wrapper-14">TOTAL</div>
              <div className="cart-text-wrapper-15">QUANTITY</div>
              <div className="cart-text-wrapper-16">UNIT PRICE</div>
            </div>
          </div>
          <img className="cart-img-2" alt="Frame" src={hero} />
          <div className="cart-TOTAL">
            <div className="cart-text-wrapper-17">Subtotal</div>
            <div className="cart-text-wrapper-18">Shipping fee</div>
            <div className="cart-text-wrapper-19">TOTAL</div>
            <div className="cart-text-wrapper-20">${totalPrice}</div>
            <div className="cart-text-wrapper-21">$20</div>
            <div className="cart-text-wrapper-22">Coupon</div>
            <div className="cart-text-wrapper-23">No</div>
            <div className="cart-text-wrapper-24">${totalPrice + 20}</div>
            <img className="cart-divider-3" alt="Divider" src={divider} />
            <button className="cart-btn">
              <div
                // to="/checkOutForm"
                // style={{ zIndex: "100000" }}
                title="Proceed to Checkout"
                onClick={handleCheckout}
                className="cart-div-wrapper"
              >
                <div className="cart-text-wrapper-25">Check out</div>
              </div>
            </button>
          </div>
        </div>
        <div className="cart-nav-bar-wrapper">
          <div className="cart-nav-bar">
            <Link to="/dashboard" className="cart-logo-2">
              <img alt="Logo" src={logo} />
            </Link>
            <Link to="/cart" className="cart-prime-shopping-cart">
              <img
                style={{ cursor: "pointer" }}
                alt="Prime shopping cart"
                src={cartIcon}
                title="Cart"
              />
            </Link>
            <div className="cart-search-button">
              <input
                className="cart-overlap-group-6"
                placeholder="Search for 1000+ of available products"
                type="text"
              />
              <div className="cart-search-icon-wrapper">
                <img
                  className="cart-search-icon"
                  alt="Search icon"
                  src={searchIcon}
                  title="Search"
                />
              </div>
            </div>
            {/* <div className="cart-search-button">
              <div className="cart-overlap-group-6">
                <p className="cart-p">Search for 1000+ of available products</p>
                <div className="cart-search-icon-wrapper">
                  <img
                    className="cart-search-icon"
                    alt="Search icon"
                    src={searchIcon}
                    title="Search"
                  />
                </div>
              </div>
            </div> */}

            <img
              style={{ cursor: "pointer" }}
              className="cart-favourites"
              alt="Favourites"
              src={favouriteIcon}
              title="Favourites"
            />
            <Link to="/profile" className="cart-profile">
              <img
                style={{ cursor: "pointer" }}
                alt="Profile"
                src={profileIcon}
                title="Profile"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
