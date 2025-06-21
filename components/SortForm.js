"use client";
import React from "react";
import { styles } from "./SortForm.styles";

const SortForm = () => {
  const [values, setValues] = React.useState([]);
  const [originalValues, setOriginalValues] = React.useState("");
  const [opacity, setOpacity] = React.useState(0.75);
  const [textOpacity, setTextOpacity] = React.useState(0.25);
  const input = React.useRef(null);

  const handleSortChange = (event) => {
    setValues(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Sorting logic can be handled here if needed
    let newValues = input.current.value;
    if (!newValues) {
      return;
    }
    setValues(newValues.split(",").sort().join(", "));
    setOriginalValues(newValues);
    input.current.value = ""; // Clear the input field after submission
  };

  return (
    <div style={styles.container}>
      <div style={styles.sortFormContainer}>
        <h2 style={styles.title}>Sort Values:</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input style={styles.input} ref={input} />
          <button
            style={{ ...styles.button, opacity }}
            type="submit"
            onMouseOver={() => setOpacity(1)}
            onMouseOut={() => setOpacity(0.75)}
            onMouseDown={() => setOpacity(0.5)}
            onMouseUp={() => setOpacity(0.75)}
          >
            Sort
          </button>
          <button
            style={{ ...styles.textButton, opacity: textOpacity }}
            type="reset"
            onMouseEnter={() => setTextOpacity(1)}
            onMouseOut={() => setTextOpacity(0.25)}
            onMouseDown={() => setTextOpacity(0.5)}
            onMouseUp={() => setTextOpacity(0.25)}
            onClick={() => {
              setValues([]);
              setOriginalValues("");
            }}
          >
            Reset
          </button>
        </form>
        <div style={styles.resultContainer}>
          <p style={styles.resultTitle}>Current:</p>
          <p style={styles.result}>
            {originalValues.length > 0 ? originalValues : "(Nothing yet)"}
          </p>
        </div>
        <div style={styles.resultContainer}>
          <p style={styles.resultTitle}>Sorted:</p>
          <p style={styles.result}>{values.length > 0 ? values : "(Nothing Yet)"}</p>
        </div>
      </div>
    </div>
  );
};

export default SortForm;
