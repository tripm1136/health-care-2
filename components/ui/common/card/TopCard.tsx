import * as React from "react";
import styled from "styled-components";

const Main = styled.div<{ url }>`
  background: #2e2e2e;
  width: 240px;
  height: 240px;
  border: 24px solid #ffcc21;
  background-image: ${(p) => `url(${p.url})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: grid;
    grid-template-rows: max-content max-content;
    gap: 10px;
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.125px;
      color: #ffcc21;
    }
    .des {
      cursor: pointer;
      height: 24px;
      border-radius: 4px;
      background: #ff963c;
      width: 160px;
      font-family: "Hiragino Kaku Gothic Pro";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}
export const CardComponent = ({ title, description, imageUrl }: Props) => {
  return (
    <Main url={imageUrl}>
      <div className="wrapper">
        <div className="title">{title}</div>
        <div className="des">{description}</div>
      </div>
    </Main>
  );
};
