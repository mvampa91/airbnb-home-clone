import React from "react";
import "./Card.css";
const Card = ({ image, title, description, textColor, style }) => {
  return (
    <div className="card" style={style}>
      <div
        className="card__image"
        style={{ backgroundImage: `url(${image}` }}
      />
      <div className="card__text">
        <h4 style={{ color: textColor || "black" }}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
