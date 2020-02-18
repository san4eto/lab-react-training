import React from "react";

const DriverCard = props => {
  const rate = Math.floor(props.rating);
  const stars = "★".repeat(rate);
  const whiteStars = "☆".repeat(5 - rate);
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>
        rating: {stars}
        {whiteStars}
      </p>
      <img src={props.picture} alt="driver"></img>
      {/* <p>{props.car}</p> */}
    </div>
  );
};

export default DriverCard;
