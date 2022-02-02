import React from "react";
import "./Card.scss"
const Card = (props) => {
  const className = "card " + props.className;
  return <div className={className}>{props.children}</div>;
};
export default Card;
