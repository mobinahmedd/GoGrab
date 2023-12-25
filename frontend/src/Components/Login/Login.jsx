import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
import { NotificationContext } from "../../NotificationContext";
import { authServerInstance } from "../../Axios/axiosInstance";

export const Login = (props) => {
  const [selectedRole, setSelectedRole] = React.useState("buyer");
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    role: "buyer",
  });

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(formData);

  const handleRoleChange = (event) => {
    const value = event.currentTarget.getAttribute("value"); // Access the data-value attribute
    setSelectedRole(value);
    setFormData((prev) => {
      return { ...prev, role: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authServerInstance.post(
        "/api/auth/login",
        formData
      );
      const { accessToken, refreshToken, username } = response.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      showMessage(`Authenticated as ${username}`, "success");
      navigate("/dashboard");
    } catch (error) {
      showMessage("Invalid credentials. Please try again.", "error");
    }
  };

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
          <div style={{ zIndex: "0" }} className="frame">
            <Link
              to="/"
              className="text-wrapper"
              style={{
                textDecoration: "none",
                color: "rgb(190, 190, 190, 1)",
                fontSize: "30px",
                top: "25px",
              }}
            >
              Login
            </Link>
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
                <Link to="/forgotpassword" className="text-wrapper-2">
                  Forget your Password?
                </Link>
                <div className="input">
                  <div className="password">
                    <div style={{ border: "none" }} className="overlap-group-2">
                      <input
                        className="enter-your-password"
                        id="input-1"
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                      <img
                        className="vector"
                        alt="passwordIcon"
                        src={passwordIcon}
                      />
                      <img
                        onClick={toggleShowPassword}
                        className="eye"
                        alt="Eye"
                        src={viewPassword}
                      />
                      {showPassword && (
                        <div onClick={toggleShowPassword} className="hidePw">
                          /
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="email">
                    <div className="overlap-3">
                      <img className="img" alt="emailIcon" src={emailIcon} />
                      <input
                        className="enter-your-email"
                        id="input-2"
                        placeholder="Enter your Username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
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
            <div onClick={handleSubmit} className="div-wrapper">
              <div className="text-wrapper-7">LOGIN</div>
            </div>
          </button>
          <Link to="/signup" className="text-wrapper-8">
            Sign up
          </Link>
          <div className="down-text">
            <div className="text-wrapper-9">New to GoGrab? </div>
            <Link to="/signup" className="text-wrapper-10">
              {" "}
              Create Account
            </Link>
          </div>
          <img className="logo" alt="logoBlack" src={logoBlack} />
        </div>
      </div>
    </div>
  );
};

export default Login;
