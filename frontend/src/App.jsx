import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ForgotPassword from "./Components/Login/ForgotPassword";
import OTP from "./Components/SignUp/OTP";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
