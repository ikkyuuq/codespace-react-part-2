import React, { useState } from "react";

function Counter({ type }) {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "6px",
        backgroundColor: "#1e1e1e",
        paddingTop: "6px",
        paddingBottom: "6px",
      }}
    >
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", margin: 0 }}>{type}</p>
        <span style={{ color: "white" }}>{count}</span>
      </div>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
