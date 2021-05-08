import React, { useState } from "react";
import sortsIcon from "./../../assets/icons/arrow.png";

const SortBlock = ({
  name,
  sortField,
  sortDirection,
  setSortDirection,
  setSortingOptions,
}) => {
  const [sortImg, setSortImg] = useState(sortDirection);
  return (
    <div className="sort-block">
      <span>{name} </span>
      <img
        src={sortsIcon}
        alt="sortImg"
        onClick={() => {
          setSortingOptions(sortField);
          setSortImg(sortDirection === "desc" ? "asc" : "desc");
          setSortDirection(sortDirection === "desc" ? "asc" : "desc");
        }}
        className={sortImg === "desc" ? "rotateImg" : "sortImg"}
      />
    </div>
  );
};

export default SortBlock;


