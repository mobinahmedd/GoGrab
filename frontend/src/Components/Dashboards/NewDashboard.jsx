import React from "react";
import "./NewDashboard.css";
import logo from "../../Assets/logoBlack.png";
import searchIcon from "../../Assets/searchIcon.png";
import profileIcon from "../../Assets/profileIcon.png";
import favouritesIcon from "../../Assets/favouritesIcon.png";
import cartIcon from "../../Assets/cartIcon.png";
import heroImage from "../../Assets/heroImage.png";

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

function NewDashboard(props) {
  return (
    <>
      <div className="home">
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
        <img className="heroImage" src={heroImage} alt="" />
      </div>
    </>
  );
}

export default NewDashboard;
