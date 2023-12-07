import React, { useState } from "react";
// import Body from "./Body";

function BodyList({ count, handleClick }) {
  const listBody = Array.from({ length: count }, (_, index) => ({
    index: index + 1,
  }));
  const url = "/character/body/";
  const [selected, setSelected] = useState("");

  return (
    <div className="list">
      {listBody.map((body) => (
        <img
          key={body.index}
          className={`prop-item ${selected}`}
          src={`${url}${body.index}.png`}
          alt={`body-${body.index}`}
          height="60"
          onClick={() => handleClick}
        />
      ))}
    </div>
  );
}

export default BodyList;
