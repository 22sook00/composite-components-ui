type InputType = 'tel' | 'number' | 'email' | 'url'
type InputMode = 'tel' | 'decimal' | 'email' | 'url' | 'text'

type UseInputMode = (type: InputType) => InputMode

type InputIconProps = {
  position: 'left' | 'right'
  type: InputType
  icon: JSX.Element
}

/** styles */
type InputStyleProps = {
  leftIcon: boolean | React.ReactNode
  rightIcon: boolean | React.ReactNode
  error: string | boolean
}

export { UseInputMode, InputIconProps, InputStyleProps }
