import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
// import NewDashboard from "../src/Components/Dashboards/NewDashboard";
import Dashboard from "../src/Components/Dashboards/Dashboard";
// import Login from "./Components/Login/Login";
import Cart from "../src/Components/Cart/Cart";
import Profile from "../src/Components/Profile/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// root.render(<Dashboard />);
// root.render(<Cart />);
root.render(<Profile />);
