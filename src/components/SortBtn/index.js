import React from "react";
import "./style.css";

function SortBtn(props) {
  return (
    <button onClick={props.handleSort} className="sortBtn">
      Alphabetize
    </button>
  );
}

export default SortBtn;
