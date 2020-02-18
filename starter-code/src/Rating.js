import React from "react";
const Rating = props => {
  const rate = Math.floor(props.children);
  const stars = "★".repeat(rate);
  const whiteStars = "☆".repeat(5 - rate);
  return (
    <div>
      {stars}
      {whiteStars}
    </div>
  );
};

export default Rating;
