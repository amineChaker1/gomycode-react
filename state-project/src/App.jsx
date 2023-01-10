import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Profile from "./components/Profile";
import profileData from "./data";

function App() {
  const [userData, setProfileData] = useState([]);
  const handleClick = () => {
    setProfileData(profileData);
    console.log(profileData);
  };
  return (
    <>
      {userData.map((data) => (
        <Profile
          profileDesc={data.desc}
          profileIm={data.profileImg}
          profileHead={data.heading}
        />
      ))}
      <button onClick={handleClick}>Show Profile</button>
    </>
  );
}

export default App;
