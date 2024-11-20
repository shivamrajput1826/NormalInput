import React, { useRef, useState } from "react";

const InputCreation = ({ numberOfInputs, setSuggestionList }) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue != "") {
      setSuggestionList((prevArray) => [...prevArray, inputValue]);
    }
    setInputValue((prev) => "");
  };

  return (
    <>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: "80%", marginTop: "10px", height: "20px" }}
      />
      <button
        style={{
          backgroundColor: "skyblue",
          marginLeft: "5px",
          height: "25px",
          borderRadius: "4px",
        }}
        onClick={handleSubmit}
      >
        +
      </button>
    </>
  );
};
export default InputCreation;
