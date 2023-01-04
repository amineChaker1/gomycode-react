import React from "react";
import guts from "./guts.jpg";
import "./profile.css";

const Profile = ({
  fullName = "Guts",
  bio = "Lives in our hearts  ",
  profession = "Berserk",
}) => {
  return (
    <>
      <header className="header">
        <div className="profileImg">
          <img src={guts} alt="" onClick={alert} />
        </div>
        <div className="profileInfo">
          <h1>
            Name : <br /> {fullName} the protagoniste of {profession}
          </h1>
          <h3>
            Address : <br />
            {bio}
          </h3>
        </div>
      </header>
    </>
  );
};
export default Profile;
