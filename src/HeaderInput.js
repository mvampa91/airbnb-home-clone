import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderInput.css";

const HeaderInput = () => {
  return (
    <div className="header__center-input" tabIndex="0">
      <input type="text" placeholder="Inizia la ricerca"></input>
      <SearchIcon
        style={{
          color: "white",
          background: "rgb(255, 56, 92)",
          borderRadius: "100%",
          padding: "0.375em",
          fontSize: "1.1em",
        }}
      />
    </div>
  );
};

export default HeaderInput;
