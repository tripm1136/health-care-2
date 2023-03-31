import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 216px;
  height: 144px;
  background: #2e2e2e;
  display: grid;
  grid-template-rows: 54px max-content 26px;
  align-content: center;
  gap: 8px;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    /* or 123% */

    text-align: center;
    letter-spacing: 0.11px;

    color: #ffcc21;
  }
  .divider {
    width: 56px;
    height: 1px;
    background: rgba(0, 0, 0, 0.0001);
    border: 1px solid #ffffff;
    margin: 0 auto;
    margin-top: 2px;
  }
  .des {
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height, or 144% */

    text-align: center;

    color: #ffffff;
  }
`;

interface Props {
  title: string;
  description: string;
}
export const RecommentCard = ({ title, description }: Props) => {
  return (
    <Main>
      <div className="title">{title}</div>
      <div className="divider" />
      <div className="des">{description}</div>
    </Main>
  );
};
