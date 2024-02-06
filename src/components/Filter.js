import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <button
        className="filter-button"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Top Rated Resturants
      </button>
    </div>
  );
};

export default Filter;
