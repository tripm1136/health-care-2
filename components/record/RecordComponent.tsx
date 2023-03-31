import styled from "styled-components";
import imageChar from "../../assets/image/record/Chard.png";
import exercise from "../../assets/image/record/exercise.png";
import image1 from "../../assets/image/record/record1.png";
import image2 from "../../assets/image/record/record2.png";
import image3 from "../../assets/image/record/record3.png";
import { CardComponent } from "../ui/common/card/TopCard";
import { MyDiaryComponent } from "./diary/MyDiaryComponent";

const Main = styled.div`
  display: grid;
  grid-template-rows: max-content max-content auto;
  gap: 56px;
  padding: 56px 160px;
  width: max-content;
  margin: 0 auto;
  margin-bottom: 64px;

  .header {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 48px;
  }
  img {
    width: 960px;
    height: 304px;
  }
`;

export const RecordComponent = () => {
  return (
    <Main>
      <div className="header">
        <CardComponent
          title={"BODY RECORD"}
          description={"自分のカラダの記録"}
          imageUrl={image1.src}
        />
        <CardComponent
          title={"MY EXERCISE"}
          description={"自分の運動の記録"}
          imageUrl={image2.src}
        />
        <CardComponent
          title={"MY DIARY"}
          description={"自分の日記"}
          imageUrl={image3.src}
        />
      </div>
      <img src={imageChar.src} />
      <img src={exercise.src} />
      <MyDiaryComponent />
    </Main>
  );
};
