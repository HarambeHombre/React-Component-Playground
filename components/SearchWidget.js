"use client";
import React from "react";
import { motion } from "motion/react";
import IonIcon from "@reacticons/ionicons";
import { styles } from "./SearchWidget.styles";

const COLLAPSED_WIDTH = 40;
// const EXPANDED_WIDTH = 295;
const EXPANDED_WIDTH = 460;
const ICON_SIZE = 40;

const SearchWidget = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState([]);
  const inputRef = React.useRef(null);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = inputRef.current.value.trim();
    if (inputValue) {
      setSearchQuery((prevValue) => [...prevValue, inputValue]);
      console.log("Search submitted:", inputValue);
      inputRef.current.value = ""; // Clear the input after submission
    }
  }

  return (
    <>
      <motion.div
        style={styles.container}
        initial={{ width: COLLAPSED_WIDTH }}
        animate={{ width: isOpen ? EXPANDED_WIDTH : COLLAPSED_WIDTH }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        <span
          style={{
            ...styles.inconContainer,
            width: ICON_SIZE,
            height: ICON_SIZE,
          }}
        >
          <IonIcon name="search" style={styles.icon} onClick={handleClick} />
        </span>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: ICON_SIZE,
            overflow: "hidden",
          }}
        >
          <input
            ref={inputRef}
            style={styles.input}
            type="text"
            placeholder="Search..."
          />
          <button type="submit" style={styles.button}>
            Search
          </button>
        </form>
      </motion.div>
      {isOpen && (
        <motion.div
          style={{ marginTop: "10px", padding: "20px", color: "#333" }}
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h4 style={{ borderBottom: "1px soild #333", marginBottom: "5px" }}>
            Search Queries:
          </h4>
          <ul>
            {searchQuery.length > 0
              ? searchQuery.map((query, index) => (
                  <li
                    key={index}
                    style={{ marginLeft: "20px", paddingBottom: "5px" }}
                  >
                    Query: {query} - Timestamp: {new Date().toLocaleString()}
                  </li>
                ))
              : "No search queries yet."}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default SearchWidget;
