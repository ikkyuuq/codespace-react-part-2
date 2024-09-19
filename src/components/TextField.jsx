import React, { useState } from "react";

function TextField() {
  const [context, setContext] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label for="text">You typed for {context.length} characters</label>
      <input
        type="text"
        name="text"
        placeholder="Start typing here!"
        value={context}
        onChange={(event) => {
          setContext(event.target.value);
        }}
      />
    </div>
  );
}

export default TextField;
