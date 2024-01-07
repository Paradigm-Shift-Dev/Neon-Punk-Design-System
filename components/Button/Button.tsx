/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon20ChevronDown22 } from "../../icons/Icon20ChevronDown22";
import { Icon20Done6 } from "../../icons/Icon20Done6";
import "./style.css";

interface Props {
  showLabel: boolean;
  showIconEnd: boolean;
  showIconStart: boolean;
  label: string;
  priority: "primary" | "secondary";
  stateProp: "hover" | "active" | "default";
  disabled: boolean;
  priorityPrimaryClassName: any;
  icon: JSX.Element;
  href: string;
}

export const Button = ({
  showLabel = true,
  showIconEnd = true,
  showIconStart = true,
  label = "Label",
  priority,
  stateProp,
  disabled,
  priorityPrimaryClassName,
  icon = <Icon20Done6 className="icon-chevron-down" color="white" />,
  href,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    priority: priority || "primary",
    state: stateProp || "default",
    disabled: disabled,
  });

  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <button
        className={`button ${state.state} ${state.priority} disabled-${state.disabled} ${priorityPrimaryClassName}`}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        {showIconStart && <>{icon}</>}

        {showLabel && <div className="wrap">{showLabel && <div className="label">{label}</div>}</div>}

        {showIconEnd && (
          <Icon20ChevronDown22
            className="icon-chevron-down"
            color={
              state.priority === "primary" && ["active", "default"].includes(state.state)
                ? "white"
                : state.state === "hover"
                ? "#111919"
                : state.disabled
                ? "#A5B8B8"
                : "#36D9D9"
            }
          />
        )}
      </button>
    </a>
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

Button.propTypes = {
  showLabel: PropTypes.bool,
  showIconEnd: PropTypes.bool,
  showIconStart: PropTypes.bool,
  label: PropTypes.string,
  priority: PropTypes.oneOf(["primary", "secondary"]),
  stateProp: PropTypes.oneOf(["hover", "active", "default"]),
  disabled: PropTypes.bool,
  href: PropTypes.string,
};
