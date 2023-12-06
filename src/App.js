import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import BodyList from "./components/BodyList";

function App() {
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
  return (
    <div className="container">
      <h1>Avatar</h1>
      <Avatar />
      <BodyList count={count.body} />
    </div>
  );
}

export default App;
