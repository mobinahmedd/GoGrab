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
import {
  nameChecker,
  usernameChecker,
  numberFieldChecker,
  houseNumberChecker,
  streetNumberChecker,
} from "../../Validations/validations1";
import {
  areaChecker,
  cityOrCountryChecker,
  phoneNumberChecker,
} from "../../Validations/validations2";

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
      floor: "",
      houseNo: "",
      area: "",
      city: "",
      country: "",
      zipCode: "",
    },
    password: "mobin123",
    role: selectedRole,
    contact: {
      email: "mobinahmed4321@gmail.com",
      phoneNumber: [],
    },
  });

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
    console.log("mobin", notification);
  };

  const handleRoleChange = (event) => {
    const value = event.currentTarget.getAttribute("name");

    setSelectedRole(value);
    setFormData((prev) => {
      return { ...prev, role: value };
    });
  };

  const handleStep = (event) => {
    const id = event.currentTarget.getAttribute("id");
    if (id === "next") {
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
            "Username field can only contain alphabets, numbers, underscore(_) and period(.).",
            "error"
          );
          return;
        }
      } else if (step === 2) {
        if (
          formData.address.houseNo === "" ||
          formData.address.area === "" ||
          formData.address.city === "" ||
          formData.address.country === "" ||
          formData.address.zipCode === "" ||
          formData.contact.phoneNumber === ""
        ) {
          showMessage("Fill all the fields with '*' sign", "error");
          return;
        } else if (
          formData.address.floor &&
          !numberFieldChecker(formData.address.floor)
        ) {
          showMessage("'Floor' Field can only contain numbers", "error");
          return;
        } else if (!houseNumberChecker(formData.address.houseNo)) {
          showMessage("Wrong 'House No.' format.", "error");
          return;
        } else if (
          formData.address.street &&
          !streetNumberChecker(formData.address.street)
        ) {
          showMessage("Wrong 'street number' format", "error");
          return;
        } else if (!areaChecker(formData.address.area)) {
          showMessage("Wrong 'Area' format", "error");
          return;
        } else if (!numberFieldChecker(formData.address.zipCode)) {
          showMessage("'zip code' field can only contain numbers", "error");
          return;
        } else if (!cityOrCountryChecker(formData.address.city)) {
          showMessage("Wrong 'City' format", "error");
          return;
        } else if (!cityOrCountryChecker(formData.address.country)) {
          showMessage("Wrong 'Country' format", "error");
          return;
        } else if (!phoneNumberChecker(formData.contact.phoneNumber)) {
          showMessage("Wrong 'Phone Number' format", "error");
          return;
        }
      }
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
                <SignUpStep2
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              ) : step === 3 ? (
                <SignUpStep3
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
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
