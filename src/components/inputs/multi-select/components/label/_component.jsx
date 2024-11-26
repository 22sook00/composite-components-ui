import { useEffect, useState, useRef } from 'react'
import * as SC from '@/styles/components/common/select/MultiSelect.styles'
import { FlexSC, TextSC } from '@/styles/components/global'
import useMultiSelectStyle from '@/hooks/useMultiSelectStyle'

import Tooltip, { TooltipPrimitive } from '@atlaskit/tooltip'
import styled from '@emotion/styled'
import { Typography } from '@/components/common/typography/Typography'

export const InlineDialog = styled(TooltipPrimitive)({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 6,
  color: '#ffffff',
  fontSize: 12,
  fontWeight: 400,
  padding: '6px 14px',
  maxWidth: '340px',
})

const MultiSelectLabel = ({ option, selectStyle }) => {
  const ellipsisNameRef = useRef(null)

  const [isEllipsisActive, setIsEllipsisActive] = useState(false)
  const { disabled, label, isDefault } = option

  const { size, width } = selectStyle
  const { selectSize } = useMultiSelectStyle(size, width)

  useEffect(() => {
    const checkEllipsis = () => {
      if (ellipsisNameRef.current) {
        const hasEllipsis = ellipsisNameRef.current.scrollWidth > ellipsisNameRef.current.clientWidth
        setIsEllipsisActive(hasEllipsis)
      }
    }

    checkEllipsis()
    window.addEventListener('resize', checkEllipsis)

    return () => {
      window.removeEventListener('resize', checkEllipsis)
    }
  }, [label])

  return (
    <>
      {disabled ? (
        <SC.SelectMenuText width={size === 'sm' ? selectSize.ellipsisWidth + 90 : selectSize.ellipsisWidth} disabled>
          {isDefault && <b>{'[기본]'} </b>}
          {label}
        </SC.SelectMenuText>
      ) : (
        <Tooltip component={InlineDialog} content={isEllipsisActive ? label : ''}>
          {tooltipProps => (
            <FlexSC.FlexColumn {...tooltipProps} style={{ height: '32px' }}>
              <SC.MultiSelectOptionButton
                ref={ellipsisNameRef}
                style={{
                  textAlign: 'left',
                  width: 260,
                }}
              >
                {isDefault && <b>{'[기본]'} </b>}
                {label}
              </SC.MultiSelectOptionButton>
            </FlexSC.FlexColumn>
          )}
        </Tooltip>
      )}
    </>
  )
}
export default MultiSelectLabel
