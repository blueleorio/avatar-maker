import React, { useState } from "react";
import "./App.css";
import Body from "./Body";

function Avatar() {
  const [body, setBody] = useState("/character/body/");

  const pathBody = "/character/body/1.png";
  const count = {
    accessories: {
      earrings: 32,
      glasses: 17,
      hats: 28,
      neckwear: 18,
    },
    clothes: {
      layer1: 5,
      layer2: 5,
      layer3: 9,
    },
    body: 17,
    eyebrows: 15,
    eyes: 24,
    facial_hair: 17,
    hair: 73,
    mouth: 24,
    noses: 1,
  };

  const handleClick = (e) => {
    console.log(e.target.getAttribute("src"));
  };

  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img src={pathBody} alt="body-1" />
      </div>
      <div className="list-container">
        <Body handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Avatar;
