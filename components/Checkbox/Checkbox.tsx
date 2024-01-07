/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon20Done12 } from "../../icons/Icon20Done12";
import "./style.css";

interface Props {
  isFocused: boolean;
  label: string;
  helpLabel: string;
  showHelp: boolean;
  showLabel: boolean;
  stateProp: "hover" | "active" | "default";
  checked: "off" | "on";
  disabled: boolean;
  className: any;
  boxClassName: any;
  divClassName: any;
  divClassNameOverride: any;
}

export const Checkbox = ({
  isFocused = false,
  label = "Label",
  helpLabel = "Contextual help message",
  showHelp = true,
  showLabel = true,
  stateProp,
  checked,
  disabled,
  className,
  boxClassName,
  divClassName,
  divClassNameOverride,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
    checked: checked || "off",
    disabled: disabled,
  });

  return (
    <div
      className={`checkbox ${state.checked} state-0-${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.state === "default" && state.checked === "off" && (
        <>
          <div className={`box disabled-1-${state.disabled} ${boxClassName}`} />
          <>
            {showLabel && (
              <div className="text">
                {showLabel && <div className={`label-2 disabled-2-${state.disabled} ${divClassName}`}>{label}</div>}

                {showHelp && (
                  <div className={`contextual-help disabled-3-${state.disabled} ${divClassNameOverride}`}>
                    {helpLabel}
                  </div>
                )}
              </div>
            )}
          </>
        </>
      )}

      {(state.state === "active" ||
        state.state === "hover" ||
        (state.checked === "on" && state.state === "default")) && (
        <>
          <div
            className={`box-2 disabled-4-${state.disabled} state-1-${state.state} checked-${state.checked} ${boxClassName}`}
          >
            {state.checked === "on" && !state.disabled && <Icon20Done12 className="icon-done" color="#111919" />}
          </div>
          <div className="text-2">
            {showLabel && <div className={`label-3 disabled-5-${state.disabled} ${divClassName}`}>{label}</div>}

            {showHelp && (
              <div className={`contextual-help-2 disabled-6-${state.disabled} ${divClassNameOverride}`}>
                {helpLabel}
              </div>
            )}
          </div>
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

Checkbox.propTypes = {
  isFocused: PropTypes.bool,
  label: PropTypes.string,
  helpLabel: PropTypes.string,
  showHelp: PropTypes.bool,
  showLabel: PropTypes.bool,
  stateProp: PropTypes.oneOf(["hover", "active", "default"]),
  checked: PropTypes.oneOf(["off", "on"]),
  disabled: PropTypes.bool,
};
