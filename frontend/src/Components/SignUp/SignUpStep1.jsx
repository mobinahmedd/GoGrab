import React from "react";
import sellerIcon from "../../Assets/sellerIcon.png";
import buyerIcon from "../../Assets/buyerIcon.png";
import blueWave from "../../Assets/blueWaveSignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import Step1SignUp from "../../Assets/step1SignUp.png";

const SignUpStep1 = (props) => {
  return (
    <div className="signup-overlap-2">
      <div className="signup-overlap-3">
        <img className="signup-rectangle" alt="Rectangle" src={blueWave} />
        <div className="signup-text-wrapper-3">Select your role:</div>
        <div className="signup-text">
          <div className="signup-role">
            <button
              className="signup-buyer"
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              type="button"
              name="buyer"
              onClick={props.handleRoleChange}
            >
              <div className="signup-overlap-group-2">
                <div style={{ left: "22px" }} className="signup-text-wrapper-4">
                  Buyer
                </div>
                <div
                  style={
                    props.selectedRole === "buyer"
                      ? { borderColor: "green", opacity: "1" }
                      : { borderColor: "#14476c" }
                  }
                  className="signup-rectangle-2"
                />
                <img
                  style={{
                    left: "29px",
                    width: "38px",
                    height: "35px",
                  }}
                  className="signup-mask-group"
                  alt="Mask group"
                  src={buyerIcon}
                />
              </div>
            </button>
            <button
              className="signup-seller"
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              type="button"
              name="seller"
              onClick={props.handleRoleChange}
            >
              <div className="signup-overlap-group-2">
                <div style={{ left: "21px" }} className="signup-text-wrapper-5">
                  Seller
                </div>
                <div
                  style={
                    props.selectedRole === "seller"
                      ? { borderColor: "green", opacity: "1" }
                      : { borderColor: "#14476c" }
                  }
                  className="signup-rectangle-2"
                />
                <img
                  style={{ left: "29px" }}
                  className="signup-brands-sellcast"
                  alt="Brands sellcast"
                  src={sellerIcon}
                />
              </div>
            </button>
          </div>
          <div className="signup-input">
            <div style={{ top: "70px" }} className="signup-un-input">
              <div className="signup-div-wrapper">
                {/* <div className="signup-text-wrapper-6">Username</div> */}
                <input
                  style={{
                    width: "315px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  value={props.formData.username}
                  name="username"
                  className="signup-text-wrapper-7"
                  placeholder="Username"
                  onChange={props.handleInputChange}
                />
              </div>
            </div>
            <div style={{ top: "5px" }} className="signup-fn-input">
              <div className="signup-overlap-4">
                <input
                  style={{
                    width: "140px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  value={props.formData.name.firstName}
                  name="name.firstName"
                  className="signup-text-wrapper-7"
                  placeholder="First Name"
                  onChange={props.handleInputChange}
                />
              </div>
            </div>
            <div style={{ top: "5px" }} className="signup-ln-input">
              <div className="signup-overlap-5">
                {/* <div className="signup-text-wrapper-8">Last name</div> */}
                <input
                  style={{
                    width: "140px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  value={props.formData.name.lastName}
                  name="name.lastName"
                  className="signup-text-wrapper-7"
                  placeholder="Last Name"
                  onChange={props.handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="signup-image-removebg"
          alt="Image removebg"
          src={cartPersonSignUp}
        />
      </div>
      <div className="signup-steps">
        <img src={Step1SignUp} alt="" />
      </div>
    </div>
  );
};

export default SignUpStep1;
