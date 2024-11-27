import { css } from '@emotion/react'
import styled from '@emotion/styled'

/** body3 style */
const sm = css`
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
`

/** body2 style */
const md = css`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

const itemSize = {
  sm,
  md,
}

export const ListContainer = styled.ul`
  padding-left: 14px;
  margin: ${({ m }) => m || '0px'};
  margin-top: ${({ mt, m }) => (m ? '' : mt || '0px')};
  margin-bottom: ${({ mb, m }) => (m ? '' : mb || '0px')};
  margin-left: ${({ ml, m }) => (m ? '' : ml || '0px')};
  margin-right: ${({ mr, m }) => (m ? '' : mr || '0px')};
  list-style-type: ${({ type }) => (type === 'ordered' ? 'decimal' : type === 'none' ? 'none' : 'disc')};
  color: ${({ c }) => c || 'black'};

  li::marker {
    color: ${({ markerColor }) => markerColor || 'inherit'};
  }

  // first-child 사용 시 The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type" 워닝 발생
  // 렌더링 결과가 클라이언트와 서버 간에 다를 수 있다고 경고하는것.
  li:first-of-type {
    margin: 0px;
  }

  li:last-child {
    margin-bottom: 0px;
  }

  li {
    margin-top: ${({ gap }) => gap || '8px'};
    margin-bottom: ${({ gap }) => gap || '8px'};
  }

  ${({ size }) => itemSize[size] || sm}
`

export const ListItem = styled.li`
  word-break: keep-all;
  color: ${({ c }) => c || 'inherit'};
`
