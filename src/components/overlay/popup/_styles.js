import styled from '@emotion/styled'

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Container = styled.div`
  width: 320px;
  padding: 32px 16px 24px 16px;
  background: #fff;
  border-radius: 12px;
  z-index: 101;
`
export const Title = styled.div`
  margin-bottom: ${({ mb }) => mb || '8px'};
`
export const Content = styled.div`
  margin-bottom: ${({ mb }) => mb || '16px'};
  padding: 0 8px;
  p {
    white-space: pre-line;
  }
`
export const Footer = styled.div`
  padding-top: 16px;
  gap: 8px;
  display: flex;
  flex-direction: ${({ col }) => (col === 'row' ? 'row' : 'column-reverse')};
  flex-wrap: wrap-reverse;
  button {
    flex: 1;
  }
`
