import React, { ReactNode } from "react";
import styled from "styled-components";
import { Color } from "../../../color/Color";
import { ScrollToTopComponent } from "../scroll-top/ScrollTopComponent";
import { FooterComponent } from "./FooterComponent";
import { HeaderComponent } from "./HeaderComponent";

interface Props {
  children?: ReactNode;
}

const Header = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  background: ${Color.header_footer};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
  height: 64px;
  z-index: 5;
`;
const Footer = styled.div`
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: ${Color.header_footer};
  height: 128px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.160784);
  position: fixed;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Body = styled.div`
  overflow: auto;
  margin-top: 64px;
  margin-bottom: 128px;
  width: 100%;
  height: calc(100vh - 64px - 128px);
`;
export const Layout = ({ children }: Props) => {
  return (
    <Main>
      <Header>
        <HeaderComponent />
      </Header>
      <Body id="body_component">
        {children}
        <ScrollToTopComponent />
      </Body>
      <Footer>
        <FooterComponent />
      </Footer>
    </Main>
  );
};
