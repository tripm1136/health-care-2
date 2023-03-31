import IconClose from "@/components/icon/IconClose";
import { Popover } from "antd";
import { useRouter } from "next/router";
import * as React from "react";
import styled from "styled-components";
import { DropDownMenu } from "../drop-down/DropDownMenu";

const Main = styled.a<{ isActive }>`
  cursor: pointer;
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

const WithCountMain = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  .title {
    font-family: "Hiragino Kaku Gothic Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    color: ${(p) => (p.isActive ? "#FF963C" : "#ffffff")};
  }
  .info-count {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #ea6c00;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* or 120% */

    text-align: center;
    top: 0;
    position: absolute;
    right: 0;

    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export interface MenuItemProps {
  title?: string;
  icon: any;
  path?: string;
  withCount?: boolean;
  isHamberger?: boolean;
}

export const MenuItemComponent = (props: MenuItemProps) => {
  const router = useRouter();
  const {
    title,
    icon,
    path = undefined,
    withCount = false,
    isHamberger = false,
  } = props;

  const isActive = router.pathname === path;
  const [open, isOpen] = React.useState(false);

  const renderIcon = () => {
    if (withCount) {
      return (
        <WithCountMain>
          {React.createElement(icon, { fontSize: 28 })}
          <div className="info-count">1</div>
        </WithCountMain>
      );
    }
    if (isHamberger) {
      return (
        <Popover
          open={open}
          destroyTooltipOnHide
          placement="bottomRight"
          content={<DropDownMenu />}
          onOpenChange={(e) => isOpen(e)}
        >
          {open && <IconClose fontSize={28} />}
          {!open && React.createElement(icon, { fontSize: 28 })}
        </Popover>
      );
    }
    return React.createElement(icon, { fontSize: 28 });
  };

  return (
    <Main href={path} isActive={isActive}>
      {renderIcon()}
      {title && <div className="title">{title}</div>}
    </Main>
  );
};
