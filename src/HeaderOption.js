import React from "react";
import { Link } from "react-router-dom";
import "./HeaderOption.css";

const HeaderOption = ({ title, selected, onClick, id, to }) => {
  return (
    <div
      role="button"
      className={`headerOption ${selected && "selected"}`}
      onClick={(e) => onClick(id)}
      tabIndex="0"
    >
      {to ? <Link className="headerOption__link" to={to}><p>{title}</p></Link> : <p>{title}</p>}
    </div>
  );
};

export default HeaderOption;
