import * as React from "react";
import { SVGProps } from "react";

const IconSnack = (props: SVGProps<SVGSVGElement>) => (
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
      d="M34 4.046c-2.215 0-4.096-1.739-4.096-4.046H4.149c0 2.304-1.933 4.046-4.149 4.046v2.621h34v-2.62ZM1.7 10l5.207 30H27.2l5.1-30h-30.6Zm26.586 3.326L27.152 20H6.954L5.82 13.326h22.466ZM9.787 36.667 8.653 30h16.8l-1.133 6.667H9.787Z"
      fill="#fff"
    />
  </svg>
);

export default IconSnack;
