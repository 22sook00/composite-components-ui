import { color } from '@/styles/values/color'
import styled from '@emotion/styled'
import SIZE from '@/components/layout/layout/constant/size'
import { css } from '@emotion/react'

const commonSection = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.border.default};
`

export const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: #fff;
  z-index: 10;
  min-width: ${SIZE.MIN_WIDTH}px;
`

export const TitleSection = styled.div`
  ${commonSection}
  width: 100%;
  height: 53px;
  padding: 5px 20px;

  background-color: #fff;
`

export const TabSection = styled.div`
  ${commonSection}
  padding: 0px 20px;
`
export const SubTitleSection = styled.div`
  ${commonSection}
  height: 48px;
  padding: 13px 20px;
`
