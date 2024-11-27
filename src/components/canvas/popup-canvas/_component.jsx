import React from "react";
import { Flex } from "@/components/layout";
import { Popup, usePopup } from "@/components/overlay/popup";
import { Button } from "@/components/buttons";
import useDisclosure from "@/hooks/use-disclosure/useDisclosure";
import { Typography } from "@/components/typography/Typography";

const PopupCanvas = () => {
  const [opened, { close, toggle }] = useDisclosure();
  const [rowOpened, { close: rowClose, toggle: rowToggle }] = useDisclosure();
  const [colOpened, { close: colClose, toggle: colToggle }] = useDisclosure();
  const [customOpened, { close: customClose, toggle: customToggle }] =
    useDisclosure();

  const sampleMessage = `전자결제(PG) 사용은\n신청서 제출 완료 및 가입비 결제가\n모두 완료되어야 사용 가능합니다.`;
  const sampleDesc = [
    "바로 오픈 서비스는 신용카드, 계좌이체, 가상 계좌, 결제수단만 바로 사용 가능합니다.",
    "간편결제의 경우 개별 계약 이후 사용 가능합니다.",
  ];

  const { openConfirmPopup, openCancelConfirmPopup } = usePopup();

  return (
    <Flex.Column gap={"8px"}>
      <Typography.Title1>팝업</Typography.Title1>
      <Button onClick={toggle}>기본 팝업오픈</Button>
      {opened && (
        <Popup
          confirmText={"가나다라마바사아자차카타파하제출"}
          onConfirm={close}
          title={"전자 결제 신청이 완료되었습니다"}
          content={sampleMessage}
        />
      )}
      <Button onClick={rowToggle}>취소버튼 Row 형태 팝업오픈</Button>
      {rowOpened && (
        <Popup
          onCancel={rowClose}
          onConfirm={rowClose}
          title={"전자 결제 신청이 완료되었습니다"}
          content={sampleMessage}
          cancelText={"취소가나다라마바사아자차카타파하취소"}
          confirmText={"제출가나다라마바사아자차카타파하제출"}
        />
      )}

      <Button onClick={colToggle}>취소버튼 Col 형태 팝업오픈</Button>
      {colOpened && (
        <Popup
          onCancel={colClose}
          onConfirm={colClose}
          direction={"col"}
          title={"전자 결제 신청이 완료되었습니다"}
          content={sampleMessage}
          cancelText={"취소가나다라마바사아자차카타파하취소"}
          confirmText={"제출가나다라마바사아자차카타파하제출"}
        />
      )}

      <Button onClick={customToggle}>커스텀 팝업오픈</Button>
      {customOpened && (
        <Popup onConfirm={customClose} onCancel={customClose} direction={"row"}>
          <Popup.Title>
            <Typography.Title3 ta={"center"}>커스텀 Title3</Typography.Title3>
          </Popup.Title>
          <Popup.Content>
            <Flex.Column gap={"8px"}>hihi</Flex.Column>
          </Popup.Content>
        </Popup>
      )}

      <Button
        onClick={() => {
          openConfirmPopup({
            title: "타이틀",
            content: "히히히히히하하하하하호호호호호",
          });
        }}
      >
        전역 기본 팝업오픈
      </Button>
      <Button
        onClick={() => {
          openCancelConfirmPopup({
            title: "타이틀",
            content: "히히히히히하하하하하호호호호호",
          });
        }}
      >
        전역 취소 팝업오픈
      </Button>
      <Button
        onClick={() => {
          openCancelConfirmPopup({
            title: "첫 번째 팝업",
            content: "히히히히히하하하하하호호호호호",
            confirmText: "두 번째 팝업 열기",
            onConfirm: () => {
              openConfirmPopup({
                content: "다중 팝업 입니다.",
              });
            },
          });
        }}
      >
        전역 다중 팝업오픈
      </Button>
    </Flex.Column>
  );
};

export default PopupCanvas;
