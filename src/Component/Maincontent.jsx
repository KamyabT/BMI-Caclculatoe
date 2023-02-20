import React, { Component, useState } from "react";

const Maincontent = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");

  let bmiCalc = () => {
    let BmiRes = (weight / (height * height));
    setBmi(BmiRes);
  };

  return (
    <main className="mainDesign bg-warning d-flex justify-content-center align-items-center">
      <div className="calculatorMainDesign">
        <div className="blueDark w-100 px-5 py-3">
          <h2 className="text-white text-center">BMI CALCULATOR</h2>
        </div>
        <div className="bg-white p-3">
          <div className="sliderContainer d-flex flex-column align-items-center">
            <div>
              <span>Weight : </span>
              <span id="weightVal">{weight}</span>
            </div>
            <input
              className="w-100 my-3"
              type="text"
              onChange={(event) => setWeight(event.target.value)}
            ></input>
          </div>
          <div className="sliderContainer d-flex flex-column align-items-center">
            <div>
              <span>Height : </span>
              <span id="Hvalue">{height}</span>
            </div>
            <input
              className="w-100 my-3"
              type="text"
              onChange={(event) => setHeight(event.target.value)}
            ></input>
          </div>
          <div className="d-flex flex-column justify-content-center mt-2">
            <button className="btn btn-dark" onClick={bmiCalc}>
              Calculate my BMI
            </button>
            <p className="text-center mt-3">{bmi}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Maincontent;
