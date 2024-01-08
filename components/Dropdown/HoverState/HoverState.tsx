/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  stateProp: "hover" | "default";
  className: any;
  text: string;
  href: string;
}

export const HoverState = ({ stateProp, className, text = "Item", href }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <a
      className={`hover-state ${state.state} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="item">{text}</div>
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

HoverState.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  text: PropTypes.string,
  href: PropTypes.string,
};
