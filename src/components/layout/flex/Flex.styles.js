import styled from '@emotion/styled'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0px'};

  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || 'auto'};

  min-width: ${({ miw }) => miw || '0px'};
  max-width: ${({ maw }) => maw || ''};

  min-height: ${({ mih }) => mih || '0px'};
  max-height: ${({ mah }) => mah || ''};

  padding: ${({ p }) => p || '0px'};
  padding-top: ${({ pt, p }) => (p ? '' : pt || '0px')};
  padding-bottom: ${({ pb, p }) => (p ? '' : pb || '0px')};
  padding-left: ${({ pl, p }) => (p ? '' : pl || '0px')};
  padding-right: ${({ pr, p }) => (p ? '' : pr || '0px')};

  margin: ${({ m }) => m || '0px'};
  margin-top: ${({ mt, m }) => (m ? '' : mt || '0px')};
  margin-bottom: ${({ mb, m }) => (m ? '' : mb || '0px')};
  margin-left: ${({ ml, m }) => (m ? '' : ml || '0px')};
  margin-right: ${({ mr, m }) => (m ? '' : mr || '0px')};

  border: ${({ withBorder }) => (withBorder ? '1px solid #EEEEEE' : 'none')};
  border-radius: ${({ radius }) => radius || '0px'};

  background-color: ${({ bg }) => bg || 'transparent'};
`

export const FlexRowContainer = styled(FlexContainer)`
  > div {
    flex: ${({ grow }) => (grow ? 1 : '')};
  }
`
