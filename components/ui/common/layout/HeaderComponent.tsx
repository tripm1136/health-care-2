import IconInfo from "@/components/icon/IconInfo";
import IconMemo from "@/components/icon/IconMemo";
import IconMenu from "@/components/icon/IconMenu";
import styled from "styled-components";
import url from "../../../../assets/image/logo.png";
import IconChallenge from "../../../icon/IconChallenge";

import {
  MenuItemComponent,
  MenuItemProps,
} from "../menu-item/MenuItemComponent";

const MainHeader = styled.div`
  padding: 0 160px;
  height: 100%;
  display: grid;
  grid-template-columns: auto repeat(4, max-content);
  align-items: center;
  img {
    width: 109px;
    height: 34px;
    margin-top: 16px;
  }
`;
const menuItem: MenuItemProps[] = [
  {
    icon: IconMemo,
    title: "自分の記録",
    path: "/record",
  },
  {
    icon: IconChallenge,
    title: "チャレンジ",
    path: "/recomment",
  },
  {
    icon: IconInfo,
    title: "お知らせ",
    withCount: true,
  },
  {
    icon: IconMenu,
    isHamberger: true,
  },
];
export const HeaderComponent = () => {
  return (
    <MainHeader>
      <a href="/home">
        <img src={url.src} />
      </a>
      {menuItem.map((item, index) => (
        <MenuItemComponent key={index} {...item} />
      ))}
    </MainHeader>
  );
};
