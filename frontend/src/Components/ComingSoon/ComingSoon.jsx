import React from "react";

const ComingSoon = () => {
  const containerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    color: "#0074D9",
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
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <div style={container}>
      <div style={containerStyle}>
        <div style={emojiStyle}>🕒</div>
        <h1 style={titleStyle}>Coming Soon</h1>
        <p style={messageStyle}>
          Stay tuned! This feature is under construction and will be available
          soon.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
