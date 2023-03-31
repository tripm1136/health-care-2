import { Color } from "@/components/color/Color";
import IconKnife from "@/components/icon/IconKnife";
import IconSnack from "@/components/icon/IconSnack";
import styled from "styled-components";

const FilterButton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 116px);
  gap: 84px;
  height: 134px;
  justify-content: center;
  div {
    background: ${Color.buttonHome};
    width: 116px;
    height: 134px;
    -webkit-clip-path: polygon(
      50% 0%,
      101% 25%,
      100% 75%,
      50% 99%,
      1% 75%,
      1% 25%
    );
    clip-path: polygon(50% 0%, 101% 25%, 100% 75%, 50% 99%, 1% 75%, 1% 25%);
    .wrapper {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      font-family: "Inter";
      font-style: normal;
      justify-content: center;
      align-items: center;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: ${Color.white};
    }
  }
`;
export const FilterButtonComponent = () => {
  return (
    <FilterButton>
      <div>
        <div className="wrapper">
          <IconKnife fontSize={56} />
          Morning
        </div>
      </div>
      <div>
        <div className="wrapper">
          <IconKnife fontSize={56} />
          Lunch
        </div>
      </div>
      <div>
        <div className="wrapper">
          <IconKnife fontSize={56} />
          Dinner
        </div>
      </div>
      <div>
        <div className="wrapper">
          <IconSnack fontSize={40} />
          Snack
        </div>
      </div>
    </FilterButton>
  );
};
