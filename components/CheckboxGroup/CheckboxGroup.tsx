/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon20Close } from "../../icons/Icon20Close";
import { Checkbox } from "../Checkbox";
import "./style.css";

interface Props {
  required: boolean;
  label: string;
  errorLabel: string;
  infoLabel: string;
  disabled: boolean;
  invalid: boolean;
  className: any;
}

export const CheckboxGroup = ({
  required = false,
  label = "Group title",
  errorLabel = "Group error text",
  infoLabel = "Group information text",
  disabled,
  invalid,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`checkbox-group ${className}`}>
      <div className="frame">
        <div className="group-title-wrapper">
          <div className={`group-title invalid-${invalid} disabled-5-${disabled}`}>{label}</div>
        </div>
        {invalid && (
          <div className="frame-2">
            <Icon20Close className="icon-close" color="#D34417" />
            <div className="group-error-text">{errorLabel}</div>
          </div>
        )}

        <div className={`group-information disabled-6-${disabled}`}>{infoLabel}</div>
      </div>
      <div className="frame-3">
        <Checkbox
          checked="off"
          className="checkbox-instance"
          disabled={disabled ? true : undefined}
          helpLabel="Contextual help message"
          label="Label"
          stateProp="default"
        />
        <Checkbox
          checked="off"
          className="checkbox-instance"
          disabled={disabled ? true : undefined}
          helpLabel="Contextual help message"
          label="Label"
          stateProp="default"
        />
        <Checkbox
          checked="off"
          className="checkbox-instance"
          disabled={disabled ? true : undefined}
          helpLabel="Contextual help message"
          label="Label"
          stateProp="default"
        />
      </div>
    </div>
  );
};

CheckboxGroup.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  errorLabel: PropTypes.string,
  infoLabel: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
};
