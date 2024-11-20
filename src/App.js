import "./styles.css";
import InputCreation from "./components/Input";
import { useState } from "react";
import InputList from "./components/InputList";

export default function App() {
  const [numberOfInputs, setNumberOfInputs] = useState([1]);
  const [suggestionList, setSuggestionList] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      {suggestionList.length > 0 && (
        <InputList suggestionListArray={suggestionList} />
      )}
      <div className="App">
        {numberOfInputs.map((inputs, ind) => {
          return (
            <div style={{ margin: "5px" }} key={ind}>
              <InputCreation
                numberOfInputs={numberOfInputs}
                setSuggestionList={setSuggestionList}
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          setNumberOfInputs((prev) => {
            return [...prev, prev.slice(-1) + 1];
          })
        }
        style={{
          marginTop: "10px",
          backgroundColor: "skyblue",
          borderRadius: "8px",
          padding: "10px",
          width: "50%",
          marginLeft: "120px",
        }}
      >
        Create Input Boxes
      </button>
    </div>
  );
}
