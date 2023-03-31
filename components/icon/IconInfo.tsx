import * as React from "react";
import { SVGProps, memo } from "react";

const IconInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.5 22.297H13.072l-8 5.703v-5.703H.5V0h25v22.297ZM23.214 2.273H2.786v17.754h4.572v3.55l4.98-3.55h10.876V2.272Zm-8.85 8.119v6.534h-2.63V10.39h2.63Zm-1.316-1.96c.908 0 1.643-.731 1.643-1.633s-.736-1.634-1.643-1.634c-.908 0-1.644.732-1.644 1.634 0 .902.736 1.633 1.644 1.633Z"
      fill="#FF963C"
    />
  </svg>
);

export default IconInfo;
