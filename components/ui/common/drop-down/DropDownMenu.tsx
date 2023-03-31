import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 280px;
  display: grid;
  grid-auto-flow: row;
  gap: 0px;
  .menu-item {
    cursor: pointer;
    background: #777777;
    padding: 23px 32px;
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 26px;
    /* identical to box height, or 144% */

    color: #ffffff;
  }
  .divider {
    background: #2e2e2e;
    width: 100%;
    mix-blend-mode: normal;
    opacity: 0.25;
    height: 1px;
  }
`;

export const DropDownMenu = () => {
  return (
    <Main>
      <div className="menu-item">自分の記録</div>
      <div className="divider" />
      <div className="menu-item">体重グラフ</div>
      <div className="divider" />
      <div className="menu-item">目標</div>
      <div className="divider" />
      <div className="menu-item">目標</div>
      <div className="divider" />
      <div className="menu-item">コラム一覧</div>
      <div className="divider" />
      <div className="menu-item">設定</div>
    </Main>
  );
};
