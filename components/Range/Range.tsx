/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  value: string;
  showHelp: boolean;
  label: string;
  helpLabel: string;
  showLabel: boolean;
  stateProp: "disabled" | "hover" | "active" | "default";
  value1: "zero";
  className: any;
}

export const Range = ({
  value = "Input value",
  showHelp = true,
  label = "Label",
  helpLabel = "100",
  showLabel = true,
  stateProp,
  value1,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    value: value1 || "zero",
  });

  return (
    <div
      className={`range ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          {showLabel && (
            <div className="text">{showHelp && <div className={`element ${state.state}`}>{helpLabel}</div>}</div>
          )}

          {showLabel && (
            <div className={`div state-${state.state}`}>
              {state.state === "active" && <div className="text-wrapper">0</div>}
            </div>
          )}

          {showLabel && (
            <div className={`text-2 state-0-${state.state}`}>
              {["default", "disabled", "hover"].includes(state.state) && <div className="text-wrapper-2">0</div>}
            </div>
          )}

          <img
            className="range-input"
            alt="Range input"
            src={
              state.state === "hover"
                ? "/img/rangeinput-6.png"
                : state.state === "active"
                ? "/img/rangeinput-4.png"
                : state.state === "disabled"
                ? "/img/rangeinput-2.png"
                : "/img/rangeinput.png"
            }
          />
          {showLabel && (
            <div className="text-3">{showLabel && <div className={`label state-2-${state.state}`}>{label}</div>}</div>
          )}
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

Range.propTypes = {
  value: PropTypes.string,
  showHelp: PropTypes.bool,
  label: PropTypes.string,
  helpLabel: PropTypes.string,
  showLabel: PropTypes.bool,
  stateProp: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  value1: PropTypes.oneOf(["zero"]),
};
