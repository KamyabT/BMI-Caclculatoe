import React, { Component } from "react";

const Maincontent = () => {
  return (
    <main className="mainDesign bg-warning d-flex justify-content-center align-items-center">
      <div className="calculatorMainDesign">
        <div className="blueDark w-100 px-5 py-3">
          <h2 className="text-white text-center">BMI CALCULATOR</h2>
        </div>
        <div className="bg-white p-3">
          <div className="sliderContainer d-flex flex-column align-items-center">
            <div>
              <span>Weight :</span>
              <span id="weightVal">10</span>
            </div>
            <input
              type="range"
              min="40"
              max="250"
              step="1"
              // value="50"
              // value="50"
              className="slider my-3"
              // id="myRange"
            ></input>
          </div>
          <div className="sliderContainer d-flex flex-column align-items-center">
            <div>
              <span>Height :</span>
              <span id="heightVal">10</span>
            </div>
            <input
              type="range"
              min="40"
              max="250"
              step="1"
              // value="50"
              // value="50"
              className="slider my-3"
              // id="myRange"
            ></input>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <button className="btn btn-dark">result</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Maincontent;
