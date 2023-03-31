import * as React from "react";
import styled from "styled-components";
import IconUp from "../../../icon/IconUp";

const Main = styled.div`
  cursor: pointer;
  position: absolute;
  right: calc((100% - 960px) / 2 - 80px);
  top: 60%;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.0001);
  border: 1px solid #777777;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollToTopComponent = () => {
  const onScrollToTop = () => {
    const el = document.getElementById("body_component");
    el.scrollTop = 0;
  };
  return (
    <Main onClick={() => onScrollToTop()}>
      <IconUp fontSize={14} />
    </Main>
  );
};
