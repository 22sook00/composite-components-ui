import { useState } from "react";
import { Button } from "@/components/buttons";
import { UploadIcon } from "@/components/icons/Upload";
import { Flex } from "@/components/layout";
import { Typography } from "@/components/typography/Typography";
import { OutlinkIcon } from "@/components/icons/Outlink";
import { StarIcon } from "@/components/icons/Star";

const ButtonsCanvas = () => {
  const [isLoading, setIsLoading] = useState(false);

  const linkIcon = <OutlinkIcon width={20} height={20} color="#555555" />;
  const uploadIcon = (
    <UploadIcon width={15} height={15} strokeColor={"#555555"} />
  );
  const startIcon = <StarIcon width={15} height={15} />;
  return (
    <Flex.Column gap={"20px"}>
      <Typography.Title1>버튼</Typography.Title1>
      <Button size="sm" variant="outlined" theme="gray">
        다운로드 내역
      </Button>
      <Button
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        size={"xl"}
        rightIcon={linkIcon}
        w={"80%"}
        m={"20px"}
      >
        버튼 텍스트
      </Button>
      <Button
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        size={"lg"}
        theme={"sub"}
        leftIcon={startIcon}
        rightIcon={uploadIcon}
      >
        버튼 텍스트
      </Button>
      <Button
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        variant={"outlined"}
        ml={"20px"}
      >
        버튼 텍스트 md
      </Button>
      <Button
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        size={"sm"}
        variant={"outlined"}
        theme="gray"
      >
        버튼 텍스트
      </Button>
      <Button
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
        disabled
      >
        버튼 텍스트
      </Button>
    </Flex.Column>
  );
};

export default ButtonsCanvas;
