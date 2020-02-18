import React from "react";
import profiles from "./data/berlin.json";

const FaceBook = props => {
  const ProfileData = profiles.map(profile => {
    return (
      <React.Fragment>
        <img key={profile.id} src={profile.img} alt="profilepic"></img>
        <ul>
          <li> First Name: {profile.firstName}</li>
          <li> Last Name: {profile.lastName}</li>
          <li> Country: {profile.country}</li>
          <li>{profile.isStudent ? "Type: Student" : "Type: Teacher"}</li>
        </ul>
      </React.Fragment>
    );
  });
  return <div>{ProfileData}</div>;
};

export default FaceBook;
