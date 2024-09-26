import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TextField from "./components/TextField";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import BMI from "./components/BMI";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter type={"Guests"} />
    <Counter type={"Rooms"} />
    <TextField />

    {/*  26/09/2024 */}

    <ItemList />

    <BMI />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
