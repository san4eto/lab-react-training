import React from "react";

const Greetings = props => {
  return (
    <div>
      <h2>
        {props.lan} {props.children}
      </h2>
    </div>
  );
};
export default Greetings;
