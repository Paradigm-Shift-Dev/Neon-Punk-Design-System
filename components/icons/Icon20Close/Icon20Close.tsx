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

export const Icon20Close = ({ color = "white", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-close ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 11.0625L6.58334 14.4791C6.43056 14.6319 6.25695 14.7048 6.06251 14.6979C5.86806 14.6909 5.69445 14.6111 5.54167 14.4583C5.38889 14.3055 5.31251 14.1284 5.31251 13.927C5.31251 13.7257 5.38889 13.5486 5.54167 13.3958L8.93751 9.99996L5.52084 6.58329C5.36806 6.43051 5.29514 6.25343 5.30209 6.05204C5.30903 5.85065 5.38889 5.67357 5.54167 5.52079C5.69445 5.36801 5.87153 5.29163 6.07292 5.29163C6.27431 5.29163 6.45139 5.36801 6.60417 5.52079L10 8.93746L13.4167 5.52079C13.5694 5.36801 13.7465 5.29163 13.9479 5.29163C14.1493 5.29163 14.3264 5.36801 14.4792 5.52079C14.6319 5.67357 14.7083 5.85065 14.7083 6.05204C14.7083 6.25343 14.6319 6.43051 14.4792 6.58329L11.0625 9.99996L14.4792 13.4166C14.6319 13.5694 14.7083 13.743 14.7083 13.9375C14.7083 14.1319 14.6319 14.3055 14.4792 14.4583C14.3264 14.6111 14.1493 14.6875 13.9479 14.6875C13.7465 14.6875 13.5694 14.6111 13.4167 14.4583L10 11.0625Z"
        fill={color}
      />
    </svg>
  );
};

Icon20Close.propTypes = {
  color: PropTypes.string,
};
