import { BaseButton } from "@/components/buttons/button/Button.styles";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

const tabSize = {
  md: css`
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
  `,

  sm: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
  `,
};

export const Container = styled.div`
  width: ${({ w }) => w || "100%"};
  margin: ${({ m }) => m || "0px"};
  margin-top: ${({ mt, m }) => (m ? "" : mt || "0px")};
  margin-bottom: ${({ mb, m }) => (m ? "" : mb || "0px")};
  margin-left: ${({ ml, m }) => (m ? "" : ml || "0px")};
  margin-right: ${({ mr, m }) => (m ? "" : mr || "0px")};
`;

export const List = styled.ul`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap || "0px"};
  padding: 4px;
  padding: ${({ variant }) => variant === "line" && `0px`};
  border-radius: ${({ variant }) => variant === "button" && `6px`};
  border-bottom: ${({ variant, withBorder }) =>
    variant === "button" || !withBorder ? `none` : "1px solid #eeeeee"};
  background-color: ${({ variant, bg }) =>
    variant === "button" && (bg || "#eee")};

  list-style: none;

  > li {
    flex: ${({ grow }) => grow && `1 1 auto`};
  }
`;

export const Tab = styled.li`
  padding-bottom: ${({ spacing }) => spacing || "16px"};
  position: relative;

  ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    border-bottom: ${({ active, c }) =>
      active ? (c ? `2px solid ${c}` : `2px solid #9D42FB`) : "none"};
  }
`;

export const TabLine = styled(BaseButton)`
  height: auto;
  padding: 0px;
  color: ${({ active, c }) => (active ? c || "#9D42FB" : "#999999")};

  ${({ size }) => tabSize[size || "md"]}
`;

export const TabButton = styled(BaseButton)`
  height: auto;

  font-size: 13px;
  line-height: 18px;
  font-weight: 500;
  background-color: ${({ active }) => (active ? "#9D42FB" : "transparent")};
  color: ${({ active }) => (active ? "#ffffff" : "#AAAAAA")};

  &:hover {
    color: ${({ active }) => (active ? "#ffffff" : "#555555")};
  }
  &:disabled {
    color: #bbb;
  }
`;
