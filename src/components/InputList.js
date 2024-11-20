import React from "react";
import "./styles.css";

const InputList = ({ suggestionListArray }) => {
  return (
    <div className="suggestionListContainer">
      <ul>
        {suggestionListArray.map((suggestions, ind) => {
          return <li key={ind}>{suggestions}</li>;
        })}
      </ul>
    </div>
  );
};

export default InputList;
