import React from "react";
import "./style.css";

export const Range = (): JSX.Element => {
  return (
    <div className="box">
      <div className="range-2">
        <div className="range-wrapper">
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-4">
                <div className="text-wrapper-3">100</div>
              </div>
              <div className="text-5">
                <div className="text-wrapper-4">0</div>
              </div>
              <img className="img" alt="Range input" src="range-input.png" />
              <div className="text-6">
                <div className="text-wrapper-5">Label</div>
              </div>
            </div>
          </div>
        </div>
        <div className="range-wrapper">
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-4">
                <div className="text-wrapper-3">100</div>
              </div>
              <div className="text-5">
                <div className="text-wrapper-4">0</div>
              </div>
              <img className="img" alt="Range input" src="image.png" />
              <div className="text-6">
                <div className="text-wrapper-5">Label</div>
              </div>
            </div>
          </div>
        </div>
        <Range className="state-active-value" helpLabel="100" label="Label" stateProp="active" value1="zero" />
        <div className="range-wrapper">
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-4">
                <div className="text-wrapper-6">100</div>
              </div>
              <div className="text-5">
                <div className="text-wrapper-7">0</div>
              </div>
              <img className="img" alt="Range input" src="range-input-3.png" />
              <div className="text-6">
                <div className="text-wrapper-8">Label</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
