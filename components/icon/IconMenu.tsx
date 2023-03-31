import * as React from "react";
import { SVGProps, memo } from "react";

const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path opacity={0.01} fill="#FF963C" d="M0 0h32v32H0z" />
    <path d="M3 8h26M3 16h26M3 24h26" stroke="#FF963C" strokeWidth={3} />
  </svg>
);

export default IconMenu;
