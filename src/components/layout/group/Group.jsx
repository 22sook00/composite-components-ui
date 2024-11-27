import { Children } from "react";
import { Flex } from "@/components/layout";
import { Typography } from "@/components/typography/Typography";
import * as SC from "./Group.styles";

const GroupContainer = (props) => {
  const { children, style, ...rest } = props;
  return (
    <Flex direction="column" bg="white" radius="8px" style={style} {...rest}>
      {children}
    </Flex>
  );
};

const GroupHeader = (props) => {
  const {
    children,
    align = "center",
    gap = "20px",
    withBorder = true,
    ...rest
  } = props;
  return (
    <Flex
      withBorder={withBorder}
      p="20px"
      align={align}
      gap={gap}
      {...rest}
      style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
    >
      {children}
    </Flex>
  );
};

const GroupBody = (props) => {
  const { children, align = "center", gap = "20px", ...rest } = props;
  return (
    <Flex
      direction="column"
      p="20px"
      justify="center"
      align={align}
      gap={gap}
      {...rest}
    >
      {children}
    </Flex>
  );
};

const GroupSection = (props) => {
  const { children, align = "center", gap = "20px", ...rest } = props;
  return (
    <Flex align={align} gap={gap} {...rest}>
      {children}
    </Flex>
  );
};

const GroupTitle = (props) => {
  const { children, type = "main", required = false, ...rest } = props;
  return (
    <Flex w="160px" align="center" gap="4px" {...rest}>
      {Children.map(children, (child, index) => {
        return index === 0 ? (
          <div>
            <Typography.Title2
              fw={type === "sub" ? 500 : 600}
              c={type === "sub" ? "#666666" : "#121212"}
              ws={"pre-line"}
              lineClamp={2}
            >
              {child}
            </Typography.Title2>
          </div>
        ) : (
          <>{child}</>
        );
      })}
      {required && <SC.Asterisk>*</SC.Asterisk>}
    </Flex>
  );
};

const GroupContent = (props) => {
  const { children, ...rest } = props;
  return (
    <Flex align="center" gap="16px" {...rest} style={{ flex: 1 }}>
      {children}
    </Flex>
  );
};

export const Group = Object.assign(GroupContainer, {
  Header: GroupHeader,
  Body: GroupBody,
  Section: GroupSection,
  Title: GroupTitle,
  Content: GroupContent,
});
