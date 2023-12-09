import React from "react";

function Avatar({ avatars }) {
  // const defaultSet = {
  //   "accessories/earrings": 1,
  //   "accessories/glasses": 1,
  //   "accessories/hats": 1,
  //   "accessories/neckwear": 1,
  //   "clothes/layer_1": 1,
  //   "clothes/layer_2": 1,
  //   "clothes/layer_3": 1,
  //   body: 1,
  //   eyebrows: 1,
  //   eyes: 1,
  //   facial_hair: 1,
  //   hair: 1,
  //   mouths: 1,
  //   noses: 1,
  // };

  // const updatedAvatars = { ...defaultSet };

  // Object.keys(updatedAvatars).forEach((key, index) => {
  //   updatedAvatars[key] = avatars[index];
  // });

  const url = "/character/";

  function convertToValidId(key) {
    // Remove everything before and including the last slash
    return key.replace(/.*\//, "");
  }

  return (
    <div className="avatar-wrapper">
      {Object.entries(avatars).map(([part, value], index) => {
        const validId = convertToValidId(part);

        return (
          <img
            key={index}
            id={validId}
            className={`avatar-item`}
            src={`${url}${part}/${value}.png`}
            alt={`${part}`}
            height="240"
          />
        );
      })}
    </div>
  );
}

export default Avatar;
