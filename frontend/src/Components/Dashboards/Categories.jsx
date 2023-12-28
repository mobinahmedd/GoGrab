import React from "react";
import "./Categories.css";

const Categories = (props) => {
  const colors = [
    "#222222",
    "#F42C37",
    "#FDBC0C",
    "#FD85A1",
    "#133449",
    "#1279FE",
  ];
  return (
    <div
      style={{ backgroundColor: colors[2] }}
      onClick={() => props.fetchProductsByCategory(props.id)}
      className="cat-frame"
    >
      <div className="cat-overlap-group">
        <div
          style={{ lineHeight: "33px", textTransform: "uppercase" }}
          className="cat-text-wrapper"
        >
          {props.name}
        </div>
        {/* <img className="cat-element" alt="Element" src={props.image} /> */}
        <img
          className="cat-element"
          alt="Element"
          src={`data:image/png;base64,${props.image}`}
        />
      </div>
    </div>
  );
};

export default Categories;
