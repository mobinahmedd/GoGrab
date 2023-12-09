import React from "react";
import "./SignUp.css";
import logoBlack from "../../Assets/logoBlack.png";
import previous from "../../Assets/previous.png";
import next from "../../Assets/next.png";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";
import OTP from "./OTP";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = React.useState("buyer");
  const [step, setStep] = React.useState(4);

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
          {/*  */}
          <div className="signup-overlap-group-wrapper">
            {step == 1 ? (
              <SignUpStep1
                selectedRole={selectedRole}
                handleRoleChange={handleRoleChange}
              />
            ) : step == 2 ? (
              <SignUpStep2 />
            ) : step == 3 ? (
              <SignUpStep3 />
            ) : (
              <OTP />
            )}
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
