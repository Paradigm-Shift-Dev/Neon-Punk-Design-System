/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  showLabel: boolean;
  showHelp: boolean;
  helpLabel: string;
  value: string;
  label: string;
  isFocused: boolean;
  stateProp: "hover" | "active" | "default";
  checked: "off" | "on";
  disabled: boolean;
  className: any;
  toggleClassName: any;
  toggle: string;
}

export const Toggle = ({
  showLabel = true,
  showHelp = true,
  helpLabel = "Contextual help message",
  value = "Input value",
  label = "Label",
  isFocused = false,
  stateProp,
  checked,
  disabled,
  className,
  toggleClassName,
  toggle = "/img/toggle-5.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    checked: checked || "off",
    disabled: disabled,
  });

  return (
    <div
      className={`toggle ${state.checked} state-0-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.state === "default" && state.checked === "off" && (
        <>
          <>
            {showLabel && (
              <div className="text">
                {showLabel && <div className={`label-2 disabled-1-${state.disabled}`}>{label}</div>}
              </div>
            )}
          </>
        </>
      )}

      {((state.disabled && state.checked === "on") ||
        (state.checked === "off" && state.state === "active") ||
        (state.checked === "off" && state.state === "hover")) && (
        <div className="text-2">{showLabel && <div className="label-3">{label}</div>}</div>
      )}

      {(state.disabled || state.checked === "off") && (
        <div className={`div-wrapper state-3-${state.state} disabled-2-${state.disabled} ${toggleClassName}`}>
          <div className={`button-3 checked-${state.checked} disabled-3-${state.disabled} state-4-${state.state}`} />
        </div>
      )}

      {((state.disabled && state.checked === "on") ||
        (state.checked === "off" && state.state === "active") ||
        (state.checked === "off" && state.state === "hover")) && (
        <div className="text-3">{showHelp && <div className="contextual-help">{helpLabel}</div>}</div>
      )}

      {state.checked === "on" && !state.disabled && (
        <>
          <div className="text-4">{showLabel && <div className="label-4">{label}</div>}</div>
          <img
            className={`img ${toggleClassName}`}
            alt="Toggle"
            src={
              state.state === "hover" ? "/img/toggle-3.svg" : state.state === "active" ? "/img/toggle-1.svg" : toggle
            }
          />
          <div className="text-4">{showHelp && <div className="contextual-help-2">{helpLabel}</div>}</div>
        </>
      )}

      {state.state === "default" && state.checked === "off" && (
        <>
          <>
            {showLabel && (
              <div className="text">
                {showHelp && <div className={`contextual-help-3 disabled-4-${state.disabled}`}>{helpLabel}</div>}
              </div>
            )}
          </>
        </>
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

Toggle.propTypes = {
  showLabel: PropTypes.bool,
  showHelp: PropTypes.bool,
  helpLabel: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  isFocused: PropTypes.bool,
  stateProp: PropTypes.oneOf(["hover", "active", "default"]),
  checked: PropTypes.oneOf(["off", "on"]),
  disabled: PropTypes.bool,
  toggle: PropTypes.string,
};
