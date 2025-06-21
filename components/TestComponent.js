"use client";
import React from "react";

const TestComponent = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked((curValue) => !curValue);
  };

  return (
    <div style={styles.container}>
      {isClicked ? <label>You clicked the checkbox!</label> : <label>Click me:</label>}
      <input
        type="checkbox"
        style={{ height: 50, width: 50 }}
        onClick={handleClick}
      />
    </div>
  );
};

export default TestComponent;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
};
