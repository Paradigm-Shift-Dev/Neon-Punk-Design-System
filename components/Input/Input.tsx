/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon20Close } from "../icons/Icon20Close";
import "./style.css";

interface Props {
  showLabel: boolean;
  helpLabel: string;
  label: string;
  showHelp: boolean;
  value: string;
  stateProp: "active-focused" | "hover" | "default";
  disabled: boolean;
  invalid: boolean;
  className: any;
  inputType: string;
}

export const Input = ({
  showLabel = true,
  helpLabel = "Helpful text to further explain the the Label",
  label = "Label",
  showHelp = true,
  value = "Input value",
  stateProp,
  disabled,
  invalid,
  className,
  inputType = "text",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    disabled: disabled,

    invalid: invalid,
  });

  return (
    <div
      className={`input ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {showLabel && <div className={`label invalid-${state.invalid} disabled-${state.disabled}`}>{label}</div>}

      <input
        className={`field ${state.state} disabled-0-${state.disabled} invalid-0-${state.invalid}`}
        placeholder={value}
        type={inputType}
      />
      {!state.invalid && (
        <>
          <>{showHelp && <p className={`helpful-text-to disabled-1-${state.disabled}`}>{helpLabel}</p>}</>
        </>
      )}

      {state.invalid && (
        <div className="frame">
          <Icon20Close className="icon-close" color="#D34417" />
          <p className="text-wrapper">{helpLabel}</p>
        </div>
      )}
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

Input.propTypes = {
  showLabel: PropTypes.bool,
  helpLabel: PropTypes.string,
  label: PropTypes.string,
  showHelp: PropTypes.bool,
  value: PropTypes.string,
  stateProp: PropTypes.oneOf(["active-focused", "hover", "default"]),
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  inputType: PropTypes.string,
};
