"use client";
import React from "react";
import { styles } from "./CustomizeModal.styles";
import IonIcon from "@reacticons/ionicons";

const CustomizeModal = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [error, setError] = React.useState(null);

  function createError() {
    setError("An error has been generated!");
  }
  return (
    <>
      {!isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button onClick={() => setIsOpen(true)} style={styles.button}>
            Open Modal
          </button>
          <button onClick={() => createError()} style={styles.button}>
            Create Error
          </button>
        </div>
      )}
      {error && !isOpen && (
        <p style={{ textAlign: "center", padding: "10px", color: "red" }}>
          Error has been generated, open the modal to see it.
        </p>
      )}
      <div style={{ display: isOpen ? "flex" : "none", ...styles.container }}>
        <dialog open={isOpen} style={styles.dialog}>
          <div style={styles.headerContainer}>
            <h3 style={{color: error ? "red" : "#333"}}>{error ? "Error:" : title}</h3>
            <IonIcon
              name="close-circle-outline"
              style={{ ...styles.closeIcon, color: error ? "red" : "#333" }}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <p style={{ ...styles.content, color: error ? "red" : "#333" }}>{error ? error : children}</p>
          {error && (
            <button onClick={() => (setError(null), setIsOpen(false))} style={{...styles.button, marginTop: "20px"}}>
              Clear Error
            </button>
          )}
        </dialog>
      </div>
    </>
  );
};

export default CustomizeModal;
