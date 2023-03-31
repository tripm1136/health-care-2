import styled from "styled-components";
import topUrl from "../../assets/image/home/d01.png";
import manGaph from "../../assets/image/home/main_graph.png";
import { ScrollToTopComponent } from "../ui/common/scroll-top/ScrollTopComponent";
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
  grid-template-columns: 540px auto;
  background: #2e2e2e;
  .image1 {
    height: 316px;
    width: 540px;∏
    object-fit: cover;
  }
  .image2 {
    margin-left: 53px;
    margin-top: 12px;
    width: 589px;
    height: 293.62px;
    object-fit: cover;
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
      <ScrollToTopComponent />
    </Main>
  );
};
