import SIZE from "./constant/size";
import styled from "@emotion/styled";

export const MainContainer = styled.div`
  flex: 1;
  height: 100vh;
  padding-top: ${SIZE.GNB.height}px;
  background-color: #fff;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none !important;
  }

  -ms-overflow-style: none !important; /* 인터넷 익스플로러 */
  scrollbar-width: none !important; /* 파이어폭스 */
`;

export const Main = styled.main`
  min-width: 768px;
  min-height: 100%;
`;

/** to do 채널 톡 분리 */
export const ChannelTalkIcon = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 40%;
  background-color: white;
  overflow: hidden;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;

  opacity: ${({ isView }) => (isView ? 0.7 : 0)};
  cursor: pointer;

  :hover {
    opacity: ${({ isView }) => (isView ? 1 : 0)};
  }

  img {
    object-fit: contain;
  }
`;
