import React, { useState } from "react";
import "./Hello.css";

export default function Hello({ fname, lname = "Jaimha", age }) {
  return (
    <>
      <h1>
        Hello, {fname} {lname} !, {age > 18 ? "Old man" : ""}
      </h1>
    </>
  );
}
