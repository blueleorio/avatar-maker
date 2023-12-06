import React from "react";

function Body(handleClick) {
  return (
    <div className="square">
      <img
        className="prop-item"
        src="./character/body/1.png"
        alt="test"
        onClick={() => handleClick}
      />
    </div>
  );
}

export default Body;
