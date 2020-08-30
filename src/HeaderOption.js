import React from "react";
import "./HeaderOption.css";

const HeaderOption = ({ title, selected, onClick, id }) => {
  return (
    <div
      role="button"
      className={`headerOption ${selected && "selected"}`}
      onClick={(e) => onClick(id)}
      tabIndex="0"
    >
      <p>{title}</p>
    </div>
  );
};

export default HeaderOption;
