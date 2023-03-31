import { Button } from "@/components/ui/common/commonUi";
import { fakeDiaryDat } from "pages/api/mock-data";
import * as React from "react";
import styled from "styled-components";
import { DiaryCard } from "./card/DiaryCard";
const Main = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    /* or 123% */
    letter-spacing: 0.11px;
    color: #414141;
  }
  .listData {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    gap: 12px;
  }
`;

export const MyDiaryComponent = () => {
  const [data, setData] = React.useState(fakeDiaryDat());
  const onAddData = () => {
    setData([...data, ...fakeDiaryDat()]);
  };
  return (
    <Main>
      <div className="title">MY DIARY</div>
      <div className="listData">
        {data.map((item, index) => (
          <DiaryCard {...item} key={index} />
        ))}
      </div>
      <Button onClick={() => onAddData()}>記録をもっと見る</Button>
    </Main>
  );
};
