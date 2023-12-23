// import React from "react";
// import "./OTP.css";
// import blueWave from "../../Assets/blueWaveSignUp.png";
// import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
// import otpStep from "../../Assets/otpStep.png";

// const OTP = () => {
//   return (
//     <div className="overlap-2">
//       <div className="overlap-3">
//         <img
//           style={{ top: "-10px" }}
//           className="rectangle"
//           alt="Rectangle"
//           src={blueWave}
//         />
//         <img
//           style={{ top: "20px" }}
//           className="image-removebg"
//           alt="Image removebg"
//           src={cartPersonSignUp}
//         />
//       </div>
//       <div className="text">
//         <div className="input">
//           <input className="code-input otp-input" />
//           <input className="code-input-2 otp-input" />
//           <input className="code-input-3 otp-input" />
//           <input className="code-input-4 otp-input" />
//         </div>
//         <p className="p">
//           A verification code has been to your email. Please verify it
//         </p>
//         <div className="OTP-dwon-text">
//           <div className="text-wrapper-3">Re-send OTP</div>
//           <div className="text-wrapper-4">Didn’t receive the code?</div>
//         </div>
//         <div className="text-wrapper-5">OTP VERIFICATION</div>
//       </div>
//       <div className="step2-steps">
//         <img style={{ width: "300px" }} src={otpStep} alt="" />
//       </div>
//     </div>
//   );
// };

// export default OTP;

import React, { useRef } from "react";
import { NotificationContext } from "../../NotificationContext";
import axios from "axios";
import "./OTP.css";
import blueWave from "../../Assets/blueWaveSignUp.png";
import cartPersonSignUp from "../../Assets/cartPersonSignUp.png";
import otpStep from "../../Assets/otpStep.png";

const OTP = (props) => {
  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
    // console.log("mobin", notification);
  };
  const handleChange = (index, e) => {
    const input = e.target;
    const value = input.value;

    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    } else if (value.length === 0 && index > 0) {
      inputs[index - 1].current.focus();
    }
    if (e.target.name == "last") {
      props.setOtp(combineValues);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputs[index - 1].current.focus();
    }
  };
  const combineValues = () => {
    const otpValues = inputs.map((input) => input.current.value);
    const finalOTP = otpValues.join("");
    return finalOTP;
  };
  const sendOTP = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        props.formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      showMessage(error.message, "error");
    }
  };

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
          <input
            className="code-input otp-input"
            maxLength="1"
            ref={inputs[0]}
            onChange={(e) => handleChange(0, e)}
            onKeyDown={(e) => handleKeyDown(0, e)}
          />
          <input
            className="code-input-2 otp-input"
            maxLength="1"
            ref={inputs[1]}
            onChange={(e) => handleChange(1, e)}
            onKeyDown={(e) => handleKeyDown(1, e)}
          />
          <input
            className="code-input-3 otp-input"
            maxLength="1"
            ref={inputs[2]}
            onChange={(e) => handleChange(2, e)}
            onKeyDown={(e) => handleKeyDown(2, e)}
          />
          <input
            className="code-input-4 otp-input"
            maxLength="1"
            ref={inputs[3]}
            onChange={(e) => handleChange(3, e)}
            onKeyDown={(e) => handleKeyDown(3, e)}
            name="last"
          />
        </div>
        <p className="p">
          A verification code has been sent to your email. Please verify it
        </p>
        <div className="OTP-dwon-text">
          <div style={{ top: "30px", left: "87px" }} className="text-wrapper-4">
            Remaining Tries:{" "}
            <span style={{ color: "red" }}>{props.attemptsLeft}</span>
          </div>
          <div onClick={sendOTP} className="text-wrapper-3">
            Re-send OTP
          </div>
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
