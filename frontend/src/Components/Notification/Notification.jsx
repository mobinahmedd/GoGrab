// import React, { useState, useEffect } from "react";
// import "./Notification.css";
// import { NotificationContext } from "../../NotificationContext";

// const Notification = () => {
//   const { show, message, type } =
//     React.useContext(NotificationContext).notification;
//   console.log(show);
//   const [isVisible, setIsVisible] = useState(show);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false);
//     }, 5000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   const getColor = () => {
//     return type === "success" ? "rgb(40, 167, 69)" : "#dc3545";
//   };

//   return (
//     <>
//       {isVisible && (
//         <div
//           className={`notification ${type}`}
//           style={{
//             backgroundColor: "#f8d7da",
//             // border: `1px solid ${getColor()}`,
//           }}
//         >
//           <div className="message">{message}</div>
//           <div className="progress-bar">
//             <div
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: getColor(),
//                 animation: "progress 5s linear forwards",
//               }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Notification;

import React, { useEffect } from "react";
import "./Notification.css";
import { NotificationContext } from "../../NotificationContext";

const Notification = () => {
  const { notification, setNotification } =
    React.useContext(NotificationContext);
  const { show, message, type } = notification;

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        // Hide the notification after 5 seconds
        setNotification({ ...notification, show: false });
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show, notification]);

  const getColor = () => {
    return type === "success" ? "rgb(40, 167, 69)" : "#dc3545";
  };

  return (
    <>
      {show && (
        <div
          className={`notification ${type}`}
          style={{
            backgroundColor: "rgb(255,255,255)",
            // backgroundColor: getColor(),
          }}
        >
          <div className="message">{message}</div>
          <div className="progress-bar">
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: getColor(),
                animation: "progress 3s linear forwards",
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
