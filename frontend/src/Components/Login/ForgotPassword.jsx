import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import blueWave from "../../Assets/blueWave.png";
import cartPerson from "../../Assets/cartPerson.png";
import logoBlack from "../../Assets/logoBlack.png";

const ForgotPassword = () => {
  return (
    <div className="fp-desktop">
      <div className="fp-overlap-wrapper">
        <div className="fp-overlap">
          <div className="fp-background">
            <div className="fp-overlap-group">
              <div className="fp-ellipse" />
              <div className="fp-div" />
              <div className="fp-BG" />
            </div>
          </div>
          <div className="fp-frame">
            <Link
              to="/"
              className="fp-text-wrapper"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
          </div>
          <div className="fp-overlap-group-wrapper">
            <div className="fp-overlap-2">
              <div className="fp-overlap-3">
                <img className="fp-rectangle" alt="Rectangle" src={blueWave} />
                <img
                  className="fp-image-removebg"
                  alt="Image removebg"
                  src={cartPerson}
                />
              </div>
              <div className="fp-text">
                <p className="fp-p">
                  Enter your email and we’ll send you an OTP on that email to
                  verify your identity. The OTP will expire in 2 minutes.
                </p>
                <div className="fp-text-wrapper-2">EMAIL VERIFICATION</div>
                <div className="fp-email-input">
                  <div className="fp-div-wrapper">
                    <input className="fp-text-wrapper-3" placeholder="Email" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="fp-button">
            <div className="fp-overlap-4">
              <div className="fp-text-wrapper-4">GET OTP</div>
            </div>
          </button>
          <Link
            to="/signup"
            className="fp-text-wrapper-5"
            style={{ textDecoration: "none" }}
          >
            Sign up
          </Link>
          <div className="fp-down-text">
            <div className="fp-text-wrapper-6">New to goGrab?</div>
            <Link to="/signup" className="fp-text-wrapper-7">
              Create account
            </Link>
          </div>
          <img className="fp-logo" alt="Logo" src={logoBlack} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
