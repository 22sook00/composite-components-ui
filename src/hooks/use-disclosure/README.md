# useDisclosure

상태를 열거나 닫거나 전환하는 방법을 제공하는 hook.  
[mantine useDisclosure hook 참고](https://mantine.dev/hooks/use-disclosure/)

## History

- 2024.09.25
  - useDisclosure hook 생성

## Params

| name         | type                                       | 설명                                |
| ------------ | ------------------------------------------ | ----------------------------------- |
| initialState | boolean                                    | 초기 상태 default: false            |
| callbacks    | { onOpen : Function , onClose : Function } | 상태가 변경될 때 호출되는 콜백 함수 |

## Return

| name | type                                                             | 설명                                                                       |
| ---- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| -    | [ boolean, {open: Function, close: Function, toggle: Function} ] | 현재 상태가 포함된 배열과 `open`, `close` 및 `toggle` 메서드가 포함된 객체 |

## Example

```js
const QuickStart = () => {
  const [opened, { toggle }] = useDisclosure(true)

  const arrowDownIcon = <AngularArrowDownIcon />
  const arrowUpIcon = <AngularArrowUpIcon />

  return (
    <div style={{ width: '100%' }}>
      <FlexSC.FlexBox justify={'space-between'} style={{ marginBottom: '20px' }}>
        <TextButton onClick={toggle} rightIcon={opened ? arrowUpIcon : arrowDownIcon}>
          {opened ? '요약하기' : '상세보기'}
        </TextButton>
      </FlexSC.FlexBox>
      <GridSC.GridBox col={'repeat(3, 1fr)'} gap={'30px'}>
        <SC.DashboardCardContainer>
          <TocOnboarding item="shop" open={opened} todoList={storeSettings} />
        </SC.DashboardCardContainer>
      </GridSC.GridBox>
    </div>
  )
}
```

```js
const Container = () => {
  /* 변수명은 컨벤션 정해서 통일하는것도 좋을것 같아요
   * 예를들어 어떤상태에 활성화 유무는 opened+"title" , open 함수는 open+"title" , close 함수는 close+"title"
   */
  const [openedShippingDialog, { open: openShippingDialog, close: closeShippingDialog }] = useDisclosure()
  const [openedNoticeDialog, { open: openNoticeDialog, close: closeNoticeDialog }] = useDisclosure()

  return (
    <>
      ...
      {openedShippingDialog && <ShippingDialog onClose={closeShippingDialog} selectedData={selectedData} />}
      {openedNoticeDialog && <NoticeDialog onClose={close} selectedData={selectedData} />}
    </>
  )
}


const ShippingDialog = ({ onClose, ...props}) => {
  ...

  const handleSubmitDeliveryMutation = useMutation(postDeliveryTemplates, {
    onSuccess: data => {
      alert('배송템플릿이 등록되었습니다.')
      queryClient.invalidateQueries('productShippingList')
      setSelectedData && setSelectedData()

      /* 기존에는 setState를 넘겨줘서 , onClose(false) or onClose()  등등 제각기 였지만 ,
       * 이제 파라메터 값 없이 함수만 선언하는 걸로 통일 가능
       */
      onClose()
    },
  })

  return (
    <>
      ...
    </>
  )
}
```
