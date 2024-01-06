import React from "react";
import "./Profile.css";
import PasswordTab from "./PasswordTab";
import { motion } from "framer-motion";
import { NotificationContext } from "../../NotificationContext";
import { mainServerInstance } from "../../Axios/axiosInstance";

const UserInfoTab = () => {
  const [isComponentVisible, setComponentVisibility] = React.useState(true);
  const handleClick = () => {
    setComponentVisibility(false);
  };

  const { notification, setNotification } =
    React.useContext(NotificationContext);
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

  const showMessage = (message, type) => {
    setNotification({
      show: true,
      message: message,
      type: type,
    });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await mainServerInstance.get("/api/users/getUser");

      console.log("User:", response.data[0]);
      setUserData(response.data[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await mainServerInstance.patch(
        "/api/users/updateUser",
        userData
      );
      response.status === 200 && showMessage("Updated", "success");
    } catch (error) {
      showMessage(error.message, "error");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const [parentKey, childKey] = name.split(".");

    setUserData((prev) => {
      if (childKey) {
        return {
          ...prev,
          [parentKey]: {
            ...prev[parentKey],
            [childKey]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  return (
    <div>
      {!isComponentVisible && <PasswordTab />}
      {isComponentVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="profile-div-2"
        >
          <div className="profile-overlap-2">
            <div className="profile-rectangle" />
            <div className="profile-text-wrapper-4">Edit Profile</div>
            <div className="profile-text-wrapper-5">User info</div>
            <div onClick={handleClick} className="profile-text-wrapper-6">
              Password and Security
            </div>
          </div>
          <div className="profile-btn">
            <div>
              <input
                className="profile-div-wrapper"
                type="text"
                value={userData.name.firstName}
                name="name.firstName"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-8">First Name</div>
          </div>
          <div className="profile-btn-2">
            <input
              className="profile-div-wrapper"
              type="text"
              value={userData.address.area}
              name="address.area"
              onChange={handleInputChange}
            />
            <div className="profile-text-wrapper-8">Area</div>
          </div>
          <div className="profile-btn-3">
            <div>
              <input
                className="profile-overlap-4"
                type="text"
                value={userData.address.city}
                name="address.city"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-8">City</div>
          </div>
          <div className="profile-btn-4">
            <div>
              <input
                className="profile-overlap-5"
                type="text"
                value={userData.name.lastName}
                name="name.lastName"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-8">Last Name</div>
          </div>
          <div className="profile-btn-5">
            <div>
              <input
                className="profile-overlap-6"
                type="text"
                value={userData.address.zipCode}
                name="address.zipCode"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-8">Zip Code</div>
          </div>
          <div className="profile-btn-6">
            <div>
              <input
                className="profile-overlap-7"
                type="text"
                value={userData.address.country}
                name="address.country"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-8">Country</div>
          </div>
          <div className="profile-btn-7">
            <div>
              <input
                className="profile-overlap-8"
                type="text"
                value={userData.address.floor}
                name="address.floor"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-11">Floor</div>
          </div>
          <div className="profile-btn-8">
            <div>
              <input
                className="profile-overlap-9"
                type="text"
                value={userData.address.houseNo}
                name="address.houseNo"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-12">House no</div>
          </div>
          <div className="profile-btn-9">
            <div>
              <input
                className="profile-overlap-10"
                type="text"
                value={userData.address.street}
                name="address.street"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-11">Street</div>
          </div>
          <div className="profile-btn-10">
            <div>
              <input
                style={{
                  backgroundColor: "rgba(131, 131, 131, 0.4)",
                  opacity: "0.8",
                }}
                className="profile-overlap-11"
                type="text"
                value={userData.username}
                name="username"
                onChange={handleInputChange}
                readOnly
              />
            </div>
            <div className="profile-text-wrapper-15">Username</div>
          </div>
          <div className="profile-btn-11">
            <div>
              <input
                className="profile-overlap-12"
                type="text"
                value={userData.contact.phoneNumber}
                name="contact.phoneNumber"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-15">Phone no</div>
          </div>
          <div className="profile-btn-12">
            <div>
              <input
                className="profile-overlap-13"
                type="email"
                value={userData.contact.email}
                name="contact.email"
                onChange={handleInputChange}
              />
            </div>
            <div className="profile-text-wrapper-15">Email</div>
          </div>
          <div className="profile-update-btn">
            <div className="profile-overlap-14">
              <div onClick={updateUser} className="profile-text-wrapper-18">
                Update info
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserInfoTab;
