import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  value: string;
  showHelp: boolean;
  label: string;
  helpLabel: string;
  showLabel: boolean;
  state: "disabled" | "hover" | "active" | "default";
  value1: "zero";
  className: any;
}

export const RangeList = ({
  value = "Input value",
  showHelp = true,
  label = "Label",
  helpLabel = "100",
  showLabel = true,
  state,
  value1,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`range-list ${className}`}>
      <div className={`range ${state}`}>
        <div className="overlap-group">
          {["active", "hover"].includes(state) && (
            <>
              <>{showLabel && <div className="text">{showHelp && <div className="element">{helpLabel}</div>}</div>}</>
              <>
                {showLabel && <div className="div">{state === "active" && <div className="text-wrapper">0</div>}</div>}
              </>
              <>
                {showLabel && (
                  <div className="text-2">{state === "hover" && <div className="text-wrapper-2">0</div>}</div>
                )}
              </>
            </>
          )}

          {showLabel && <div className="text-3">{showLabel && <div className="label">{label}</div>}</div>}
        </div>
      </div>
      <div className={`overlap-wrapper state-2-${state}`}>
        <div className="overlap">
          {["active", "hover"].includes(state) && (
            <>
              <>{showLabel && <div className="text">{showHelp && <div className="element">{helpLabel}</div>}</div>}</>
              <>
                {showLabel && (
                  <div className="text-4">{state === "active" && <div className="text-wrapper">0</div>}</div>
                )}
              </>
              <>
                {showLabel && (
                  <div className="text-5">{state === "hover" && <div className="text-wrapper-2">0</div>}</div>
                )}
              </>
            </>
          )}

          {showLabel && <div className="text-3">{showLabel && <div className="label-2">{label}</div>}</div>}
        </div>
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-2">
        
          {showLabel && (
            <div className="text-3">{showLabel && <div className={`label-3 state-6-${state}`}>{label}</div>}</div>
          )}
        </div>
      </div>
      <div className="help">
        {showLabel && (
          <div className="text-6">{showHelp && <div className={`element-2 state-7-${state}`}>{helpLabel}</div>}</div>
        )}

        {["active", "default", "hover"].includes(state) && (
          <div className="overlap-3">
            {showLabel && (
              <div className={`div-wrapper state-8-${state}`}>
                <div className="text-wrapper-3">0</div>
              </div>
            )}

            {state === "active" && (
              <>
                <>{showLabel && <div className="text-7" />}</>
              </>
            )}
          </div>
        )}

        {state === "disabled" && (
          <>
            <>{showLabel && <div className="text-8" />}</>
            <>
              {showLabel && (
                <div className="text-9">
                  <div className="text-wrapper-4">0</div>
                </div>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};

RangeList.propTypes = {
  value: PropTypes.string,
  showHelp: PropTypes.bool,
  label: PropTypes.string,
  helpLabel: PropTypes.string,
  showLabel: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  value1: PropTypes.oneOf(["zero"]),
};
