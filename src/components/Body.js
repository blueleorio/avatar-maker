import React from "react";

function Body({ value, handleClickPath }) {
  return (
    <div className="square">
      <img
        className="prop-item"
        src={value}
        alt="test"
        onClick={() => handleClickPath}
      />
    </div>
  );
}

export default Body;
