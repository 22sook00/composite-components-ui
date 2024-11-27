import { useState } from "react";

import { Tabs } from "@/components/navigation/tabs/Tab";
import { Typography } from "@/components/typography/Typography";
import * as LayoutSC from "@/components/layout/layout/Layout.styles";

import TabsCanvas from "./tabs-canvas/_component";
import ButtonsCanvas from "./buttons-canvas/_component";
import PopupCanvas from "./popup-canvas/_component";
import { Layout } from "../layout";
import TooltipCanvas from "./tooltip-canvas/_component";
import { Tooltip } from "../overlay/tooltip/Tooltip";
const Canvas = () => {
  return (
    <Layout>
      {/*<TabsCanvas />
      <ButtonsCanvas />
      <PopupCanvas />*/}
      <TooltipCanvas />
    </Layout>
  );
};

export default Canvas;
