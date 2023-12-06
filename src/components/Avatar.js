import React, { useState } from "react";
import Body from "./Body";

function Avatar() {
  const [body, setBody] = useState(0);

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

  const handleClickPath = () => {
    console.log(this.target.getAttribute("src"));
    setBody(this.target.getAttribute("src"));
  };
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img src={pathBody} alt="body-1" />
      </div>
      <div className="list-container">
        <Body value={"./character/body/2.png"} handleClick={handleClickPath} />
      </div>
      <button onClick={() => console.log({ body })}>TEST</button>
    </div>
  );
}

export default Avatar;
