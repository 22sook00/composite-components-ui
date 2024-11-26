# useClickOutside

타겟 외부 클릭 시 닫히는 훅

## History

- 2024.10.02
  - useClickOutside hook 생성
- 2024.10.07
  - 여러개의 Ref 값을 받을 수 있도록 ref 에서 배열 형태의 refs 로 props 변경.

## Params

| name    | type                                | 설명                           |
| ------- | ----------------------------------- | ------------------------------ |
| refs    | Array<React.RefObject<HTMLElement>> | 외부 클릭 타겟이 되는 dom 배열 |
| handler | () => void                          | 외부 클릭시 발생하는 함수      |
| isOpen  | boolean                             | 초기 상태 default: false       |


## Example

```js
import useClickOutside from '@/hooks/use-click-outside/useClickOutside'
import useDisclosure from '@/hooks/use-disclosure/useDisclosure'

const Tooltip = () => {
  const [opened, { close, toggle }] = useDisclosure()
  const buttonRef = useRef(null)
  const tooltipRef = useRef(null)
  useClickOutside([tooltipRef, buttonRef], close, opened)

  return (
    <div style={{ width: '100%' }}>
    <SC.ButtonContainer ref={buttonRef}>
      <IconButton onClick={toggle}>
        {type === 'help' && <HelpTipIcon height={20} width={20} color={'#aaaaaa'} />}
        {type === 'info' && <InfoTipIcon height={20} width={20} color={'#aaaaaa'} />}
      </IconButton>
    </SC.ButtonContainer>
      {opened && (
        <SC.Container ref={tooltipRef} visible={opened} >
          <SC.CloseContainer onClick={close}>
            <CloseSquareIcon height={hasHelpTitle ? 22 : 20} width={20} color={'#aaaaaa'} />
          </SC.CloseContainer>
          ...
        </SC.Container>
      )}
    </div>
  )
}
```
