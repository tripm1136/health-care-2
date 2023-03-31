import { useRouter } from "next/router";
import * as React from "react";
import styled from "styled-components";

const Main = styled.a<{ isActive }>`
  height: 48px;
  pading: 11px;
  gap: 8px;
  display: grid;
  width: 160px;
  align-items: center;
  grid-template-columns: max-content max-content;
  text-decoration: none;
  .title {
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    color: ${(p) => (p.isActive ? "#FF963C" : "#ffffff")};
  }
`;

export interface MenuItemProps {
  title?: string;
  icon: any;
  path: string;
}

export const MenuItemComponent = (props: MenuItemProps) => {
  const router = useRouter();
  const { title, icon, path } = props;
  console.log(router.pathname === `/${path}`);

  const isActive = router.pathname === path;
  return (
    <Main href={path} isActive={isActive}>
      {React.createElement(icon, { fontSize: 28 })}
      {title && <div className="title">{title}</div>}
    </Main>
  );
};
