import React from "react";
import "./Wishlist.css";
import { mainServerInstance } from "../../Axios/axiosInstance";

import Product from "./Product";
import line from "../../Assets/footerLine.png";
import headphoneProduct from "../../Assets/headphoneProduct.png";
// import headphoneSet from "../../Assets/headphoneSet.jpeg";
// import product1 from "../../Assets/product1.png";
// import product2 from "../../Assets/product2.png";
// import product3 from "../../Assets/product3.png";
// import product4 from "../../Assets/product4.png";

const Wishlist = (props) => {
  const [wishlistData, setWishlistData] = React.useState([]);
  const getWishlist = async () => {
    try {
      const response = await mainServerInstance.get(
        "/api/wishlist/getWishlist"
      );
      console.log("wishlist:", response.data);
      setWishlistData(response.data);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };
  return (
    <>
      <div className="wl-blurbg">
        <div className="wl-frame">
          <div className="wl-div">
            <div className="wl-text-wrapper">My Wishlist</div>
            <div className="wl-text-wrapper-2">Product name</div>
            <div className="wl-text-wrapper-3">Unit price</div>
            <img className="wl-line" alt="Line" src={line} />

            <div className="wl-group">
              <Product image={headphoneProduct} name="Headphone" price="16" />
              <Product image={headphoneProduct} name="Headphone" price="16" />
              <Product image={headphoneProduct} name="Headphone" price="16" />
              <Product image={headphoneProduct} name="Headphone" price="16" />
              <Product image={headphoneProduct} name="Headphone" price="16" />
              <Product image={headphoneProduct} name="Headphone" price="16" />
            </div>

            <div
              onClick={props.toggleShowWishList}
              className="wl-overlap"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
