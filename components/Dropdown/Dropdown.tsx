/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { HoverState } from "./HoverState";
import "./style.css";

interface Props {
  showLabel: boolean;
  helpLabel: string;
  label: string;
  showHelp: boolean;
  value: string;
  state: "hover" | "default";
  className: any;
}

export const Dropdown = ({
  showLabel = true,
  helpLabel = "Helpful text to further explain the the Label",
  label = "Label",
  showHelp = true,
  value = "Input value",
  state,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`dropdown state-0-${state} ${className}`}>
      <HoverState
        className="hover-state-instance"
        href="https://www.figma.com/proto/iUelMhkTcWaM8WQRH4FpYg/DSE-Martin-N%C3%B8rgaard-Gregersen---Test-task?type=design&node-id=218-529&t=hyaKqVvvNCC5XBVG-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=218%3A529"
        stateProp={state === "hover" ? "hover" : "default"}
        text="Button"
      />
      <HoverState
        className="hover-state-instance"
        href="https://www.figma.com/proto/iUelMhkTcWaM8WQRH4FpYg/DSE-Martin-N%C3%B8rgaard-Gregersen---Test-task?type=design&node-id=1337-16272&t=Q08guhJ6GBZFR9sQ-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=218%3A529&show-proto-sidebar=1"
        stateProp={state === "hover" ? "hover" : "default"}
        text="Toggle"
      />
      <HoverState
        className="hover-state-instance"
        href="https://www.figma.com/proto/iUelMhkTcWaM8WQRH4FpYg/DSE-Martin-N%C3%B8rgaard-Gregersen---Test-task?type=design&node-id=218-530&t=hyaKqVvvNCC5XBVG-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=218%3A530&show-proto-sidebar=1&fuid=1322166814993528615"
        stateProp={state === "hover" ? "hover" : "default"}
        text="Checkbox"
      />
      <HoverState
        className="hover-state-instance"
        href="https://www.figma.com/proto/iUelMhkTcWaM8WQRH4FpYg/DSE-Martin-N%C3%B8rgaard-Gregersen---Test-task?type=design&node-id=537-1253&t=hyaKqVvvNCC5XBVG-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=537%3A1253&show-proto-sidebar=1&fuid=1322166814993528615"
        stateProp={state === "hover" ? "hover" : "default"}
        text="CheckboxGroup"
      />
      <HoverState
        className="hover-state-instance"
        href="https://www.figma.com/proto/iUelMhkTcWaM8WQRH4FpYg/DSE-Martin-N%C3%B8rgaard-Gregersen---Test-task?type=design&node-id=1233-2109&t=B0DcvD6wvTGBOah9-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=1233%3A2109&show-proto-sidebar=1"
        stateProp={state === "hover" ? "hover" : "default"}
        text="Input"
      />
      <HoverState
        className="hover-state-instance"
        href="https://www.figma.com/proto/iUelMhkTcWaM8WQRH4FpYg/DSE-Martin-N%C3%B8rgaard-Gregersen---Test-task?type=design&node-id=1210-8037&t=hyaKqVvvNCC5XBVG-0&scaling=min-zoom&page-id=1%3A2&starting-point-node-id=218%3A530&show-proto-sidebar=1"
        stateProp={state === "hover" ? "hover" : "default"}
        text="Dropdown"
      />
      <HoverState className="hover-state-instance" stateProp={state === "hover" ? "hover" : "default"} text="Range" />
      <HoverState
        className="hover-state-instance"
        stateProp={state === "hover" ? "hover" : "default"}
        text="RangeList"
      />
    </div>
  );
};

Dropdown.propTypes = {
  showLabel: PropTypes.bool,
  helpLabel: PropTypes.string,
  label: PropTypes.string,
  showHelp: PropTypes.bool,
  value: PropTypes.string,
  state: PropTypes.oneOf(["hover", "default"]),
};
