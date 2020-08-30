import React, { useEffect } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";

import "./Header.css";
import HeaderOptionList from "./HeaderOptionList";
import HeaderInput from "./HeaderInput";

let ticking = false;
const handleScroll = (e) => {
  let last_known_scroll_position = window.scrollY;
  if (!ticking && last_known_scroll_position > 60) {
    window.requestAnimationFrame(() => {
      document.documentElement.dataset.scroll = last_known_scroll_position;
      ticking = false;
    });

    ticking = true;
  } else if (last_known_scroll_position === 0) {
    window.requestAnimationFrame(() => {
      document.documentElement.dataset.scroll = last_known_scroll_position;
      ticking = false;
    });

    ticking = true;
  }
};

const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="header__logo">
        <img
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
        />
      </div>

      <div className="header__center">
        <HeaderOptionList
          options={[
            { title: "Alloggi", id: 1 },
            { title: "Esperienze", id: 2 },
            { title: "Esperienze Online", id: 3 },
          ]}
        />
        <HeaderInput />
      </div>

      <div className="header__right">
        <div className="header__right-action">
          <p>Diventa un Host</p>
        </div>
        <div className="header__right-language">
          <LanguageIcon />
          <ExpandMoreIcon />
        </div>
        <div className="header__right-avatar">
          <MenuIcon style={{ fontSize: "1.2em", marginRight: "0.5em" }} />
          <Avatar
            src="https://a0.muscache.com/im/pictures/user/7648ec62-fbb2-419b-b3e9-b603614710a2.jpg?aki_policy=profile_medium"
            style={{ width: "1.5em", height: "1.5em" }}
          />
        </div>
      </div>
      <div className="header__overlay" />
    </div>
  );
};

export default Header;
