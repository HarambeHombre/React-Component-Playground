"use client";
import React, { useRef, useState } from "react";
import { styles } from "./Messenger.styles";

const USER_1 = "User 1";
const USER_2 = "User 2";

const Messenger = () => {
  const [messages, setMessages] = useState([]);
  const inputRefA = useRef(null);
  const inputRefB = useRef(null);

  const handleSend = (author, inputRef) => (event) => {
    event.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    const newMessage = {
      body: value,
      author,
      timestamp: new Date().toLocaleString(),
    };
    setMessages((prev) => [...prev, newMessage]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const renderMessages = (currentUser) =>
    messages.map((message, idx) => {
      const isCurrentUser = message.author === currentUser;
      return (
        <div
          style={
            isCurrentUser
              ? { ...styles.messageContainer, backgroundColor: "#e0f7fa" }
              : styles.messageContainer
          }
          key={message.timestamp + idx}
        >
          <p
            style={
              isCurrentUser
                ? { ...styles.messageBody, textAlign: "right" }
                : styles.messageBody
            }
          >
            {message.body}
          </p>
          <p
            style={
              isCurrentUser
                ? { ...styles.messageAuthor, textAlign: "right" }
                : styles.messageAuthor
            }
          >
            {message.author} - {message.timestamp}
          </p>
        </div>
      );
    });

  return (
    <div style={styles.container}>
      <div style={{ margin: "0 auto", display: "flex", gap: 20 }}>
        <div style={styles.messengerContainer}>
          <h2 style={styles.title}>{USER_1}</h2>
          <div style={styles.messengerBox}>
            <div style={styles.messages}>{renderMessages(USER_1)}</div>
            <div style={styles.actionsContainer}>
              <form style={styles.form} onSubmit={handleSend(USER_1, inputRefA)}>
                <input
                  ref={inputRefA}
                  type="text"
                  placeholder="Type a message..."
                  style={styles.input}
                />
                <button style={styles.button}>Send</button>
              </form>
            </div>
          </div>
        </div>
        <div style={styles.messengerContainer}>
          <h2 style={styles.title}>{USER_2}</h2>
          <div style={styles.messengerBox}>
            <div style={styles.messages}>{renderMessages(USER_2)}</div>
            <div style={styles.actionsContainer}>
              <form style={styles.form} onSubmit={handleSend(USER_2, inputRefB)}>
                <input
                  ref={inputRefB}
                  type="text"
                  placeholder="Type a message..."
                  style={styles.input}
                />
                <button style={styles.button}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
