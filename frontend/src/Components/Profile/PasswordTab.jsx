import React from "react";
import "./PasswordTab.css";
import { motion } from "framer-motion";
import UserInfoTab from "./UserInfoTab";

const PasswordTab = () => {
  const [isComponentVisible, setComponentVisibility] = React.useState(true);
  const handleClick = () => {
    setComponentVisibility(false);
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
                  placeholder="Karachi"
                  type="text"
                />
              </div>
              <div className="profile-passTab-text-wrapper-5">Old Password</div>
            </div>
            <div className="profile-passTab-btn-2">
              <div>
                <input
                  className="profile-passTab-div-wrapper"
                  placeholder="Karachi"
                  type="text"
                />
              </div>
              <div className="profile-passTab-text-wrapper-6">New Password</div>
            </div>
            <div className="profile-passTab-btn-3">
              <div>
                <input
                  className="profile-passTab-overlap-2"
                  placeholder="New Karachi"
                  type="text"
                />
              </div>
              <div className="profile-passTab-text-wrapper-7">
                Confirm New Password
              </div>
            </div>
            <div className="profile-passTab-update-btn">
              <div className="profile-passTab-overlap-3">
                <div className="profile-passTab-text-wrapper-8">
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
