import { listData } from "pages/api/mock-data";
import * as React from "react";
import styled from "styled-components";
import { RecommentCard } from "../ui/common/card/RecommentCard";
import { RecommentDataCard } from "../ui/common/card/RecommentDataCard";
import { Button } from "../ui/common/commonUi";

const Main = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 26px;
  width: max-content;
  margin: 56px auto;
  .topCard {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 32px;
  }
  .dataWrapper {
    display: flex;
    flex-direction: column;
  }
  .listData {
    width: 960px;
    margin: 0 auto;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 234px);
    justify-content: center;
    gap: 8px;
  }
`;

export const RecommentComponent = () => {
  const [data, updateData] = React.useState(listData());
  const onAddData = () => {
    updateData([...data, ...listData()]);
  };
  return (
    <Main>
      <div className="topCard">
        <RecommentCard title={"RECOMMENDED COLUMN"} description={"オススメ"} />
        <RecommentCard title={"RECOMMENDED DIET"} description={"ダイエット"} />
        <RecommentCard title={"RECOMMENDED BEAUTY"} description={"美容"} />
        <RecommentCard title={"RECOMMENDED HEALTH"} description={"健康"} />
      </div>
      <div className="dataWrapper">
        <div className="listData">
          {data.map((item, index) => (
            <RecommentDataCard imageUrl={item.url} key={index} />
          ))}
        </div>
        <Button onClick={() => onAddData()}>コラムをもっと見る</Button>
      </div>
    </Main>
  );
};
