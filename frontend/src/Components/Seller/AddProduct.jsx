import React from "react";
import { useState, useEffect } from "react";
import { mainServerInstance } from "../../Axios/axiosInstance";
import { NotificationContext } from "../../NotificationContext";
import "./AddProduct.css";
import uploadIcon from "./Assets/upload-icon.png";
import uploadSmallIcon from "./Assets/upload-smallicon.png";
import crossIcon from "./Assets/cross-icon.png";
import Categories from "../Dashboards/Categories";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = (props) => {
  const [productData, setProductData] = React.useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    discount: "",
    categoryId: "",
    images: [],
    timesSold: "0",
  });
  const navigate = useNavigate();

  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const [categoriesData, setCategoriesData] = useState([]);
  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };
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

  const handleBrowseImages = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.multiple = true;
    inputElement.accept = "image/*";

    inputElement.addEventListener("change", (event) => {
      const files = event.target.files;

      // Validation:
      if (files.length > 5) {
        alert("You can upload a maximum of 5 images.");
        return;
      }

      const images = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
          images.push(event.target.result);
          if (images.length === files.length) {
            setProductData({
              ...productData,
              images,
            });
          }
        };
      }
    });

    inputElement.click();
  };

  useEffect(() => {
    // Fetch categories when the component mounts
    getAllCategories();
  }, []);

  // console.log(productData.images);
  console.log(productData);
  // console.log(categoriesData[0]._id);

  const handleInputChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setProductData({
      ...productData,
      categoryId: e.target.value,
    });
  };

  const handlePublishProduct = async () => {
    try {
      const response = await mainServerInstance.post(
        "/api/products/createProduct",
        productData
      );

      console.log("Product published successfully:", response.data);
      showMessage("Product Pusblished", "success");
      navigate("/sellerDashboard");
      // Handle successful submission, e.g., clear form, show success message
    } catch (error) {
      console.error("Error publishing product:", error);
      // Handle error, e.g., display error message to the user
    }
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
        <div
          className={
            productData.images.length == 5
              ? "main-img "
              : "addProduct-main-image"
          }
          style={{ paddingBottom: "10px" }}
          // style={
          //   productData.images.length == 5
          //     ? { height: "200px", width: "200px" }
          //     : {}

          // }
        >
          {productData.images[4] && (
            <img
              className="addProduct-main-image"
              src={productData.images[4]}
              alt="Main product image"
              style={{ height: "290px", width: "400px" }}
            />
          )}
          {productData.images.length != 5 && (
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
                        <span
                          onClick={handleBrowseImages}
                          className="addProduct-text-wrapper-3"
                        >
                          Browse
                        </span>
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
          )}
        </div>
        {/* <div className="addProduct-small-images">
          {productData.images
            .slice(productData.images.length === 5 ? 1 : 0)
            .map((image, index) => (
              <div className={`addProduct-rectangle-${index + 3}`} key={index}>
                <img
                  className={`addProduct-rectangle-${index + 3}`}
                  src={image}
                  alt={`Product image ${index + 1}`}
                />
              </div>
            ))}
        </div> */}
        <div className="addProduct-small-images">
          <div>
            {productData.images[0] && (
              <img
                className="addProduct-rectangle-3"
                src={productData.images[0]}
                alt="Image1"
              />
            )}
          </div>
          <div>
            {productData.images[1] && (
              <img
                className="addProduct-rectangle-4"
                src={productData.images[1]}
                alt="Image2"
              />
            )}
          </div>
          <div>
            {productData.images[2] && (
              <img
                className="addProduct-rectangle-5"
                src={productData.images[2]}
                alt="Image3"
              />
            )}
          </div>
          <div>
            {productData.images[3] && (
              <img
                className="addProduct-rectangle-6"
                src={productData.images[3]}
                alt="Image4"
              />
            )}
          </div>
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
                <option key={category._id} value={category._id}>
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
              style={{ cursor: "pointer" }}
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
