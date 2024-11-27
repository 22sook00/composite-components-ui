import React, { useState, useRef } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import * as SC from "./Tooltip.styles";
import { CloseSquareIcon } from "@/components/icons/X";
import { Typography } from "@/components/typography/Typography";

import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/react-dom";
import useDisclosure from "@/hooks/use-disclosure/useDisclosure";
import useClickOutside from "@/hooks/use-click-outside/useClickOutside";
import { TextButton } from "@/components/buttons/textButton/TextButton";
import { IconButton } from "@/components/buttons/iconButton/IconButton";
import { HelpTipIcon, InfoTipIcon } from "@/components/icons/Help";
import { formatTextSlice } from "@/utils/formatUtil";

const Title = ({ children }) => {
  return <SC.Title>{children}</SC.Title>;
};

const Content = ({ children, maw, mah, pr }) => {
  return (
    <SC.Content maw={maw} mah={mah} pr={pr}>
      {children}
    </SC.Content>
  );
};
const Tooltip = ({
  title,
  content,
  linkText,
  onLink,
  position = "bottom",
  size = "md",
  type = "help",
  link,
  target = "_blank",
  maw,
  mah,
  children,
}) => {
  const tooltipRef = useRef(null); // 툴팁의 DOM 요소를 참조하기 위한 ref
  const hasHelpTitle = type !== "info" && title;
  const [opened, { close, toggle }] = useDisclosure();
  const { refs, floatingStyles } = useFloating({
    placement: position === "bottom" ? "bottom-start" : `${position}-start`,
    middleware: [offset(size === "sm" ? 4 : 8), flip(), shift()],
    whileElementsMounted: autoUpdate,
    strategy: "fixed",
  });
  // 툴팁 외부 클릭 시 닫기 처리
  useClickOutside([tooltipRef, refs.reference], close, opened);

  // setFloating과 tooltipRef를 합쳐서 ref로 전달
  const combinedRef = (node) => {
    tooltipRef.current = node; // tooltipRef 설정
    refs.setFloating(node); // setFloating 설정
  };

  return (
    <>
      <SC.ButtonContainer
        onClick={toggle}
        ref={refs.setReference}
        w={`20px`}
        h={`20px`}
      >
        <IconButton>
          {type === "help" && <HelpTipIcon size={size} />}
          {type === "info" && <InfoTipIcon size={size} />}
        </IconButton>
      </SC.ButtonContainer>

      <SC.Container ref={combinedRef} style={floatingStyles} isVisible={opened}>
        <SC.CloseContainer onClick={close}>
          <CloseSquareIcon height={20} width={20} color={"#aaaaaa"} />
        </SC.CloseContainer>
        {hasHelpTitle && (
          <SC.Title h={hasHelpTitle ? "22px" : "20px"}>
            <Typography.Title2 fw={500}>{title}</Typography.Title2>
          </SC.Title>
        )}
        {content && (
          <SC.Content
            pr={(!title || type === "info") && "24px"}
            maw={maw}
            mah={mah}
          >
            <Typography.Body3
              ws={"pre-line"}
              c={"#666666"}
              lineClamp={type === "info" ? 4 : "unset"}
            >
              {content}
            </Typography.Body3>
          </SC.Content>
        )}
        {children}
        {link && (
          <Link
            target={target}
            href={link}
            onClick={(event) => event.stopPropagation()}
          >
            <TextButton c={"#9D42FB"} size="sm">
              {formatTextSlice(linkText, 20)}
            </TextButton>
          </Link>
        )}
      </SC.Container>
    </>
  );
};

export default Tooltip;
