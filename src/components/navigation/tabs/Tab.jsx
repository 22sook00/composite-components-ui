import { createContext, useContext } from 'react'
import * as SC from './Tab.styles'

const TabContext = createContext()

const TabList = props => {
  const context = useContext(TabContext)
  const { variant = 'line', grow = false, withBorder = true, bg, ...rest } = context

  return (
    <SC.List variant={variant} {...props} grow={grow} withBorder={withBorder} bg={bg} {...rest}>
      {props.children}
    </SC.List>
  )
}

const Tab = props => {
  const context = useContext(TabContext)
  const { value: activeValue = '', variant = 'line', handleTabChange, spacing, c, size = 'md' } = context

  const { value = '', onClickTab = () => {}, disabled = false } = props

  const handleClick = value => {
    handleTabChange(value)
    if (onClickTab) onClickTab(value)
  }

  if (variant === 'line') {
    return (
      <SC.Tab active={activeValue === value} spacing={spacing} c={c}>
        <SC.TabLine
          active={activeValue === value}
          onClick={() => handleClick(value)}
          w="100%"
          c={c}
          size={size}
          disabled={disabled}
        >
          {props.children}
        </SC.TabLine>
      </SC.Tab>
    )
  }

  return (
    <SC.Tab spacing={'0px'}>
      <SC.TabButton active={activeValue === value} onClick={() => handleClick(value)} w="100%" disabled={disabled}>
        {props.children}
      </SC.TabButton>
    </SC.Tab>
  )
}

const TabMain = props => {
  const { onChange, children, tabValues = [], ...rest } = props

  const handleTabChange = value => {
    onChange(value)
  }

  return (
    <TabContext.Provider value={{ ...rest, handleTabChange }}>
      {children ? (
        <SC.Container {...rest}>{children}</SC.Container>
      ) : (
        <SC.Container {...rest}>
          <TabList {...rest}>
            {tabValues.map((el, i) => (
              <Tab key={`tab-value-${i}`} value={el.value ?? el}>
                {el.label ?? el}
              </Tab>
            ))}
          </TabList>
        </SC.Container>
      )}
    </TabContext.Provider>
  )
}

export const Tabs = Object.assign(TabMain, {
  List: TabList,
  Tab: Tab,
})
