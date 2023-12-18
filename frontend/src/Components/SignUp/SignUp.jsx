import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import logoBlack from "../../Assets/logoBlack.png";
import previous from "../../Assets/previous.png";
import next from "../../Assets/next.png";
import SignUpStep1 from "./SignUpStep1";
import SignUpStep2 from "./SignUpStep2";
import SignUpStep3 from "./SignUpStep3";
import OTP from "./OTP";
import { NotificationContext } from "../../NotificationContext";

const SignUp = () => {
  const [selectedRole, setSelectedRole] = React.useState("buyer");
  const [step, setStep] = React.useState(1);
  const { notification, setNotification } =
    React.useContext(NotificationContext);

  const [formData, setFormData] = React.useState({
    username: "",
    name: {
      firstName: "",
      lastName: "",
    },
    address: {
      floor: "2nd",
      houseNo: "G-87",
      area: "Defence View Phase II",
      city: "karachi",
      country: "Pakistan",
      zipCode: "123456",
    },
    password: "mobin123",
    role: "buyer",
    contact: {
      email: "mobinahmed4321@gmail.com",
      phoneNumber: ["03425176865", "03365973345"],
    },
  });

  const nameChecker = (name) => {
    const nameFormat = /^[A-Za-z\s]+$/;
    if (nameFormat.test(name)) {
      return true;
    } else {
      return false;
    }
  };
  const usernameChecker = (username) => {
    const nameFormat = /^[a-zA-Z0-9_.]{3,20}$/;
    if (nameFormat.test(username)) {
      return true;
    } else {
      return false;
    }
  };

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
    console.log("mobin", notification);
  };
  const handleRoleChange = (event) => {
    const value = event.currentTarget.getAttribute("value");
    setSelectedRole(value);
  };

  const handleStep = (event) => {
    if (step === 1) {
      if (
        formData.name.firstName === "" ||
        formData.name.lastName === "" ||
        formData.username === ""
      ) {
        showMessage("Fill all the fields", "error");
        return;
      } else if (
        !nameChecker(formData.name.firstName) ||
        !nameChecker(formData.name.lastName)
      ) {
        showMessage("Name fields can only contain alphabets.", "error");
        return;
      } else if (!usernameChecker(formData.username)) {
        showMessage(
          "Name fields can only contain alphabets, numbers, underscore(_) and period(.).",
          "error"
        );
        return;
      }
    }
    const id = event.currentTarget.getAttribute("id");
    if (id === "next") {
      step <= 3 && setStep((prev) => ++prev);
    }
    if (id === "previous") {
      step > 1 && setStep((prev) => --prev);
    }
  };

  const handleInputChange = (event) => {
    // const { name, value } = event.target;
    // setFormData((prev) => {
    //   return {
    //     ...prev,
    //     [name]: value,
    //   };
    // });
    const { name, value } = event.target;
    console.log(name, value);
    const [parentKey, childKey] = name.split(".");

    setFormData((prev) => {
      if (childKey) {
        return {
          ...prev,
          [parentKey]: {
            ...prev[parentKey],
            [childKey]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };
  console.log("data :", formData);

  return (
    <>
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
              <Link
                to="/signup"
                className="signup-text-wrapper"
                style={{ textDecoration: "none" }}
              >
                Sign up
              </Link>
            </div>
            <Link
              to="/"
              className="signup-text-wrapper-2"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
            {/*  */}
            <div className="signup-overlap-group-wrapper">
              {step === 1 ? (
                <SignUpStep1
                  formData={formData}
                  handleInputChange={handleInputChange}
                  selectedRole={selectedRole}
                  handleRoleChange={handleRoleChange}
                />
              ) : step === 2 ? (
                <SignUpStep2 formData={formData} />
              ) : step === 3 ? (
                <SignUpStep3 formData={formData} />
              ) : (
                <OTP />
              )}
            </div>
            <div className="signup-buttons">
              <div
                onClick={handleStep}
                id="previous"
                className="signup-previous-button"
              >
                <img
                  className="signup-flat-color-icons"
                  alt="Flat color icons"
                  src={previous}
                />
              </div>
              <div
                onClick={handleStep}
                id="next"
                className="signup-next-button"
              >
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
              <Link to="/" className="signup-text-wrapper-13">
                Login
              </Link>
            </div>
            <img className="signup-logo" alt="Logo" src={logoBlack} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
