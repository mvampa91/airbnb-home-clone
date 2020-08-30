import React, { useState } from "react";
import HeaderOption from "./HeaderOption";
import "./HeaderOptionList.css";

const HeaderOptionList = ({ options }) => {
  const [selected, setSelected] = useState(1);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <div className="header__center-options">
      {options.map((o) => (
        <HeaderOption
          title={o.title}
          selected={selected === o.id}
          id={o.id}
          key={o.id}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default HeaderOptionList;
