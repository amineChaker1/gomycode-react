import React from "react";
import c from "./profile.module.css";

const Profile = ({ profileDesc, profileIm, profileHead }) => {
  return (
    <>
      <div className={c.container}>
        <div className={c.con}>
          <img src={profileIm} alt="" />
        </div>
        <div className={c.con}>
          <h1> {profileHead} </h1>
          <p>{profileDesc}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
