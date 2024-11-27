import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import * as SC from "./Tooltip.styles";
import { CloseSquareIcon } from "@/components/icons/X";
import { Typography } from "@/components/typography/Typography";
import { getIconSize } from "@/utils/size-util/sizeUtil";
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

const TooltipContext = createContext();
const Root = ({ children, po = "bottom", size }) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState(po);

  useEffect(() => {
    setPosition(po);
  }, [po]);

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

  const contextValue = {
    opened,
    toggle,
    close,
    refs,
    floatingStyles,
    combinedRef,
    setPosition,
  };
  return (
    <TooltipContext.Provider value={contextValue}>
      <SC.Tooltip>{children}</SC.Tooltip>
    </TooltipContext.Provider>
  );
};

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
const Footer = ({ children, onClick, c = "#9D42FB", size = "sm" }) => {
  return (
    <TextButton c={c} size={size} onClick={onClick}>
      {children}
    </TextButton>
  );
};
const DefaultButton = ({ type = "help", size }) => {
  const { refs, toggle, combinedRef, close } = useContext(TooltipContext);
  const { width, height } = getIconSize(size);

  return (
    <SC.ButtonContainer
      onClick={toggle}
      ref={refs.setReference}
      w={`20px`}
      h={`20px`}
    >
      <IconButton onClick={toggle}>
        {type === "help" && <HelpTipIcon size={size} />}
        {type === "info" && <InfoTipIcon size={size} />}
      </IconButton>
    </SC.ButtonContainer>
  );
};

const Button = ({ children }) => {
  const { refs, toggle } = useContext(TooltipContext);

  const stopEventPropagation = (event) => {
    event.preventDefault();
    event.stopPropagation();

    toggle();
  };

  return (
    <SC.ButtonContainer ref={refs.setReference} onClick={stopEventPropagation}>
      {children}
    </SC.ButtonContainer>
  );
};
const TooltipContent = ({
  children,
  type,
  title,
  content,
  linkText = "자세히 알아보기",
  link,
  target = "_blank",
  maw,
  mah,
}) => {
  const { opened, close, floatingStyles, combinedRef } =
    useContext(TooltipContext);
  const hasHelpTitle = type !== "info" && title;

  return (
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
  );
};

const TooltipMain = ({ children, position = "bottom", ...props }) => {
  const context = useContext(TooltipContext);

  useEffect(() => {
    if (context && context.setPosition) {
      context.setPosition(position);
    }
  }, [position, context]);

  if (!context) {
    //툴팁 Root가 없을 경우. (커스텀 버튼 사용 안할경우)
    return (
      <Root po={position} size={props.size}>
        <DefaultButton type={props.type} size={props.size} />
        <TooltipContent {...props}>{children}</TooltipContent>
      </Root>
    );
  }
  return <TooltipContent {...props}>{children}</TooltipContent>;
};

export const Tooltip = Object.assign(TooltipMain, {
  Root,
  Title,
  Content,
  Footer,
  Button,
});
