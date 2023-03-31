import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 216px;
  height: 144px;
  background: #2e2e2e;
  padding: 8px 24px;
  display: grid;
  grid-tempalte-rows: max-content max-content;
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
`;

interface Props {
  title: string;
  description: string;
  imageUrl: string;
}
export const RecommentCard = ({ title, description, imageUrl }: Props) => {
  return (
    <Main>
      <div className="title">RECOMMENDED COLUMN</div>
    </Main>
  );
};
