import React from "react";
import Body from "./Body";

function BodyList({ count }) {
  const listBody = Array.from({ length: count }, (_, index) => ({
    index: index + 1,
  }));
  const url = "/character/body/";

  return (
    <div className="list">
      {listBody.map((body) => (
        <Body key={body.index} value={`${url}${body.index}.png`} />
      ))}
    </div>
  );
}

export default BodyList;
