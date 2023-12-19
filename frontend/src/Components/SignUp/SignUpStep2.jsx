import React from "react";
import "./SignUpStep2.css";
import blueWave from "../../Assets/blueWaveSignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import Step2SignUp from "../../Assets/step2SignUp.png";

const SignUpStep2 = (props) => {
  return (
    <div className="step2-overlap-2">
      <div className="step2-overlap-3">
        <img className="step2-rectangle" alt="Rectangle" src={blueWave} />
        <img
          className="step2-image-removebg"
          alt="Image removebg"
          src={cartPersonSignUp}
        />
      </div>
      <div className="step2-text">
        <div className="step2-input">
          <div style={{ top: "120px" }} className="step2-city-input">
            <div className="step2-div-wrapper">
              <input
                style={{
                  width: "130px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="City"
                name="address.city"
                value={props.formData.address.city}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "120px" }} className="step2-country-input">
            <div className="step2-overlap-4">
              <input
                style={{
                  width: "130px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Country"
                name="address.country"
                value={props.formData.address.country}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "60px" }} className="step2-zip-input">
            <div className="step2-overlap-5">
              {/* <div className="step2-text-wrapper-5">Zip code</div> */}
              <input
                style={{
                  width: "90px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Zip Code"
                name="address.zipCode"
                value={props.formData.address.zipCode}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "60px" }} className="step2-area-input">
            <div className="step2-overlap-6">
              <input
                style={{
                  width: "175px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Area"
                name="address.area"
                value={props.formData.address.area}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "0px" }} className="step2-floor-input">
            <div className="step2-overlap-7">
              <input
                style={{
                  width: "85px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Floor"
                name="address.floor"
                value={props.formData.address.floor}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "0px" }} className="step2-house-input">
            <div className="step2-overlap-8">
              {/* <div className="step2-text-wrapper-8">House no</div> */}
              <input
                style={{
                  width: "80px",
                  border: "none",
                  backgroundColor: "transparent",
                  left: "13px",
                }}
                className="step2-text-wrapper-3"
                placeholder="House No."
                name="address.houseNo"
                value={props.formData.address.houseNo}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "0px" }} className="step2-street-input">
            <div className="step2-overlap-9">
              {/* <div className="step2-text-wrapper-9">Street</div> */}
              <input
                style={{
                  width: "70px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Street"
                name="address.street"
                value={props.formData.address.street}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div style={{ top: "180px" }} className="step2-phone-input">
            <div className="step2-overlap-10">
              {/* <div className="step2-text-wrapper-10">Phone number</div> */}
              <input
                style={{
                  color: "black",
                  width: "310px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Phone Number"
                name="contact.phoneNumber"
                value={props.formData.contact.phoneNumber}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="step2-steps">
        <img style={{ width: "300px" }} src={Step2SignUp} alt="" />
      </div>
    </div>
  );
};

export default SignUpStep2;
