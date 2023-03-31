import { Color } from "@/components/color/Color";
import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 234px;
  height: 222px;
  display: grid;
  grid-template-rows: 144px auto;
  align-content: center;
  position: relative;
  gap: 0px;
  img {
    width: 234px;
    height: 144px;
  }
  .title {
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    /* or 147% */

    letter-spacing: 0.075px;

    color: #414141;
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
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 8px;
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 22px;
    /* or 183% */

    letter-spacing: 0.06px;

    color: #ff963c;
  }
  .card {
    position: absolute;
    width: 144px;
    height: 32px;
    bottom: 72px;
    color: ${Color.white};
    background: #ffcc21;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* identical to box height, or 120% */
    letter-spacing: 0.15px;
    color: #ffffff;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 8px;
  }
`;

interface Props {
  imageUrl: string;
}
export const RecommentDataCard = ({ imageUrl }: Props) => {
  return (
    <Main>
      <img src={imageUrl} />
      <div className="card">
        <div> 2021.05.17</div>
        <div>23:25</div>
      </div>
      <div className="title">
        魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
      </div>
      <div className="des">
        <div>#魚料理</div>
        <div>#和食</div>
        <div>#DHA</div>
      </div>
    </Main>
  );
};
