import React, { createContext, useContext, useRef, useCallback, useState, useEffect } from 'react'
import Link from 'next/link'
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react'
import useDisclosure from '@/hooks/use-disclosure/useDisclosure'
import useClickOutside from '@/hooks/use-click-outside/useClickOutside'
import { CloseSquareIcon } from '@/components/icon/common/X'
import { HelpTipIcon, InfoTipIcon } from '@/components/icon/common/tip/Tip'
import { TextButton } from '@/components/common/buttons/textButton/TextButton'
import { IconButton } from '@/components/common/buttons/iconButton/IconButton'
import { Typography } from '@/components/common/typography/Typography'
import { formatTextSlice } from '@/js/util/formatUtil'
import { getIconSize } from '@/js/util/size-util/sizeUtil'
import * as SC from './Tooltip.styles'

const TooltipContext = createContext()

const Root = ({ children, po = 'bottom', size }) => {
  const [opened, { close, toggle }] = useDisclosure()
  const tooltipRef = useRef(null)

  const [position, setPosition] = useState(po)

  useEffect(() => {
    setPosition(po)
  }, [po])

  const { refs, floatingStyles } = useFloating({
    placement: position === 'bottom' ? 'bottom-start' : `${position}-start`,
    middleware: [offset(size === 'sm' ? 4 : 8), flip(), shift()],
    whileElementsMounted: autoUpdate,
    strategy: 'fixed',
  })

  const handleMergeRefs = useCallback((...refs) => {
    return element => {
      refs.forEach(ref => {
        if (typeof ref === 'function') {
          ref(element)
        } else if (ref != null) {
          ref.current = element
        }
      })
    }
  }, [])

  const mergedRefs = handleMergeRefs(refs.setFloating, tooltipRef)
  useClickOutside([tooltipRef, refs.reference], close, opened)

  const contextValue = {
    opened,
    toggle,
    close,
    refs,
    floatingStyles,
    tooltipRef: mergedRefs,
    setPosition,
  }

  return (
    <TooltipContext.Provider value={contextValue}>
      <SC.Tooltip>{children}</SC.Tooltip>
    </TooltipContext.Provider>
  )
}

const TooltipContent = ({
  children,
  type,
  title,
  content,
  linkText = '자세히 알아보기',
  link,
  target = '_blank',
  maw,
  mah,
}) => {
  const { opened, close, floatingStyles, tooltipRef } = useContext(TooltipContext)
  const hasHelpTitle = type !== 'info' && title

  //외부, 상위 영향받지 않도록 이벤트 버블링 방지
  const stopEventPropagation = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    opened && (
      <SC.Container onClick={stopEventPropagation} type={type} ref={tooltipRef} style={floatingStyles} visible={opened}>
        <SC.CloseContainer onClick={close}>
          <CloseSquareIcon height={hasHelpTitle ? 22 : 20} width={20} color={'#aaaaaa'} />
        </SC.CloseContainer>

        {hasHelpTitle && (
          <SC.Title h={hasHelpTitle ? '22px' : '20px'}>
            <Typography.Title2 fw={500}>{title}</Typography.Title2>
          </SC.Title>
        )}
        {content && (
          <SC.Content pr={(!title || type === 'info') && '24px'} maw={maw} mah={mah}>
            <Typography.Body3 ws={'pre-line'} c={'#666666'} lineClamp={type === 'info' ? 4 : 'unset'}>
              {content}
            </Typography.Body3>
          </SC.Content>
        )}
        {children}
        {link && (
          <Link target={target} href={link} onClick={event => event.stopPropagation()}>
            <TextButton c={'#9D42FB'} size="sm">
              {formatTextSlice(linkText, 20)}
            </TextButton>
          </Link>
        )}
      </SC.Container>
    )
  )
}

const DefaultButton = ({ type = 'help', size }) => {
  const { refs, toggle, opened, close } = useContext(TooltipContext)
  const { width, height } = getIconSize(size)

  return (
    <SC.ButtonContainer ref={refs.setReference} w={`${width}px`} h={`${height}px`}>
      <IconButton onClick={toggle}>
        {type === 'help' && <HelpTipIcon size={size} />}
        {type === 'info' && <InfoTipIcon size={size} />}
      </IconButton>
    </SC.ButtonContainer>
  )
}

const Title = ({ children }) => {
  return <SC.Title>{children}</SC.Title>
}

const Content = ({ children, maw, mah, pr }) => {
  return (
    <SC.Content maw={maw} mah={mah} pr={pr}>
      {children}
    </SC.Content>
  )
}

const Footer = ({ children, onClick, c = '#9D42FB', size = 'sm' }) => {
  return (
    <TextButton c={c} size={size} onClick={onClick}>
      {children}
    </TextButton>
  )
}

const Button = ({ children }) => {
  const { refs, toggle } = useContext(TooltipContext)

  const stopEventPropagation = event => {
    event.preventDefault()
    event.stopPropagation()

    toggle()
  }

  return (
    <SC.ButtonContainer ref={refs.setReference} onClick={stopEventPropagation}>
      {children}
    </SC.ButtonContainer>
  )
}

const TooltipMain = ({ children, position = 'bottom', ...props }) => {
  const context = useContext(TooltipContext)

  useEffect(() => {
    if (context && context.setPosition) {
      context.setPosition(position)
    }
  }, [position, context])

  if (!context) {
    //툴팁 Root가 없을 경우. (커스텀 버튼 사용 안할경우)
    return (
      <Root po={position} size={props.size}>
        <DefaultButton type={props.type} size={props.size} />
        <TooltipContent {...props}>{children}</TooltipContent>
      </Root>
    )
  }

  return <TooltipContent {...props}>{children}</TooltipContent>
}

export const Tooltip = Object.assign(TooltipMain, {
  Root,
  Title,
  Content,
  Footer,
  Button,
})
