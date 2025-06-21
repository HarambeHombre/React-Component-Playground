"use client";
import React from "react";
import "../app/globals.css";
import {styles} from "./Counter.styles"

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const onIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={styles.container}>
      <div style={styles.counterContainer}>
        <button className="button" onClick={onDecrement}>
          Decrement
        </button>
        <h2 style={styles.counter}>{count}</h2>
        <button className="button" onClick={onIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;