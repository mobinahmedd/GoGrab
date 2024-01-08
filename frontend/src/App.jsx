import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
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

// const App = () => {
//   const [notification, setNotification] = React.useState({
//     show: false,
//     message: "",
//     type: "",
//   });
//   return (
//     <>
//       <Notification
//         show={notification.show}
//         message={notification.message}
//         type={notification.type}
//       />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/forgotpassword" element={<ForgotPassword />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;

import { NotificationProvider } from "./NotificationContext";

const App = () => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [productId, setProductId] = React.useState("");

  // React.useEffect(() => {
  //   localStorage.setItem("accessToken", "");
  //   localStorage.setItem("refreshToken", "");
  // }, []);

  const handleAuthorization = () => {
    setIsAuthorized(true);
  };

  return (
    <>
      <NotificationProvider>
        <Notification />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login handleAuthorization={handleAuthorization} />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sellerDashboard" element={<SellerDashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route
              path="/product/:productId"
              element={<Product Id={useParams().productId} />}
            />
            {/* {isAuthorized && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product" element={<Product />} />
              </>
            )} */}
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </>
  );
};

export default App;
