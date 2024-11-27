import React from "react";
import { Flex, Group } from "@/components/layout";

const GroupCanvas = () => {
  return (
    <Group>
      <Group.Header>
        <Group.Title>적립금 설정</Group.Title>
        <Group.Content>컨텐츠</Group.Content>
      </Group.Header>
      <Group.Body>
        <Group.Section align={"flex-start"}>
          <Group.Title type="sub" p={"4px 0"}>
            개별 적립금
          </Group.Title>
          <Group.Content>hi</Group.Content>
        </Group.Section>
      </Group.Body>
    </Group>
  );
};

export default GroupCanvas;
