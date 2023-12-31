import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import BodyList from "./components/BodyList";

const categories = {
  "accessories/earrings": 32,
  "accessories/glasses": 17,
  "accessories/hats": 28,
  "accessories/neckwear": 18,
  "clothes/layer_1": 5,
  "clothes/layer_2": 5,
  "clothes/layer_3": 9,
  body: 17,
  eyebrows: 15,
  eyes: 24,
  facial_hair: 17,
  hair: 73,
  mouths: 24,
  noses: 1,
};

function App() {
  const [avatar, setAvatar] = useState(
    Array(Object.keys(categories).length).fill(1)
  );

  const handleClick = (e, index) => {
    const num = e.target.getAttribute("alt");

    console.log("Clicked image num:", num);
    console.log("Clicked Category index:", index);
    const updatedAvatars = { ...avatar };
    updatedAvatars[index] = num;
    setAvatar(updatedAvatars);
  };

  const randomAva = () => {
    const randomArray = Object.keys(categories).map((category) => {
      const defaultValue = categories[category];
      const randomValue = Math.ceil(Math.random() * defaultValue); //32 => Math.random()*defaultValue = 0 - < 32
      //   const result = Math.max(1, Math.min(randomValue, defaultValue));

      return randomValue;
    });

    setAvatar(randomArray);
  };

  return (
    <div className="container">
      <div className="avatar">
        <h1>Avatar</h1>
        <Avatar avatars={avatar} />
        <button onClick={() => randomAva()}>RANDOMIZE</button>
      </div>
      {Object.keys(categories).map((category, index) => (
        <BodyList
          key={category}
          category={category}
          count={categories[category]}
          handleClick={handleClick}
          index={index}
          selected={avatar[index]}
        />
      ))}
    </div>
  );
}

export default App;
