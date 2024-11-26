import { color } from '@/styles/values/color'
import SIZE from '@/components/layout/layout/constant/size'
import styled from '@emotion/styled'
import * as InputSC from '@/styles/components/common/input/Input.styles'

export const Container = styled.div`
  position: relative;

  @media screen and (max-width: 768px) {
    position: sticky;
    top: 0px;
    z-index: 13;
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 24px;

  width: 100%;
  height: ${SIZE.LNB_SEARCH.height}px;
  padding-inline: 20px;

  border-bottom: 1px solid ${color.border.default};
  background-color: white;

  @media screen and (max-width: 768px) {
    border: none;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  flex: 1;

  display: flex;
  align-items: center;
  height: 100%;
`

export const SearchInput = styled(InputSC.InputBox)`
  width: 100%;
  padding-left: 36px;
  font-size: 14px;
`

export const SearchResultContainer = styled.div`
  position: absolute;
  top: 41px;
  left: 8%;
  z-index: 13;

  width: calc(100% - 38px);
  padding-top: 8px;
`

export const SearchResult = styled.ul`
  display: flex;
  flex-direction: column;

  min-height: 115px;
  max-height: 700px;

  padding-bottom: 8px;

  border: 1px solid #eeeeee;

  border-radius: 4px;
  background-color: #fff;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none !important;
  }
  -ms-overflow-style: none !important; /* 인터넷 익스플로러 */
  scrollbar-width: none !important; /* 파이어폭스 */

  a:first-of-type {
    li {
      margin-top: 8px;
    }
  }

  .tab-title {
    padding: 7px 16px;
    margin-top: 16px;
    cursor: pointer;
  }

  .menu-item {
    padding: 5px 16px;
    cursor: pointer;
  }

  .text_highlight {
    color: ${color.primary.purple[300]};
  }

  [data-selected='true'] {
    background-color: #f8f8f8;
  }

  @media screen and (max-width: 768px) {
    max-height: none;
    border: none;

    a:first-of-type {
      li {
        margin-top: 12px;
      }
    }

    .tab-title {
      margin-top: 24px;
    }

    .menu-item {
      padding: 13px 20px;
    }
  }
`

export const MobileSearchResultContainer = styled.div`
  position: absolute;

  z-index: 13;
  width: 100%;
  height: calc(100dvh - ${SIZE.LNB_SEARCH.height}px);
  background-color: #fff;
  overflow-y: auto;
`
