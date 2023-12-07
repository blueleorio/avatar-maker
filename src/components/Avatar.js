import React, { useState } from "react";
import Part from "./Part";

function Avatar() {
  const [body, setBody] = useState(0);
  const set = {
    accessories: {
      earrings: 0,
      glasses: 0,
      hats: 0,
      neckwear: 0,
    },
    clothes: {
      layer1: 0,
      layer2: 0,
      layer3: 0,
    },
    body: 0,
    eyebrows: 0,
    eyes: 0,
    facial_hair: 0,
    hair: 0,
    mouth: 0,
    noses: 0,
  };

  const handleClickPath = () => {
    console.log(this.target.getAttribute("src"));
    setBody(this.target.getAttribute("src"));
  };
  return (
    <div className="avatar-wrapper">
      <div className="avatar">{set.map((part) => (<Part key={part.index} value={Sth i have no fking idea}/>))}</div>
      <button onClick={() => console.log({ body })}>TEST</button>
    </div>
  );
}

export default Avatar;
