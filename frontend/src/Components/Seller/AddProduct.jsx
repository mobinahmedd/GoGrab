import React from "react";
import { useState, useEffect } from "react";
import { mainServerInstance } from "../../Axios/axiosInstance";

import "./AddProduct.css";
import uploadIcon from "./Assets/upload-icon.png";
import uploadSmallIcon from "./Assets/upload-smallicon.png";
import crossIcon from "./Assets/cross-icon.png";
import Categories from "../Dashboards/Categories";

const AddProduct = (props) => {
  const [productData, setProductData] = React.useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    discount: "",
    categoryId: "",
  });

  const [categoriesData, setCategoriesData] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await mainServerInstance.get(
        "/api/categories/getAllCategories"
      );

      console.log("Categories:", response.data);
      setCategoriesData(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    // Fetch categories when the component mounts
    getAllCategories();
  }, []);

  console.log(productData);
  console.log(categoriesData);

  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setProductData({
      ...productData,
      categoryId: e.target.key,
    });
  };

  const handlePublishProduct = () => {
    // Add logic to publish the product data, e.g., send it to an API
    console.log("Publishing Product:", productData);
  };

  return (
    <div
      style={{ backgroundColor: "transparent" }}
      className="addProduct-frame"
    >
      <div style={{ top: "64px" }} className="addProduct-div">
        <div className="addProduct-text-wrapper">Add new Product</div>
        <div onClick={props.toggleAddProduct} className="addProduct-cross">
          <div className="addProduct-cross-div">
            <img
              className="addProduct-system-uicons-cross"
              alt="System uicons cross"
              src={crossIcon}
            />
          </div>
        </div>
        <div className="addProduct-rectangle" />
        <div className="addProduct-main-image">
          <div className="addProduct-overlap">
            <img
              className="addProduct-icon-park-upload"
              alt="Icon park upload"
              src={uploadIcon}
            />
            <div className="addProduct-text">
              <div className="addProduct-overlap-group">
                <div className="addProduct-rectangle-2" />
                <div className="addProduct-text-wrapper-2">
                  Upload upto 5 images
                </div>
                <div className="addProduct-overlap-group-wrapper">
                  <div className="addProduct-overlap-group-2">
                    <p className="addProduct-drop-your-files-here">
                      <span className="addProduct-span">
                        Drop your files here or{" "}
                      </span>
                      <span className="addProduct-text-wrapper-3">Browse</span>
                      <span className="addProduct-span">&nbsp;</span>
                    </p>
                    <img
                      className="addProduct-material-symbols"
                      alt="Material symbols"
                      src={uploadSmallIcon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addProduct-small-images">
          <div className="addProduct-rectangle-3" />
          <div className="addProduct-rectangle-4" />
          <div className="addProduct-rectangle-5" />
          <div className="addProduct-rectangle-6" />
        </div>
        <div className="addProduct-btn">
          <div className="addProduct-div-wrapper">
            <div className="addProduct-text-wrapper-4">
              <input
                className="addProduct-input-productname"
                type="text"
                placeholder="Beats by Dre"
                name="name"
                value={productData.productName}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <p className="addProduct-product-name">
            <span className="addProduct-text-wrapper-5">Product Name </span>
            <span className="addProduct-text-wrapper-6">*</span>
          </p>
        </div>
        <div className="addProduct-btn-2">
          <div className="addProduct-overlap-2">
            <select
              name="category"
              className="addProduct-Select-Category"
              value={productData.category}
              onChange={handleSelectChange}
            >
              <option disabled="disabled" selected="selected">
                Select any Category
              </option>
              {categoriesData.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <p className="addProduct-p">
            <span className="addProduct-text-wrapper-5">Category </span>
            <span className="addProduct-text-wrapper-6">*</span>
          </p>
        </div>
        <div className="addProduct-btn-3">
          <div className="addProduct-overlap-3">
            <input
              className="addProduct-Text-Price"
              type="text"
              placeholder="$92.00"
              name="price"
              onChange={handleInputChange}
            ></input>
          </div>
          <p className="addProduct-p">
            <span className="addProduct-text-wrapper-5">Price </span>
            <span className="addProduct-text-wrapper-6">*</span>
          </p>
        </div>
        <div className="addProduct-btn-4">
          <div className="addProduct-overlap-4">
            <input
              className="addProduct-Text-Quantity"
              type="text"
              placeholder="42"
              name="quantity"
              onChange={handleInputChange}
            ></input>
          </div>
          <p className="addProduct-stock-quantity">
            <span className="addProduct-text-wrapper-5">Stock Quantity </span>
            <span className="addProduct-text-wrapper-6">*</span>
          </p>
        </div>
        <div className="addProduct-btn-5">
          <div className="addProduct-overlap-5">
            <input
              className="addProduct-Text-Discount"
              type="text"
              placeholder="e.g 10 (in %)"
              name="discount"
              onChange={handleInputChange}
            ></input>
          </div>
          <p className="addProduct-p">
            <span className="addProduct-text-wrapper-5">Discount </span>
            <span className="addProduct-text-wrapper-6">*</span>
          </p>
        </div>
        <div className="addProduct-btn-6">
          <textarea
            rows="5"
            cols="5"
            placeholder="Write about your product..."
            className="addProduct-Text-Description"
            name="description"
            onChange={handleInputChange}
          ></textarea>
          <p className="addProduct-product-description">
            <span className="addProduct-text-wrapper-5">
              Product Description{" "}
            </span>
            <span className="addProduct-text-wrapper-6">*</span>
          </p>
        </div>
        <div className="addProduct-btn-7">
          <div className="addProduct-overlap-7">
            <input
              className="addProduct-Text-Color"
              type="text"
              placeholder="Red, Blue, White"
              name="color"
            ></input>
          </div>
          <div className="addProduct-text-wrapper-12">Colors</div>
        </div>
        <div className="addProduct-update-btn">
          <div className="addProduct-overlap-8">
            <div
              className="addProduct-text-wrapper-13"
              onClick={handlePublishProduct}
            >
              Publish Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
