import styled from "styled-components";
import topUrl from "../../assets/image/home/d01.png";
import manGaph from "../../assets/image/home/main_graph.png";
import { ListDataComponent } from "./data/ListData";
import { FilterButtonComponent } from "./filter-button/FilterButton";

const Main = styled.div`
  display: grid;
  grid-template-rows: 316px max-content auto;
  gap: 24px;
  margin-bottom: 64px;
`;

const Meal = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  background: #2e2e2e;
  .image1 {
    height: 316px;
    width: 100%;
    object-fit: fill;
  }
  .image2 {
    margin-left: 53px;
    margin-top: 12px;
    width: 100%;
    height: 293px;
    object-fit: fill;
  }
`;

export const HomeComponent = () => {
  return (
    <Main>
      <Meal>
        <img className="image1" src={topUrl.src} />
        <img className="image2" src={manGaph.src} />
      </Meal>
      <FilterButtonComponent />
      <ListDataComponent />
    </Main>
  );
};
