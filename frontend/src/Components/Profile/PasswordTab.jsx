import React from "react";
import "./PasswordTab.css";
import { motion } from "framer-motion";
import UserInfoTab from "./UserInfoTab";
import { NotificationContext } from "../../NotificationContext";
import {
  authServerInstance,
  mainServerInstance,
} from "../../Axios/axiosInstance";

const PasswordTab = () => {
  const [isComponentVisible, setComponentVisibility] = React.useState(true);
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const handleClick = () => {
    setComponentVisibility(false);
  };

  // const [userData, setUserData] = React.useState({
  //   username: "",
  //   name: {
  //     firstName: "",
  //     lastName: "",
  //   },
  //   address: {
  //     floor: "",
  //     houseNo: "",
  //     street: "",
  //     area: "",
  //     city: "",
  //     country: "",
  //     zipCode: "",
  //   },
  //   password: "",
  //   role: "buyer",
  //   contact: {
  //     email: "",
  //     phoneNumber: [],
  //   },
  //   avatar: "",
  // });

  // React.useEffect(() => {
  //   getUser();
  // }, []);

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };

  const handleOldPassword = (event) => {
    const value = event.target.value;
    setOldPassword(value);
  };

  // const getUser = async () => {
  //   try {
  //     const response = await mainServerInstance.get("/api/users/getUser");

  //     console.log("User:", response.data[0]);
  //     setUserData(response.data[0]);
  //     setUserData((prev) => {
  //       return { ...prev, password: "" };
  //     });
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };
  // console.log(oldPassword);
  // console.log(userData);

  const updatePassword = async () => {
    const isOldPasswordCorrect = await checkOldPassword();
    if (isOldPasswordCorrect) {
      try {
        const response = await authServerInstance.patch(
          "/api/auth/updatePassword",
          { newPassword }
        );
        showMessage(response.data.message, "success");
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    } else {
      showMessage("Incorrect Password", "error");
    }
  };

  const checkOldPassword = async () => {
    try {
      const response = await authServerInstance.post(
        "/api/auth/verify-oldPassword",
        { oldPassword }
      );
      if (response.status === 200) {
        return true;
      } else {
        showMessage(response.data.message, "success");
        return false;
      }
    } catch (error) {
      if (error.response.status === 401) {
        return false;
      }
    }
  };

  const handleInputChange = (event) => {
    // const { name,value } = event.target;
    // const [parentKey, childKey] = name.split(".");
    // setUserData((prev) => {
    //   if (childKey) {
    //     return {
    //       ...prev,
    //       [parentKey]: {
    //         ...prev[parentKey],
    //         [childKey]: value,
    //       },
    //     };
    //   } else {
    //     return {
    //       ...prev,
    //       [name]: value,
    //     };
    //   }
    // });
    const { value } = event.target;
    setNewPassword(value);
  };

  return (
    <div>
      {!isComponentVisible && <UserInfoTab />}
      {isComponentVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="profile-passTab-frame"
        >
          {/* ... Your existing component content ... */}
          <div className="profile-passTab-div">
            <div className="profile-passTab-overlap">
              <div className="profile-passTab-rectangle" />
              <div className="profile-passTab-text-wrapper">Edit Profile</div>
              <div
                style={{ cursor: "pointer" }}
                className="profile-passTab-text-wrapper-2"
                onClick={handleClick}
              >
                User info
              </div>
              <div className="profile-passTab-text-wrapper-3">
                Password and Security
              </div>
            </div>
            <div className="profile-passTab-btn">
              <div>
                <input
                  className="profile-passTab-overlap-group"
                  type="text"
                  value={oldPassword}
                  onChange={handleOldPassword}
                />
              </div>
              <div className="profile-passTab-text-wrapper-5">Old Password</div>
            </div>
            <div className="profile-passTab-btn-2">
              <div>
                <input
                  className="profile-passTab-div-wrapper"
                  type="text"
                  name="password"
                  value={newPassword}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-passTab-text-wrapper-6">New Password</div>
            </div>
            <div className="profile-passTab-btn-3">
              <div>
                <input className="profile-passTab-overlap-2" type="text" />
              </div>
              <div className="profile-passTab-text-wrapper-7">
                Confirm New Password
              </div>
            </div>
            <div className="profile-passTab-update-btn">
              <div className="profile-passTab-overlap-3">
                <div
                  onClick={updatePassword}
                  className="profile-passTab-text-wrapper-8"
                >
                  Update Password
                </div>
              </div>
            </div>
            <div className="profile-passTab-text-wrapper-9">
              Forget your Password?
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PasswordTab;
