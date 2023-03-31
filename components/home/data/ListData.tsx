import { Color } from "@/components/color/Color";
import { Button } from "@/components/ui/common/commonUi";
import { listData } from "pages/api/mock-data";
import * as React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 960px;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 234px);
  justify-content: center;
  gap: 8px;
  img {
    width: 234px;
    height: 234px;
  }
`;

const Wrapper = styled.div`
  display: grid;
`;

const ItemCard = styled.div`
  position: relative;
  .card {
    position: absolute;
    width: 120px;
    height: 32px;
    left: 0px;
    bottom: 4px;
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
  }
`;
export const ListDataComponent = () => {
  const [data, updateData] = React.useState(listData());
  const onAddData = () => {
    updateData([...data, ...listData()]);
  };
  return (
    <Wrapper>
      <Main>
        {data.map((item, index) => (
          <ItemCard key={index}>
            <img src={item.url} />
            <div className="card">05.20.Morning</div>
          </ItemCard>
        ))}
      </Main>
      <Button onClick={() => onAddData()}>記録をもっと見る</Button>
    </Wrapper>
  );
};
