import styled from "styled-components";

const MainHeader = styled.div`
  padding-left: 160px;
  height: 100%;
  display: grid;
  grid-template-columns: auto repeat(6, max-content);
  gap: 45px;
  width: max-content;
  align-items: center;
  div {
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.033px;
    color: #ffffff;
  }
`;
export const FooterComponent = () => {
  return (
    <MainHeader>
      <div>会員登録</div>
      <div>運営会社</div>
      <div>利用規約</div>
      <div>個人情報の取扱について</div>
      <div>特定商取引法に基づく表記</div>
      <div>お問い合わせ</div>
    </MainHeader>
  );
};
