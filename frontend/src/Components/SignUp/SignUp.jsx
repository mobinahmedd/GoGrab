import React from "react";
import "./SignUp.css";
import sellerIcon from "../../Assets/sellerIcon.png";
import buyerIcon from "../../Assets/buyerIcon.png";
import logoBlack from "../../Assets/logoBlack.png";
import previous from "../../Assets/previous.png";
import next from "../../Assets/next.png";
import blueWave from "../../Assets/blueWaveSignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import Step1SignUp from "../../Assets/step1SignUp.png";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = React.useState("buyer");

  const handleRoleChange = (event) => {
    const value = event.currentTarget.getAttribute("value");
    setSelectedRole(value);
  };

  console.log(selectedRole);
  return (
    <div className="signup-desktop">
      <div className="signup-overlap-wrapper">
        <div className="signup-overlap">
          <div className="signup-background">
            <div className="signup-overlap-group">
              <div className="signup-ellipse" />
              <div className="signup-div" />
              <div className="signup-BG" />
            </div>
          </div>
          <div className="signup-frame">
            <div className="signup-text-wrapper">Sign up</div>
          </div>
          <div className="signup-text-wrapper-2">Login</div>
          <div className="signup-overlap-group-wrapper">
            <div className="signup-overlap-2">
              <div className="signup-overlap-3">
                <img
                  className="signup-rectangle"
                  alt="Rectangle"
                  src={blueWave}
                />
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
                      value="buyer"
                      onClick={handleRoleChange}
                    >
                      <div className="signup-overlap-group-2">
                        <div
                          style={{ left: "22px" }}
                          className="signup-text-wrapper-4"
                        >
                          Buyer
                        </div>
                        <div
                          style={
                            selectedRole === "buyer"
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
                      value="seller"
                      onClick={handleRoleChange}
                    >
                      <div className="signup-overlap-group-2">
                        <div
                          style={{ left: "21px" }}
                          className="signup-text-wrapper-5"
                        >
                          Seller
                        </div>
                        <div
                          style={
                            selectedRole === "seller"
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
                    <div className="signup-un-input">
                      <div className="signup-div-wrapper">
                        {/* <div className="signup-text-wrapper-6">Username</div> */}
                        <input
                          style={{
                            width: "315px",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          className="signup-text-wrapper-7"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="signup-fn-input">
                      <div className="signup-overlap-4">
                        {/* <div className="signup-text-wrapper-7">First name</div> */}
                        <input
                          style={{
                            width: "140px",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          className="signup-text-wrapper-7"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="signup-ln-input">
                      <div className="signup-overlap-5">
                        {/* <div className="signup-text-wrapper-8">Last name</div> */}
                        <input
                          style={{
                            width: "140px",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                          className="signup-text-wrapper-7"
                          placeholder="Last Name"
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
          </div>
          <div className="signup-buttons">
            <div className="signup-previous-button">
              <img
                className="signup-flat-color-icons"
                alt="Flat color icons"
                src={previous}
              />
            </div>
            <div className="signup-next-button">
              <img
                className="signup-flat-color-icons"
                alt="Flat color icons"
                src={next}
              />
            </div>
          </div>
          <div className="signup-downtext">
            <div className="signup-text-wrapper-12">
              Already have an account?
            </div>
            <div className="signup-text-wrapper-13">Login</div>
          </div>
          <img className="signup-logo" alt="Logo" src={logoBlack} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
