import { Flex } from "@/components/layout";
import React from "react";
import { Typography } from "@/components/typography/Typography";
import Tooltip from "@/components/overlay/tooltip/Tooltip";
import { Button } from "@/components/buttons";

const sampleContent = `무형 상품은 음원, 도면, 이미지 등 특정 파일을 판매 가능합니다.\n입금/결제 완료 시 판매자의 별도 승인 없이 다운로드 가능하며
마이페이지 주문내역 및 상품 상세페이지에서 다시 다운로드할 수도 있습니다.\n참고 : 무형상품의 경우 네이버 쇼핑 연동이 불가능하며, 네이버페이(주문형)\n을 사용 시 네이버페이 정책상 네이버페이 구매 버튼이 항상 숨김 처리됩니다.`;

const TooltipCanvas = () => {
  return (
    <>
      <Flex.Column gap={"8px"}>
        <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏬</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏬</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏬</Typography.H1>
        <Typography.H1 c={"#334155"}>스크롤⏬</Typography.H1>

        <Typography.Body1>기본 툴팁</Typography.Body1>

        <Tooltip
          title={"툴팁 타이틀"}
          content={"가나다라마바사아차카타파하"}
          linkText={"사이트 이동하기"}
          onLink={() => {}}
        />
        <Tooltip
          type={"info"}
          position={"right"}
          content={"가나다라마바사아차카타파하"}
          linkText={"사이트 이동하기"}
          onLink={() => {}}
        />

        {/*<Tooltip.Root>
          <Tooltip.Button>
            <Button>툴팁버튼</Button>
          </Tooltip.Button>
          <Tooltip>
            <Tooltip.Title>툴팁커스텀타이틀</Tooltip.Title>
            <Tooltip.Content>{sampleContent}</Tooltip.Content>
          </Tooltip>
        </Tooltip.Root>

        <Tooltip>
          <Tooltip.Title>툴팁커스텀타이틀</Tooltip.Title>
          <Tooltip.Content>{sampleContent}</Tooltip.Content>
        </Tooltip>*/}
      </Flex.Column>
      <Typography.H1 c={"#334155"}>스크롤⏬</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏬</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
      <Typography.H1 c={"#334155"}>스크롤⏫</Typography.H1>
    </>
  );
};

export default TooltipCanvas;
