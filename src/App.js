import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import BodyList from "./components/BodyList";

function App() {
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

  const [avatar, setAvatar] = useState(
    Array(Object.keys(categories).length).fill(1)
  );

  const handleClick = (e, index) => {
    const num = e.target.getAttribute("alt");
    // const index = e.target.getAttribute("alt");
    console.log("Clicked image num:", num);
    console.log("Clicked image index:", index);
    const updatedAvatars = avatar.slice();
    updatedAvatars[index] = num;
    setAvatar(updatedAvatars);
    // Do whatever you need with the path, e.g., update state, send to server, etc.
  };

  const randomAva = () => {
    const randomArray = Object.keys(categories).map((category) => {
      const defaultValue = categories[category];
      const randomValue = Math.round(Math.random() * defaultValue);
      return Math.max(1, Math.min(randomValue, defaultValue));
    });

    setAvatar(randomArray);
  };

  return (
    <div className="container">
      <h1>Avatar</h1>
      <Avatar avatars={avatar} />
      <button onClick={() => randomAva()}>RANDOMIZE SHIT</button>
      {Object.keys(categories).map((category, index) => (
        <BodyList
          key={category}
          category={category}
          count={categories[category]}
          handleClick={handleClick}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
