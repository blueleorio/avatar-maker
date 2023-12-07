import React from "react";

function BodyList({ category, count, handleClick, index }) {
  const url = "/character/";

  return (
    <div className={category}>
      <div className="category-box">
        <h2>{category}</h2>

        {[...Array(count)].map((_, imgIndex) => (
          <img
            key={imgIndex + 1}
            className="prop-item"
            src={`${url}${category}/${imgIndex + 1}.png`}
            alt={`${imgIndex + 1}`}
            height="60"
            onClick={(e) => handleClick(e, index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BodyList;
