import React from "react";
import "./SignUpStep3.css";
import blueWave from "../../Assets/blueWaveSignUp.png";
import Step3SignUp from "../../Assets/step3SignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import girl from "../../Assets/girl.png";
import boy from "../../Assets/boy.png";
// import { getBase64FromImageUrl } from "../../ImageConversion/imageConversion";

const SignUpStep3 = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showCPassword, setShowCPassword] = React.useState(false);
  const [avatar, setAvatar] = React.useState("boy");

  React.useEffect(() => {
    props.handleAvatarChange(avatar);
  }, []);

  const handleAvatarChange = (event) => {
    const name = event.currentTarget.getAttribute("name");
    setAvatar(name);
    props.handleAvatarChange(name);
  };

  console.log("avatar: ", avatar, "data: ", props.formData.avatar);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleShowCPassword = () => {
    setShowCPassword((prev) => !prev);
  };
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
                <button
                  style={{
                    left: "305px",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    zIndex: "1000",
                    width: "fit-content",
                    fontSize: "13px",
                  }}
                  onClick={toggleShowCPassword}
                  className="step3-text-wrapper-3"
                >
                  {showCPassword ? "Hide" : "Show"}
                </button>{" "}
                <input
                  style={{
                    top: "13px",
                    width: "300px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "black",
                  }}
                  type={showCPassword ? "text" : "password"}
                  className="step3-text-wrapper-3"
                  value={props.confirmPw}
                  placeholder="Confirm password"
                  onChange={props.handleConfirmPassword}
                />
              </div>
            </div>
            <div className="step3-pw-input">
              <div className="step3-div-wrapper">
                <button
                  style={{
                    left: "305px",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    zIndex: "1000",
                    width: "fit-content",
                    fontSize: "13px",
                  }}
                  onClick={toggleShowPassword}
                  className="step3-text-wrapper-3"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                <input
                  style={{
                    top: "13px",
                    width: "300px",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  type={showPassword ? "text" : "password"}
                  className="step3-text-wrapper-3"
                  placeholder="Password"
                  name="password"
                  value={props.formData.password}
                  onChange={props.handleInputChange}
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
                  name="contact.email"
                  value={props.formData.contact.email}
                  onChange={props.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div style={{ top: "185px" }} className="step3-avatar">
            <div style={{ top: "0" }} className="step3-text-wrapper-4">
              Select your avatar:
            </div>
            <button
              style={{
                backgroundColor: "transparent",
                left: "110px",
                top: "40px",
                transform: "rotate(180deg)",
                ...(avatar === "girl" ? { borderColor: "green" } : {}),
              }}
              className="step3-girl avatar"
              name="girl"
              onClick={(event) => handleAvatarChange(event)}
            >
              <img className="step3-img" alt="Girl" src={girl} />
            </button>
            <button
              style={{
                left: "10px",
                top: "40px",
                transform: "rotate(180deg)",
                backgroundColor: "transparent",
                ...(avatar === "boy" ? { borderColor: "green" } : {}),
              }}
              className="step3-boy avatar"
              name="boy"
              onClick={(event) => handleAvatarChange(event)}
            >
              <img
                style={{ top: "3px", height: "60px" }}
                className="step3-man"
                alt="Man"
                src={boy}
              />
            </button>
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
