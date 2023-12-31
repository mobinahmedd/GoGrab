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

  React.useEffect(() => {
    getWishlist();
  }, []);

  const products = wishlistData?.map((product) => {
    return (
      <Product
        key={product._id}
        id={product._id}
        img={product.images[0]}
        name={product.name}
        price={product.price}
      />
    );
  });

  const getWishlist = async () => {
    try {
      const response = await mainServerInstance.get(
        "/api/wishlist/getWishlist"
      );
      const productIds = response.data.products;

      const productDetails = await Promise.all(
        productIds.map(async (productId) => {
          try {
            const productDetail = await mainServerInstance.get(
              `/api/products/getProduct/${productId.productId}`
            );
            return productDetail.data;
          } catch (error) {
            console.error("Error fetching product detail:", error);
            return null;
          }
        })
      );

      // const validProductDetails = productDetails.filter(
      //   (detail) => detail !== null
      // );
      // setWishlistData(validProductDetails);

      setWishlistData(productDetails);
      console.log("product Details", productDetails);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  // const getWishlist = async () => {
  //   try {
  //     const response = await mainServerInstance.get(
  //       "/api/wishlist/getWishlist"
  //     );
  //     const productIds = response.data.products;

  //     console.log([1, 2, 3].splice(4));
  //     for (const productId of productIds) {
  //       const productDetail = await mainServerInstance.get(
  //         `/api/products/getProduct/${productId.productId}`
  //       );
  //       if (productDetail) {
  //         setWishlistData((prev) => [...prev, productDetail]);
  //       }
  //     }
  //     console.log("nigga ", Wishlist);
  //   } catch (error) {
  //     console.error("Error fetching wishlist:", error);
  //   }
  // };
  return (
    <>
      <div className="wl-blurbg">
        <div className="wl-frame">
          <div className="wl-div">
            <div className="wl-text-wrapper">My Wishlist</div>
            <div className="wl-text-wrapper-2">Product name</div>
            <div className="wl-text-wrapper-3">Unit price</div>
            <img className="wl-line" alt="Line" src={line} />

            <div className="wl-group">{products}</div>

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
