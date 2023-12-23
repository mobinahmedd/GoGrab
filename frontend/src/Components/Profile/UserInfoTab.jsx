import React from "react";
import "./Profile.css";
import PasswordTab from "./PasswordTab";
import { motion } from "framer-motion";

const UserInfoTab = () => {
  const [isComponentVisible, setComponentVisibility] = React.useState(true);
  const handleClick = () => {
    setComponentVisibility(false);
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
          {/* ... Your existing component content ... */}

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
                placeholder="Adan"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-8">First Name</div>
          </div>
          <div className="profile-btn-2">
            <input
              className="profile-div-wrapper"
              placeholder="Karsaz"
              type="text"
            />
            <div className="profile-text-wrapper-8">Area</div>
          </div>
          <div className="profile-btn-3">
            <div>
              <input
                className="profile-overlap-4"
                placeholder="Karachi"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-8">City</div>
          </div>
          <div className="profile-btn-4">
            <div>
              <input
                className="profile-overlap-5"
                placeholder="Adan"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-8">Last Name</div>
          </div>
          <div className="profile-btn-5">
            <div>
              <input
                className="profile-overlap-6"
                placeholder="79856"
                type="number"
              />
            </div>
            <div className="profile-text-wrapper-8">Zip Code</div>
          </div>
          <div className="profile-btn-6">
            <div>
              <input
                className="profile-overlap-7"
                placeholder="Pakistan"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-8">Country</div>
          </div>
          <div className="profile-btn-7">
            <div>
              <input
                className="profile-overlap-8"
                placeholder="S10"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-11">Floor</div>
          </div>
          <div className="profile-btn-8">
            <div>
              <input
                className="profile-overlap-9"
                placeholder="100th"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-12">House no</div>
          </div>
          <div className="profile-btn-9">
            <div>
              <input
                className="profile-overlap-10"
                placeholder="Hanif SRE"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-11">Street</div>
          </div>
          <div className="profile-btn-10">
            <div>
              <input
                className="profile-overlap-11"
                placeholder="Adan"
                type="text"
              />
            </div>
            <div className="profile-text-wrapper-15">Username</div>
          </div>
          <div className="profile-btn-11">
            <div>
              <input
                className="profile-overlap-12"
                placeholder="03000909990"
                type="number"
              />
            </div>
            <div className="profile-text-wrapper-15">Phone no</div>
          </div>
          <div className="profile-btn-12">
            <div>
              <input
                className="profile-overlap-13"
                placeholder="muhammadadan381@gmail.com"
                type="email"
              />
            </div>
            <div className="profile-text-wrapper-15">Email</div>
          </div>
          <div className="profile-update-btn">
            <div className="profile-overlap-14">
              <div className="profile-text-wrapper-18">Update info</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserInfoTab;
