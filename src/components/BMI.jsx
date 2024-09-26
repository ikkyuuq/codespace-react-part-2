import { useRef, useState } from "react";

const BMI = () => {
  const weightInput = useRef(null);
  const heightInput = useRef(null);
  const [bmi, setBmi] = useState(0);
  const calcBmi = () => {
    let w = weightInput.current.value;
    let h = heightInput.current.value / 100;
    setBmi(w / Math.pow(h, 2));
  };
  const BmiText = ({ bmi }) => {
    if (bmi < 18.5) {
      return "Under Weight";
    }
    if (bmi > 30) {
      return "Over Weight";
    }
    return "Normal";
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1>BMI Calculation</h1>
      <h2 style={{ textDecoration: "underline" }}>{<BmiText bmi={bmi} />}</h2>
      <h3>Your BMI Value: {bmi.toFixed(2)}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label htmlFor="w">Weight</label>
        <input ref={weightInput} type="text" name="w" />

        <label htmlFor="w">Height</label>
        <input ref={heightInput} type="text" name="h" />
        <button
          style={{ marginTop: "6px", paddingTop: "6px" }}
          type="submit"
          onClick={() => calcBmi()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BMI;
