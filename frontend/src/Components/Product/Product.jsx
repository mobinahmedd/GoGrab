import React from "react";
import "./Product.css";
import profileIcon from "../../Assets/profile.png";
import favouriteIcon from "../../Assets/favourites.png";
import favouriteFilledIcon from "../../Assets/favouritesFilled.png";
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
import favIcon from "../../Assets/favourite-icon.png";
import ProductCard from "./ProductCard";

const Product = () => {
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("red");
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const handleChangeColor = (event) => {
    setColor(event.target.name);
  };

  console.log(color);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => {
      return prev === 1 ? prev : prev - 1;
    });
  };
  return (
    <div className="product-frame">
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
          <img className="product-social-2" alt="Social" src={messengerIcon} />
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
            <img className="product-logo-2" alt="Logo" src={logo} />
            <img
              className="product-prime-shopping-cart"
              alt="Prime shopping cart"
              src={cartIcon}
              style={{ cursor: "pointer" }}
              title="Cart"
            />
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
              src={favouriteIcon}
              style={{ cursor: "pointer" }}
              title="Favourites"
            />
            <img
              title="Profile"
              style={{ cursor: "pointer" }}
              className="product-profile"
              alt="Profile"
              src={profileIcon}
            />
          </div>
        </div>
        <div className="product-heading">
          <div className="product-items">
            <div className="product-text-wrapper-4">Home</div>
            <div className="product-text-wrapper-5">/</div>
            <div className="product-text-wrapper-6">Beats by Dre</div>
          </div>
        </div>
        <div className="product-pic">
          <img className="product-image" alt="Image" src={productImg} />
        </div>
        <img className="product-rectangle" alt="Rectangle" src={divider3} />
        <img className="product-rectangle-2" alt="Rectangle" src={divider3} />
        <img className="product-rectangle-3" alt="Rectangle" src={divider3} />
        <div className="product-overlap-2">
          <img className="product-rectangle-4" alt="Rectangle" src={divider3} />
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
                Free standard shipping on orders over $35 before tax, plus free
                returns.
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
            <div className="product-text-wrapper-19">In stock</div>
            <div className="product-text-wrapper-20">Fashion and Apperel</div>
          </div>
        </div>
        <div className="product-text-wrapper-21">0 reviews</div>
        <div className="product-text-wrapper-22">Submit a review</div>
        <div className="product-text-wrapper-23">Beats by Dre</div>
        <img className="product-rate" alt="Rate" src={rate} />
        <div className="product-text-wrapper-24">$299,43</div>
        <div className="product-div-2">
          <div className="product-text-wrapper-25">$534,33</div>
          <div className="product-text-wrapper-26">24% Off</div>
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
          <div className="product-overlap-5">
            <img className="product-cart" alt="Cart" src={cart} />
            <div className="product-text-wrapper-29">Add To Cart</div>
          </div>
        </button>
        <img
          title="Add to Favourites"
          className="product-group-3"
          alt="Group"
          src={favIcon}
        />
        <div className="product-tabs">
          <div className="product-overlap-6">
            <p className="product-introducing-beats-by">
              Introducing Beats by Dr. Dre headphones, a pinnacle of audio
              excellence that seamlessly blends cutting-edge technology with
              stylish design. Immerse yourself in a world of unparalleled sound
              quality and clarity, as these headphones deliver a rich,
              full-bodied audio experience across the entire spectrum.
              <br />
              Crafted with meticulous attention to detail, Beats by Dr. Dre
              headphones boast a sleek and modern aesthetic that effortlessly
              complements any lifestyle. The iconic Beats logo graces each ear
              cup, signaling a commitment to premium audio and a fashionable
              edge.
              <br />
              Engineered for maximum comfort during extended listening sessions,
              these headphones feature plush ear cushions that envelop your ears
              in luxurious softness, providing a snug fit without compromising
              on breathability.
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
          <div style={{ cursor: "pointer" }} className="product-inner-wrapper">
            <div className="product-inner-2">
              <div className="product-text-wrapper-34">Share on Twitter</div>
              <img className="product-twitter" alt="Twitter" src={twitter} />
            </div>
          </div>
        </div>
        <div className="product-products-cards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* <div className="product-products-cards">
          <div className="product-ui-challenge-day">
            <div className="product-text-wrapper-35">Beats by Dre</div>
            <div className="product-text-wrapper-36">$16</div>
            <div className="product-overlap-group-wrapper">
              <div className="product-group-wrapper">
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
        </div> */}
        {/* 

        <div className="product-ui-challenge-day-wrapper">
          <div className="product-ui-challenge-day">
            <div className="product-text-wrapper-35">Beats by Dre</div>
            <div className="product-text-wrapper-36">$16</div>
            <div className="product-overlap-group-wrapper">
              <div className="product-group-wrapper">
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
        </div>
        <div className="product-products-cards-2">
          <div className="product-ui-challenge-day">
            <div className="product-text-wrapper-35">Beats by Dre</div>
            <div className="product-text-wrapper-36">$16</div>
            <div className="product-overlap-group-wrapper">
              <div className="product-group-wrapper">
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
        </div>
        <div className="product-products-cards-3">
          <div className="product-ui-challenge-day">
            <div className="product-text-wrapper-35">Beats by Dre</div>
            <div className="product-text-wrapper-36">$16</div>
            <div className="product-overlap-group-wrapper">
              <div className="product-group-wrapper">
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
        </div>
        <div className="product-products-cards-4">
          <div className="product-ui-challenge-day">
            <div className="product-text-wrapper-35">Beats by Dre</div>
            <div className="product-text-wrapper-36">$16</div>
            <div className="product-overlap-group-wrapper">
              <div className="product-group-wrapper">
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
        </div> */}
        <div className="product-products-heading">
          <div className="product-text-wrapper-41">Similar Products</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
