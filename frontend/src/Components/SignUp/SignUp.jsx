import React from "react";
import "./SignUp.css";
import sellerIcon from "../../Assets/sellerIcon.png";
import buyerIcon from "../../Assets/buyerIcon.png";

const SignUp = () => {
  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="overlap-group">
              <div className="ellipse" />
              <div className="div" />
              <div className="BG" />
            </div>
          </div>
          <div className="frame">
            <div className="text-wrapper">Sign up</div>
          </div>
          <div className="text-wrapper-2">Login</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="overlap-3">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="rectangle-22.png"
                />
                <div className="text">
                  <div className="role">
                    <div className="text-wrapper-3">Select your role:</div>
                    <div className="buyer">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-4">Buyer</div>
                        <div className="rectangle-2" />
                        <img
                          className="mask-group"
                          alt="Mask group"
                          src="mask-group.png"
                        />
                      </div>
                    </div>
                    <div className="seller">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-5">Seller</div>
                        <div className="rectangle-2" />
                        <img
                          className="brands-sellcast"
                          alt="Brands sellcast"
                          src="fa6-brands-sellcast.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input">
                    <div className="un-input">
                      <div className="div-wrapper">
                        <div className="text-wrapper-6">Username</div>
                      </div>
                    </div>
                    <div className="fn-input">
                      <div className="overlap-4">
                        <div className="text-wrapper-7">First name</div>
                      </div>
                    </div>
                    <div className="ln-input">
                      <div className="overlap-5">
                        <div className="text-wrapper-8">Last name</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="image-removebg"
                  alt="Image removebg"
                  src="image-removebg-preview-2.png"
                />
              </div>
              <div className="steps">
                <img className="arrow" alt="Arrow" src="arrow-1.svg" />
                <img className="img" alt="Arrow" src="arrow-2.svg" />
                <div className="element">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-9">2</div>
                  </div>
                </div>
                <div className="element-2">
                  <div className="overlap-6">
                    <div className="text-wrapper-10">3</div>
                  </div>
                </div>
                <div className="element-3">
                  <div className="overlap-7">
                    <div className="text-wrapper-11">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="previous-button">
              <img
                className="flat-color-icons"
                alt="Flat color icons"
                src="flat-color-icons-next.svg"
              />
            </div>
            <div className="next-button">
              <img
                className="flat-color-icons"
                alt="Flat color icons"
                src="flat-color-icons-next-2.svg"
              />
            </div>
          </div>
          <div className="downtext">
            <div className="text-wrapper-12">Already have an account?</div>
            <div className="text-wrapper-13">Login</div>
          </div>
          <img className="logo" alt="Logo" src="logo.png" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
