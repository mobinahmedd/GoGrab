import React from "react";

const UnAuthorized = () => {
  const containerStyle = {
    textAlign: "center",

    fontFamily: "Arial, sans-serif",
  };
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  const titleStyle = {
    color: "#FF4136",
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
  };

  const messageStyle = {
    fontSize: "1.2em",
    lineHeight: "1.6",
  };

  const emojiStyle = {
    fontSize: "2em",
    marginBottom: "10px",
  };

  return (
    <div style={container}>
      <div style={containerStyle}>
        <div style={emojiStyle}>🚫</div>
        <h1 style={titleStyle}>UnAuthorized</h1>
        <p style={messageStyle}>
          Sorry, you do not have permission to access this page.
        </p>
      </div>
    </div>
  );
};

export default UnAuthorized;
