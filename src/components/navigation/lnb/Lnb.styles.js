import { color } from '@/styles/values/color'
import SIZE from '@/components/layout/layout/constant/size'
import styled from '@emotion/styled'

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: ${SIZE.LNB.width}px;
  height: 100dvh;
  padding-top: ${SIZE.GNB.height}px;
  background-color: white;
  border-right: 1px solid ${color.border.default};

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0px;
    right: ${({ open }) => (open ? '0%' : '-100%')};
    z-index: 99;
    width: 100%;
    height: 100dvh;
    padding-top: 0px;

    overflow: auto;
    transition: all 0.3s ease-in-out;
  }

  ::-webkit-scrollbar {
    display: none !important;
  }
  -ms-overflow-style: none !important; /* 인터넷 익스플로러 */
  scrollbar-width: none !important; /* 파이어폭스 */
`
