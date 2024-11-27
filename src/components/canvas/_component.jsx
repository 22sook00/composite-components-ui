import TabsCanvas from "./tabs-canvas/_component";
import ButtonsCanvas from "./buttons-canvas/_component";
import PopupCanvas from "./popup-canvas/_component";
import { Layout } from "../layout";
import TooltipCanvas from "./tooltip-canvas/_component";

import GroupCanvas from "./group-canvas/_component";
import InputCanvas from "./input-canvas/_component";
const Canvas = () => {
  return (
    <Layout>
      <TabsCanvas />
      <InputCanvas />
      <ButtonsCanvas />
      <PopupCanvas />
      <TooltipCanvas />
      <GroupCanvas />
    </Layout>
  );
};

export default Canvas;
