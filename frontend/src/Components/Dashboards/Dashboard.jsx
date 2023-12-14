import React from "react";
import "./Dashboard.css";
import logo from "../../Assets/logoBlack.png";
import searchIcon from "../../Assets/searchIcon.png";
import profileIcon from "../../Assets/profileIcon.png";
import favouritesIcon from "../../Assets/favouritesIcon.png";
import cartIcon from "../../Assets/cartIcon.png";
import verifiedIcon from "../../Assets/verifiedIcon.png";
import freeShippingIcon from "../../Assets/freeShippingIcon.png";
import moneyGuaranteeIcon from "../../Assets/moneyGuaranteeIcon.png";
import supportIcon from "../../Assets/supportIcon.png";
import saleHeadphone from "../../Assets/saleHeadphone.png";
import Categories from "./Categories";
import shoe from "../../Assets/shoe.png";
import gaming from "../../Assets/gaming.png";
import decor from "../../Assets/decor.png";
import food from "../../Assets/food.png";
import study from "../../Assets/study.png";
import makeup from "../../Assets/makeup.png";
import Product from "./Product";

const Dashboard = () => {
  return (
    <div className="home">
      <div className="div">
        <div style={{ backgroundColor: "black" }} className="footer">
          <div className="menu-header">
            <div className="text-wrapper">About</div>
            <div className="text-wrapper">Categories</div>
            <div className="text-wrapper">Products</div>
            <div className="text-wrapper">Profile</div>
            <div className="text-wrapper">Contact us</div>
          </div>
          <div className="menu-footer">
            <div className="text-wrapper-2">Privacy Policy</div>
            <div className="text-wrapper-2">Terms of Use</div>
            <div className="text-wrapper-2">Sales and Refunds</div>
            <div className="text-wrapper-2">Legal</div>
            <div className="text-wrapper-2">Site Map</div>
          </div>
          <div className="text-wrapper-3">© 2023 GoGrab</div>
          <img className="social" alt="Social" src="social.svg" />
          <img className="img" alt="Social" src="social-3.svg" />
          <img className="social-2" alt="Social" src="social-2.svg" />
          <div className="social-3" />
          <img className="line" alt="Line" src="line-6.svg" />
          <div className="overlap-group">
            <div className="search">
              <input className="frame" placeholder="Search.." type="text" />
            </div>
            <img
              className="iconamoon-search"
              alt="Iconamoon search"
              src="iconamoon-search-thin.svg"
            />
          </div>
          <img className="logo" alt="Logo" src={logo} />
        </div>
        <div className="colaborators">
          <img
            className="download-removebg"
            alt="Download removebg"
            src="download-removebg-preview-1.png"
          />
          <img
            className="chanel-removebg"
            alt="Chanel removebg"
            src="chanel-removebg-preview-1.png"
          />
          <img
            className="ralph-lauren-symbol"
            alt="Ralph lauren symbol"
            src="ralph-lauren-symbol-removebg-preview-1.png"
          />
          <img
            className="breitling-logo"
            alt="Breitling logo"
            src="breitling-logo-1-1.png"
          />
          <img
            className="png-transparent"
            alt="Png transparent"
            src="png-transparent-hermes-paris-logo-hermes-perfume-logo-eau-d-orange-verte-fashion-hermes-hermes-perfume-logo-removebg-preview-1.png"
          />
        </div>
        {/* products mobin  */}
        <div className="products-cards">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        {/*  */}
        <div className="products-heading">
          {/* <div className="sort-by">
            <div className="overlap-group-2">
              <img
                className="flat-color-icons"
                alt="Flat color icons"
                src="flat-color-icons-next.svg"
              />
              <div className="text-wrapper-9">Sort by:</div>
            </div>
          </div> */}

          <div className="text-wrapper-10">Products</div>
        </div>
        {/*  */}
        {/* categories mobin */}
        <div className="categories-frames">
          <Categories image={shoe} name={"Fashion And Apparel"} />
          <Categories image={decor} name={"Electronics and gadgets"} />
          <Categories image={makeup} name={"Home and decor"} />
          <Categories image={study} name={"Beauty and personal care"} />
          <Categories image={food} name={"Health and wellness"} />
          <Categories image={gaming} name={"books and media"} />
          <Categories image={gaming} name={"books and media"} />
        </div>
        <div className="categoris-heading">
          <div className="text-wrapper-27">Categories</div>
        </div>
        <img
          className="sale-headphone"
          alt="Sale headphone"
          src={saleHeadphone}
        />
        <div className="functionalities">
          <div className="frame-7 functionality">
            <img
              className="la-shipping-fast"
              alt="La shipping fast"
              src={freeShippingIcon}
            />
            <div className="text-wrapper-28">Free shipping</div>
            <p className="text-wrapper-29">Free shipping on all orders</p>
          </div>
          <div className="frame-8 functionality">
            <img className="vector" alt="Vector" src={moneyGuaranteeIcon} />
            <div className="text-wrapper-28">Money Guarantee</div>
            <div className="text-wrapper-29">30 days money back</div>
          </div>
          <div className="frame-9 functionality">
            <img
              className="pepicons-pop"
              alt="Pepicons pop"
              src={supportIcon}
            />
            <div className="text-wrapper-28">Support 24/7</div>
            <div className="text-wrapper-29">Technical support 24/7</div>
          </div>
          <div className="frame-10 functionality">
            <div className="text-wrapper-28">Verified</div>
            <p className="text-wrapper-29">Authentic , Verified</p>
            <img
              className="tdesign-secured"
              alt="Tdesign secured"
              src={verifiedIcon}
            />
          </div>
        </div>
        <div className="landing">
          <div className="overlap-5">
            <div className="sale-off">
              <div className="overlap-group-4">
                <div className="text-wrapper-30">Sale 20% Off</div>
                <div className="text-wrapper-31">On Everything</div>
              </div>
            </div>
            <p className="embrace-the-joy-of">
              Embrace the joy of smart shopping with our site-wide 20% off
              extravaganza! Don&#39;t miss out on incredible savings – log in
              and treat yourself to the latest trends at unbeatable prices
            </p>
            <button className="login-button">
              <div className="overlap-6">
                <div className="text-wrapper-32">LOGIN</div>
              </div>
            </button>
          </div>
        </div>
        <div className="nav-bar-wrapper">
          <div className="nav-bar">
            <img className="logo-2" alt="Logo" src={logo} />
            <img
              className="prime-shopping-cart navIcons"
              alt="Prime shopping cart"
              src={cartIcon}
            />
            <div className="search-button">
              <input
                style={{ padding: "20px", fontSize: "18px" }}
                className="overlap-group-5"
                placeholder="Search for 1000+ of available products"
              />

              <button
                style={{ border: "none" }}
                className="search-icon-wrapper"
              >
                <img
                  className="search-icon"
                  alt="Search icon"
                  src={searchIcon}
                />
              </button>
            </div>
            <img
              className="favourites-2 navIcons"
              alt="Favourites"
              src={favouritesIcon}
            />
            <img className="profile navIcons" alt="Profile" src={profileIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
