import React from "react";
import "./Login.css";
import blueWave from "../../Assets/blueWave.png";
import cartPerson from "../../Assets/cartPerson.png";
import adminIcon from "../../Assets/adminIcon.png";
import sellerIcon from "../../Assets/sellerIcon.png";
import buyerIcon from "../../Assets/buyerIcon.png";
import emailIcon from "../../Assets/emailIcon.png";
import passwordIcon from "../../Assets/passwordIcon.png";
import viewPassword from "../../Assets/viewPassword.png";
import logoBlack from "../../Assets/logoBlack.png";

export const Authentication = () => {
  const [selectedRole, setSelectedRole] = React.useState("buyer");

  const handleRoleChange = (event) => {
    const value = event.currentTarget.getAttribute("value"); // Access the data-value attribute
    setSelectedRole(value);
  };

  console.log(selectedRole);
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
            <p className="text-wrapper">Login</p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <img className="rectangle" alt="blueWave" src={blueWave} />
              <img
                className="image-removebg"
                alt="cartPerson"
                src={cartPerson}
              />
              <div className="text">
                <div className="text-wrapper-2">Forget your Password?</div>
                <div className="input">
                  <div className="password">
                    <div className="overlap-group-2">
                      <input
                        className="enter-your-password"
                        id="input-1"
                        placeholder="Enter your password"
                        type="email"
                      />
                      <img
                        className="vector"
                        alt="passwordIcon"
                        src={passwordIcon}
                      />
                      <img className="eye" alt="Eye" src={viewPassword} />
                    </div>
                  </div>
                  <div className="email">
                    <div className="overlap-3">
                      <img className="img" alt="emailIcon" src={emailIcon} />
                      <input
                        className="enter-your-email"
                        id="input-1"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="role">
                  <div className="text-wrapper-3">Select your role:</div>
                  <button
                    type="button"
                    value="buyer"
                    className="buyer"
                    onClick={handleRoleChange}
                  >
                    <div className="overlap-group-3">
                      <div className="text-wrapper-4">Buyer</div>
                      <div
                        style={
                          selectedRole === "buyer"
                            ? { borderColor: "green", opacity: "1" }
                            : { borderColor: "#14476c" }
                        }
                        className="rectangle-2"
                      />
                      <img
                        className="mask-group"
                        alt="buyerIcon"
                        src={buyerIcon}
                      />
                    </div>
                  </button>
                  <button
                    type="radio"
                    value="seller"
                    className="seller"
                    onClick={handleRoleChange}
                  >
                    <div className="overlap-group-3">
                      <div className="text-wrapper-5">Seller</div>
                      <div
                        style={
                          selectedRole === "seller"
                            ? { borderColor: "green", opacity: "1" }
                            : { borderColor: "#14476c" }
                        }
                        className="rectangle-2"
                      />
                      <img
                        className="brands-sellcast"
                        alt="sellerIcon"
                        src={sellerIcon}
                      />
                    </div>
                  </button>
                  <button
                    type="radio"
                    value="admin"
                    className="admin"
                    onClick={handleRoleChange}
                  >
                    <div className="overlap-group-3">
                      <div className="text-wrapper-6">Admin</div>
                      <div
                        style={
                          selectedRole === "admin"
                            ? { borderColor: "green", opacity: "1" }
                            : { borderColor: "#14476c" }
                        }
                        className="rectangle-2"
                      />
                      <img
                        className="clarity"
                        alt="adminIcon"
                        src={adminIcon}
                      />
                    </div>
                  </button>
                </div>
                {/* <div className="role">
                  <div className="text-wrapper-3">Select your role:</div>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="buyer"
                      className="buyer"
                      checked={selectedRole === "buyer"}
                      onChange={handleRoleChange}
                    />
                    Buyer
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="seller"
                      className="seller"
                      checked={selectedRole === "seller"}
                      onChange={handleRoleChange}
                    />
                    Seller
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="role"
                      value="admin"
                      className="admin"
                      checked={selectedRole === "admin"}
                      onChange={handleRoleChange}
                    />
                    Admin
                  </label>

                */}
              </div>
            </div>
          </div>
          <button className="login-button">
            <div className="div-wrapper">
              <div className="text-wrapper-7">LOGIN</div>
            </div>
          </button>
          <div className="text-wrapper-8">Sign up</div>
          <div className="down-text">
            <div className="text-wrapper-9">New to GoGrab? </div>
            <div className="text-wrapper-10"> Create Account</div>
          </div>
          <img className="logo" alt="logoBlack" src={logoBlack} />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
