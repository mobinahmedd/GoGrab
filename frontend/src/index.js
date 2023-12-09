import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ForgotPassword from "./Components/Login/ForgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <ForgotPassword />
    </React.StrictMode>
  </>
);
