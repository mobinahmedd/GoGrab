import React from "react";
import "./SignUpStep2.css";
import blueWave from "../../Assets/blueWaveSignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import Step2SignUp from "../../Assets/step2SignUp.png";

const SignUpStep2 = () => {
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
                }}
                className="step2-text-wrapper-3"
                placeholder="House No."
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
              />
            </div>
          </div>
          <div style={{ top: "180px" }} className="step2-phone-input">
            <div className="step2-overlap-10">
              {/* <div className="step2-text-wrapper-10">Phone number</div> */}
              <input
                style={{
                  width: "310px",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                className="step2-text-wrapper-3"
                placeholder="Phone Number"
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
