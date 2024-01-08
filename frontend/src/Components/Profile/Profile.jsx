import React from "react";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import profileIcon from "../../Assets/profile.png";
import favouriteIcon from "../../Assets/favourites.png";
import logout from "../../Assets/logout.png";
import cartIcon from "../../Assets/prime_shopping-cart.png";
import searchIcon from "../../Assets/search-icon.png";
import logo from "../../Assets/logo.png";
import Sponser1 from "../../Assets/Breitling.png";
import Spnoser2 from "../../Assets/Ralph-Lauren.png";
import Spnoser3 from "../../Assets/chanel.png";
import Spnoser4 from "../../Assets/mighty-furnitures.png";
import Spnoser5 from "../../Assets/hermes-paris.png";
import boy from "../../Assets/boy.png";
import girl from "../../Assets/girl.png";
import footerDivider from "../../Assets/footer-divider.png";
import footerSearchIcon from "../../Assets/footer-search.png";
import fbIcon from "../../Assets/facebook.png";
import twitterIcon from "../../Assets/twitter.png";
import messengerIcon from "../../Assets/messenger.png";
import logoDark from "../../Assets/logo-dark.png";
import blackFriday from "../../Assets/black-friday.png";
import profileAvatar from "../../Assets/profile-avatar.png";
import deleteAvatar from "../../Assets/delete-avatar.png";
import UserInfoTab from "./UserInfoTab";
import PasswordTab from "./PasswordTab";
import { NotificationContext } from "../../NotificationContext";
import { mainServerInstance } from "../../Axios/axiosInstance";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Profile = () => {
  const navigate = useNavigate();
  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const [open, setOpen] = React.useState(false);

  const [userData, setUserData] = React.useState({
    username: "",
    name: {
      firstName: "",
      lastName: "",
    },
    address: {
      floor: "",
      houseNo: "",
      street: "",
      area: "",
      city: "",
      country: "",
      zipCode: "",
    },
    password: "",
    role: "buyer",
    contact: {
      email: "",
      phoneNumber: [],
    },
    avatar: "",
  });

  React.useEffect(() => {
    getUser();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUser = async () => {
    try {
      const response = await mainServerInstance.get("/api/users/getUser");

      console.log("User:", response.data[0]);
      setUserData(response.data[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const handleLogout = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    navigate("/");
  };
  return (
    <div className="profile-frame">
      <div className="profile-div">
        <div style={{ background: "#22242A" }} className="profile-footer">
          <div className="profile-menu-header">
            <div className="profile-text-wrapper">About</div>
            <div className="profile-text-wrapper">Categories</div>
            <div className="profile-text-wrapper">Products</div>
            <div className="profile-text-wrapper">Profile</div>
            <div className="profile-text-wrapper">Contact us</div>
          </div>
          <div className="profile-menu-footer">
            <div className="profile-text-wrapper-2">Privacy Policy</div>
            <div className="profile-text-wrapper-2">Terms of Use</div>
            <div className="profile-text-wrapper-2">Sales and Refunds</div>
            <div className="profile-text-wrapper-2">Legal</div>
            <div className="profile-text-wrapper-2">Site Map</div>
          </div>
          <div className="profile-text-wrapper-3">© 2023 GoGrab</div>
          <img className="profile-social" alt="Social" src={fbIcon} />
          <img className="profile-img" alt="Social" src={twitterIcon} />
          <img className="profile-social-2" alt="Social" src={messengerIcon} />
          <div className="profile-social-3" />
          <img className="profile-line" alt="Line" src={footerDivider} />
          <div className="profile-overlap-group">
            <div className="profile-search">
              <input
                className="profile-input"
                placeholder="Search.."
                type="text"
              />
            </div>
            <img
              style={{ cursor: "pointer" }}
              title="Search"
              className="profile-iconamoon-search"
              alt="Iconamoon search"
              src={footerSearchIcon}
            />
          </div>
          <img className="profile-logo" alt="Logo" src={logoDark} />
        </div>
        <div className="profile-colaborators">
          <img
            className="profile-download-removebg"
            alt="Download removebg"
            src={Spnoser4}
          />
          <img
            className="profile-chanel-removebg"
            alt="Chanel removebg"
            src={Spnoser3}
          />
          <img
            className="profile-ralph-lauren-symbol"
            alt="Ralph lauren symbol"
            src={Spnoser2}
          />
          <img
            className="profile-breitling-logo"
            alt="Breitling logo"
            src={Sponser1}
          />
          <img
            className="profile-png-transparent"
            alt="Png transparent"
            src={Spnoser5}
          />
        </div>
        <div className="profile-overlap">
          <img
            className="profile-black-friday"
            alt="Black friday"
            src={blackFriday}
          />
          <div className="profile-profile">
            <UserInfoTab in={true} />
            {/* <PasswordTab in={true} /> */}
            <div className="profile-div-3">
              <div className="profile-text-wrapper-19">
                {userData.name.firstName + " " + userData.name.lastName}
              </div>
              <div
                style={{
                  backgroundImage: `url(${
                    userData.avatar === "boy" ? boy : girl
                  })`,
                }}
                className="profile-material-symbols-wrapper"
              >
                <img
                  style={{ cursor: "pointer" }}
                  title="Remove Avatar"
                  className="profile-material-symbols"
                  alt="Material symbols"
                  src={deleteAvatar}
                />
              </div>
              <button className="profile-overlap-group-wrapper">
                <div
                  style={{ cursor: "pointer" }}
                  className="profile-overlap-group-2"
                >
                  <div className="profile-text-wrapper-20">Change Avatar</div>
                </div>
              </button>
              <div className="profile-desc">
                <div className="profile-overlap-15">
                  <p className="profile-p">
                    Upload a new avatar. large image will be resized
                    automatically.
                  </p>
                  <p className="profile-maximum-upload-size">
                    <span className="profile-span">Maximum upload size is</span>
                    <span className="profile-text-wrapper-21"> 1 Mb</span>
                  </p>
                </div>
              </div>
              <p className="profile-member-since">
                <span className="profile-span">Member since: </span>
                <span className="profile-text-wrapper-22">
                  25 December 2023
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <img
          onClick={handleLogout}
          className="profile-logout"
          src={logout}
          alt=""
        /> */}

        <Button className="profile-logout" onClick={handleClickOpen}>
          <img src={logout} alt="" />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Logout?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You will be asked to enter username and Password to login again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleLogout} autoFocus>
              Logout
            </Button>
          </DialogActions>
        </Dialog>

        <div className="profile-nav-bar-wrapper">
          <div className="profile-nav-bar">
            <Link to="/dashboard" className="profile-logo-2">
              <img alt="Logo" src={logo} />
            </Link>
            <Link to="/cart" className="profile-prime-shopping-cart">
              <img
                style={{ cursor: "pointer" }}
                title="Cart"
                alt="Prime shopping cart"
                src={cartIcon}
              />
            </Link>
            <div className="profile-search-button">
              <input
                className="profile-overlap-group-3"
                placeholder="Search for 1000+ of available products"
                type="text"
              />
              <div className="profile-search-icon-wrapper">
                <img
                  className="profile-search-icon"
                  alt="Search icon"
                  src={searchIcon}
                  title="Search"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            {/* <div className="profile-search-button">
              <div className="profile-overlap-group-3">
                <p className="profile-text-wrapper-23">
                  Search for 1000+ of available products
                </p>
                <div className="profile-search-icon-wrapper">
                  <img
                    className="profile-search-icon"
                    alt="Search icon"
                    src={searchIcon}
                  />
                </div>
              </div>
            </div> */}
            <img
              style={{ cursor: "pointer" }}
              title="Favourites"
              className="profile-favourites"
              alt="Favourites"
              src={favouriteIcon}
            />
            <img
              style={{ cursor: "pointer" }}
              title="Profile"
              className="profile-profile-2"
              alt="Profile"
              src={profileIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
