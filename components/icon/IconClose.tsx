import * as React from "react";
import { SVGProps } from "react";

const IconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path opacity={0.01} fill="#FF963C" d="M0 0h32v32H0z" />
    <path d="m7 7 19 19M7 26 26 7" stroke="#FF963C" strokeWidth={3} />
  </svg>
);

export default IconClose;
