import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/buttons";
import { Typography } from "@/components/typography/Typography";
import * as SC from "./_styles";
import { formatTextSlice } from "@/utils/formatUtil";

const Title = (props) => <SC.Title {...props}>{props.children}</SC.Title>;

const Content = (props) => <SC.Content {...props}>{props.children}</SC.Content>;

export const PopupMain = ({
  children,
  title,
  content,
  confirmText = "확인",
  cancelText = "취소",
  direction = "row",
  onConfirm,
  onCancel,
}) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setMounted(true);

    if (document) {
      const dom = document.getElementById("dialog-root");
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <SC.Popup>
        <SC.Background />
        <SC.Container>
          {title && (
            <Title>
              <Typography.Title1 ta={"center"}>
                {formatTextSlice(title, 16)}
              </Typography.Title1>
            </Title>
          )}
          {content && (
            <Content>
              <Typography.Body2 c="#666666" lineClamp={10} ta={"center"}>
                {content}
              </Typography.Body2>
            </Content>
          )}
          {children && <>{children}</>}

          <SC.Footer col={direction}>
            {onCancel && (
              <Button size={"lg"} w={"100%"} onClick={onCancel} theme={"gray"}>
                {formatTextSlice(cancelText, direction === "row" ? 7 : 18)}
              </Button>
            )}

            <Button size={"lg"} w={"100%"} onClick={onConfirm}>
              {formatTextSlice(
                confirmText,
                onCancel && direction === "row" ? 7 : 18
              )}
            </Button>
          </SC.Footer>
        </SC.Container>
      </SC.Popup>,
      ref.current
    );
  }

  return null;
};

export const Popup = Object.assign(PopupMain, {
  Title,
  Content,
});

export default Popup;
