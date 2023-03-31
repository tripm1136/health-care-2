import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #707070;
  width: 231px;
  height: 231px;
  padding: 16px;
  display: grid;
  grid-template-rows: max-content max-content;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* or 122% */

  letter-spacing: 0.09px;

  color: #414141;
  .last {
    margin-top: 8px;
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 17px;
    /* or 142% */

    letter-spacing: 0.06px;

    color: #414141;
  }
`;
interface Props {
  date: string;
  time: string;
  description: string;
}
export const DiaryCard = ({ date, time, description }: Props) => {
  return (
    <Main>
      <div>{date}</div>
      <div>{time}</div>
      <div className="last">{description}</div>
    </Main>
  );
};
