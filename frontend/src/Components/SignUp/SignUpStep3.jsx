import React from "react";
import "./SignUpStep3.css";
import blueWave from "../../Assets/blueWaveSignUp.png";
import Step3SignUp from "../../Assets/step3SignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import girl from "../../Assets/girl.png";
import boy from "../../Assets/boy.png";

const SignUpStep3 = () => {
  return (
    <div className="step3-overlap-2">
      <div className="step3-overlap-3">
        <img
          style={{ top: "-10px" }}
          className="step3-rectangle"
          alt="Rectangle"
          src={blueWave}
        />
        <div className="step3-text">
          <div style={{ top: "0px" }} className="step3-input">
            <div style={{ top: "120px" }} className="step3-c-pw-input">
              <div className="step3-div-wrapper">
                {/* <div className="step3-text-wrapper-3">Confirm password</div> */}
                <input
                  style={{
                    top: "13px",
                    width: "300px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  type="password"
                  className="step3-text-wrapper-3"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <div className="step3-pw-input">
              <div className="step3-div-wrapper">
                {/* <div className="step3-text-wrapper-3">Password</div> */}
                <input
                  style={{
                    top: "13px",
                    width: "300px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  type="password"
                  className="step3-text-wrapper-3"
                  placeholder="Password"
                />
              </div>
            </div>
            <div style={{ top: "0" }} className="step3-email-input">
              <div className="step3-div-wrapper">
                {/* <div className="step3-text-wrapper-3">Email</div> */}
                <input
                  style={{
                    top: "13px",
                    width: "300px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  type="email"
                  className="step3-text-wrapper-3"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div style={{ top: "185px" }} className="step3-avatar">
            <div style={{ top: "0" }} className="step3-text-wrapper-4">
              Select your avatar:
            </div>
            <div
              style={{
                left: "110px",
                top: "40px",
                transform: "rotate(180deg)",
              }}
              className="step3-girl avatar"

            >
              <img className="step3-img" alt="Girl" src={girl} />
            </div>
            <div
              style={{ left: "10px", top: "40px", transform: "rotate(180deg)" }}
              className="step3-boy avatar"
            >
              <img
                style={{ top: "3px", height: "60px" }}

                className="step3-man avatar"
                alt="Man"
                src={boy}
              />
            </div>
          </div>
        </div>
        <img
          style={{ top: "17px" }}
          className="step3-image-removebg"
          alt="Image removebg"
          src={cartPersonSignUp}
        />
      </div>
      <div style={{ left: "465px" }} className="step3-steps">
        <img
          style={{ width: "300px", transform: "rotate(180deg)" }}
          src={Step3SignUp}
          alt=""
        />
      </div>
    </div>
  );
};

export default SignUpStep3;
