import { Color } from "@/components/color/Color";
import styled from "styled-components";

export const Button = styled.button`
  background: ${Color.buttonBackground};
  width: 296px;
  height: 56px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 28px;
  color: ${Color.white};
`;
