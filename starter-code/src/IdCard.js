import React from "react";

const IdCard = props => {
  return (
    <div>
      <img src={props.picture} alt=" Person"></img>
      <ul>
        <li>LastName: {props.lastName}</li>
        <li>FirstName: {props.firstName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        {/* <li>birth= {formatDate(props.birth)}</li> */}
      </ul>
    </div>
  );
};

export default IdCard;
