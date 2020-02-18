import React from "react";

const CreditCard = props => {
  const cardNum = props.number.slice(-4);
  const style = { backgroundColor: props.bgColor };
  return (
    <div
      type={props.type}
      number={props.number}
      bank={props.bank}
      owner={props.owner}
      style={style}
      color="white"
    >
      <ul>
        <li>{props.bank}</li>
        <li>
          Expires{props.expirationMonth}/{props.expirationYear}{" "}
        </li>
        <li>{props.owner}</li>
        <li>**** **** **** **** {cardNum}</li>
      </ul>
    </div>
  );
};

export default CreditCard;
