import React from "react";
import ReactDOM from "react-dom/client";
import {} from "./index.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Login /> */}
    <React.StrictMode>
      <SignUp />
    </React.StrictMode>
  </>
);
