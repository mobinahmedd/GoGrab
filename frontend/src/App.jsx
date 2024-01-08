import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Dashboard from "./Components/Dashboards/Dashboard";
import SellerDashboard from "./Components/Seller/Dashboard/Dashboard";
import Cart from "./Components/Cart/Cart";
import Profile from "./Components/Profile/Profile";
import Product from "./Components/Product/Product";
import AddProduct from "./Components/Seller/AddProduct";
import OTP from "./Components/SignUp/OTP";
import Notification from "./Components/Notification/Notification";
import UnAuthorized from "./Components/ErrorPages/UnAuthorized";
import { NotificationProvider } from "./NotificationContext";

const App = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const { productId } = useParams();
  const handleAuthorization = () => {
    setIsAuthorized(true);
  };

  return (
    <>
      <NotificationProvider>
        <Notification />
        <BrowserRouter>
          <Routes>
            {/* Unrestricted routes */}
            <Route
              path="/"
              element={<Login handleAuthorization={handleAuthorization} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            {/* Routes available only for authorized users */}
            {!isAuthorized && (
              <Route path="/*" element={<Navigate to="/unauthorized" />} />
            )}
            {isAuthorized && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sellerDashboard" element={<SellerDashboard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addProduct" element={<AddProduct />} />
                <Route
                  path="/product/:productId"
                  element={<Product Id={productId} />}
                />
              </>
            )}

            {/* Unauthorized access */}
            <Route path="/unauthorized" element={<UnAuthorized />} />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </>
  );
};

export default App;
