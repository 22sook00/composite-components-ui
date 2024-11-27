import { useState } from "react";
import { Tabs } from "@/components/navigation/tabs/Tab";
import { Typography } from "@/components/typography/Typography";
import { Flex } from "@/components/layout";

const TabsCanvas = () => {
  const [tabValue, setTabValue] = useState("value1");

  return (
    <Flex.Column gap={"8px"}>
      <Typography.Title1 w={"fit-content"}>탭</Typography.Title1>
      <Tabs
        value={tabValue}
        variant="button"
        onChange={setTabValue}
        justify="flex-end"
        gap="30px"
      >
        <Tabs.List>
          <Tabs.Tab value="value1" onClickTab={(v) => alert(v)}>
            value1
          </Tabs.Tab>
          <Tabs.Tab value="value2">value2</Tabs.Tab>
          <Tabs.Tab value="value3" disabled>
            value3
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Flex.Column>
  );
};

export default TabsCanvas;
