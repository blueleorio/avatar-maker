import React, { useState } from "react";
// import BodyList from "./BodyList";

function Avatar() {
  const [body, setBody] = useState(0);

  const pathBody = "/character/body/1.png";

  const handleClickPath = () => {
    console.log(this.target.getAttribute("src"));
    setBody(this.target.getAttribute("src"));
  };
  return (
    <div className="avatar-wrapper">
      <div className="avatar">
        <img src={pathBody} alt="body-1" />
      </div>
      <div className="list-container"></div>
      <button onClick={() => console.log({ body })}>TEST</button>
    </div>
  );
}

export default Avatar;
