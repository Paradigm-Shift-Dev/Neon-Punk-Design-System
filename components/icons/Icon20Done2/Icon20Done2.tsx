/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Icon20Done2 = ({ color = "#111919", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-done-2 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.22917 11.9375L13.7292 6.45834C13.8819 6.30556 14.0556 6.23264 14.25 6.23959C14.4444 6.24653 14.6181 6.32639 14.7708 6.47917C14.9236 6.63195 15 6.80556 15 7.00001C15 7.19445 14.9236 7.36806 14.7708 7.52084L8.77083 13.5208C8.61806 13.6736 8.44097 13.75 8.23958 13.75C8.03819 13.75 7.86111 13.6736 7.70833 13.5208L5.22917 11.0417C5.07639 10.8889 5 10.7153 5 10.5208C5 10.3264 5.07639 10.1528 5.22917 10C5.38194 9.84723 5.55556 9.77084 5.75 9.77084C5.94444 9.77084 6.11806 9.84723 6.27083 10L8.22917 11.9375Z"
        fill={color}
      />
    </svg>
  );
};

Icon20Done2.propTypes = {
  color: PropTypes.string,
};
