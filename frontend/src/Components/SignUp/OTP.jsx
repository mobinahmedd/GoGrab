import React from "react";
import "./OTP.css";
import blueWave from "../../Assets/blueWaveSignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import otpStep from "../../Assets/otpStep.png";

const OTP = () => {
  return (
    <div className="overlap-2">
      <div className="overlap-3">
        <img
          style={{ top: "-10px" }}
          className="rectangle"
          alt="Rectangle"
          src={blueWave}
        />
        <img
          style={{ top: "20px" }}
          className="image-removebg"
          alt="Image removebg"
          src={cartPersonSignUp}
        />
      </div>
      <div className="text">
        <div className="input">
          <input className="code-input otp-input" />
          <input className="code-input-2 otp-input" />
          <input className="code-input-3 otp-input" />
          <input className="code-input-4 otp-input" />
        </div>
        <p className="p">
          A verification code has been to your email. Please verify it
        </p>
        <div className="OTP-dwon-text">
          <div className="text-wrapper-3">Re-send OTP</div>
          <div className="text-wrapper-4">Didn’t receive the code?</div>
        </div>
        <div className="text-wrapper-5">OTP VERIFICATION</div>
      </div>
      <div className="step2-steps">
        <img style={{ width: "300px" }} src={otpStep} alt="" />
      </div>
    </div>
  );
};

export default OTP;
