import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          'url("https://a0.muscache.com/im/pictures/4b5b2c9e-9d97-4fb7-8826-1529dacb13df.jpg?im_w=1680")',
      }}
    >
      <div className="banner__text">
        <h2>Fai volare l'immaginazione</h2>
        <h4>
          Pianifica un viaggio diverso per scoprire i tesori nascosti vicino a
          te.
        </h4>
        <div className="banner__link">
          <h4>Esplora i dintorni</h4>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Banner;
