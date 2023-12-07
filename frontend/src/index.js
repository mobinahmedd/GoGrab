import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      {/* <Login /> */}
      <SignUp />
    </React.StrictMode>
  </>
);
