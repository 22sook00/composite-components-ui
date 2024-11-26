import { Flex } from '@/components/layout/flex/Flex'
import { color } from '@/styles/values/color'
import styled from '@emotion/styled'
import { MenuItem, createTheme } from '@mui/material'
import SIZE from '@/components/layout/layout/constant/size'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${SIZE.GNB.height}px;
  z-index: 11;
  border-bottom: 1px solid ${color.border.default};
`

export const LogWrapper = styled(Flex)`
  width: ${({ isMobile }) => (isMobile ? 'fit-content' : `${SIZE.LNB.width}px`)};
  border-right: ${({ isMobile }) => (isMobile ? 'none' : `1px solid ${color.border.default}`)};
`

export const Divider = styled.div`
  width: 1px;
  height: 15px;

  background-color: ${color.grayscale.gray[200]};
`

export const CustomMenuItem = styled(MenuItem)`
  padding: 6px 10px;
  font-weight: 500;
  margin: 0 10px;
  font-size: 14px;
`
export const getMenuTheme = (type = 'info') => {
  return createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({}) => ({
            width: 152,
            marginTop: 10,

            padding: '10px 0',
            borderRadius: 7,
            overflow: 'hidden',
            boxShadow: ' 0px 1px 11px 0px #D5D5D78A',
          }),
        },
      },
      MuiList: {
        styleOverrides: {
          root: ({}) => ({
            overflowY: 'auto',
            padding: 0,
            '& li': {
              borderRadius: 4,
              fontSize: 12,
              color: color.grayscale.gray[700],
              padding: '9px 10px',
            },
            '& li:hover': {
              color: color.grayscale.gray[800],
              background: `${color.grayscale.gray[100]} !important`,
            },
            '& li.Mui-selected': {
              background: color.primary.purple[300],
            },
            '& li.Mui-selected:hover': {
              background: `${color.primary.purple[300]} !important`,
            },
            '& li.Mui-disabled': {
              background: 'transparent',
            },
            '& li.Mui-focusVisible': {
              backgroundColor: 'transparent',
            },
          }),
        },
      },
    },
  })
}
