import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import Dashboard from "../src/Components/Dashboards/Dashboard";
// import Login from "./Components/Login/Login";
import Cart from "../src/Components/Cart/Cart";
import Profile from "../src/Components/Profile/Profile";
import Product from "../src/Components/Product/Product";
import AddProduct from "../src/Components/Seller/AddProduct";
import SellerDashboard from "../src/Components/Seller/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(<AddProduct />);
// root.render(<SellerDashboard />);
// root.render(<Cart />);
// root.render(<Profile />);
// root.render(<Product />);
