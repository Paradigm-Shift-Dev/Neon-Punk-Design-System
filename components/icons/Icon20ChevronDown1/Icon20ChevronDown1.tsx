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

export const Icon20ChevronDown1 = ({ color = "#36D9D9", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-20-chevron-down-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.99583 12.75C9.89583 12.75 9.80208 12.7326 9.71458 12.6979C9.62708 12.6632 9.5486 12.6111 9.47916 12.5416L5.52787 8.59033C5.3704 8.43286 5.29513 8.25343 5.30208 8.05204C5.30902 7.85065 5.38888 7.67357 5.54166 7.52079C5.69444 7.36801 5.87152 7.29163 6.07291 7.29163C6.2743 7.29163 6.45138 7.36801 6.60416 7.52079L9.99999 10.9375L13.4167 7.52079C13.5694 7.36801 13.7465 7.2951 13.9479 7.30204C14.1493 7.30899 14.3264 7.38885 14.4792 7.54163C14.6319 7.6944 14.7083 7.87149 14.7083 8.07288C14.7083 8.27426 14.6296 8.45331 14.4721 8.61L10.5208 12.5416C10.4458 12.6111 10.3646 12.6632 10.2771 12.6979C10.1896 12.7326 10.0958 12.75 9.99583 12.75Z"
        fill={color}
      />
    </svg>
  );
};

Icon20ChevronDown1.propTypes = {
  color: PropTypes.string,
};
