import React from "react";
import "./AddProduct.css";
import uploadIcon from "./Assets/upload-icon.png";
import uploadSmallIcon from "./Assets/upload-smallicon.png";
import crossIcon from "./Assets/cross-icon.png";

const AddProduct = () => {
  return (
    <div className="addProduct-frame">
      <div className="addProduct-div">
        <div className="addProduct-text-wrapper">Add new Product</div>
        <div className="addProduct-cross">
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
            <select className="addProduct-Select-Category">
              <option disabled="disabled" selected="selected">
                Select any Category
              </option>
              <option>Fashion And Apparel</option>
              <option>Electronics And Gadgets</option>
              <option>Home And Decor</option>
              <option>Beauty And Personal care</option>
              <option>Health And Wellness</option>
              <option>Books And Media</option>
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
              placeholder="$10.00"
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
            ></input>
          </div>
          <div className="addProduct-text-wrapper-12">Colors</div>
        </div>
        <div className="addProduct-update-btn">
          <div className="addProduct-overlap-8">
            <div className="addProduct-text-wrapper-13">Publish Product</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
