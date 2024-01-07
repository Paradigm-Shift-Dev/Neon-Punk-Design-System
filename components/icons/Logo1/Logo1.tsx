/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Logo1 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`logo-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16 0L13 9H22L20.134 11H5.734L16 0ZM18.267 13H3.867L2 15H11L8 24L18.267 13Z"
        fill="white"
      />
    </svg>
  );
};
