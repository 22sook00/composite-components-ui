# Popup Component

모달보다 간단한, Alert 개념의 팝업을 띄울 때 사용.

## History

- 2024.8.29
  - Alert 공통 컴포넌트 생성
  - 전역에서 사용하도록 layout 컴포넌트에서 recoil로 관리
- 2024.09.25
  - Alert 에서 Popup 으로 명칭변경하며 합성컴포넌트로 리팩토링
    - title, message, description 으로 컴포넌트 분리
  - 기존 전역에서 관리하던 hook 에서 오픈 상태만 관리하는 훅으로 최소화 - useDisclosure Hook
- 2024.09.27
  - title,content 가 있을 경우 디폴트 팝업 사용하고, 커스텀으로 타이틀과 컨텐츠를 작성해야 할 경우에만 합성컴포넌트 적용하도록 수정
  - description 합성컴포넌트 삭제
  - 불필요한 css, import 삭제
    - 컴포넌트 속성 전달로 리팩토링
  - 취소버튼 두가지타입 추가
    - 버튼이 두개일 경우 row, col 총 두가지 버전에 따라 onCancelRow, onCancelCol 두가지 함수 props 추가
    - 확인, 취소버튼 텍스트 수정할 수 있도록 confirmText,cancelText 추가
    - 취소버튼이 생김에 따라 기존 close props 로 내려받던 확인함수 명칭을 onConfirm으로 변경
- 2024.09.30
  - 취소버튼 함수 row, col 로 나누던 부분 onCancel 하나로 통일
  - direction props 추가하여 취소버튼의 row, col 상태 결정하도록 수정
- 2924.10.08
  - direction 디폴트 'row' 설정, onCancel grid 에서 flex 처리 변경.

## Popup Component Props

| name        | type     | 설명                                                    | default |
| ----------- | -------- | ------------------------------------------------------- | ------- |
| title       | string   | 팝업 타이틀, 16자 글자제한                              |         |
| content     | string   | 팝업 content                                            |         |
| confirmText | string   | 확인버튼 텍스트. 버튼 형태에 따라 7 혹은 18 자 글자제한 | 확인    |
| cancelText  | string   | 취소버튼 텍스트. 버튼 형태에 따라 7 혹은 18 자 글자제한 | 취소    |
| direction   | string   | 취소버튼의 위치 결정, 'row' \| 'col'                    | row     |
| onConfirm   | function | 확인버튼 함수. useDisclosure 훅에서 close 전달가능      |         |
| onCancel    | function | 취소버튼 함수                                           |         |

## Example

```jsx
const [opened, { open, close, toggle }] = useDisclosure()
const sampleMessage = `전자결제(PG) 사용은\n신청서 제출 완료 및 가입비 결제가\n모두 완료되어야 사용 가능합니다.`
const sampleDesc = [
  '바로 오픈 서비스는 신용카드, 계좌이체, 가상 계좌, 결제수단만 바로 사용 가능합니다.',
  '간편결제의 경우 개별 계약 이후 사용 가능합니다.',
]
/*기본형태*/
{
  opened && <Popup  onConfirm={close} title={'타이틀'} content={sampleMessage} />
}

/*팝업 버튼형태*/
{
  opened && (
    <Popup
      onConfirm={/*확인버튼에 해당하는 함수전달*/}
      onCancel={close}
      direction={'col'}
      title={'타이틀'}
      content={sampleMessage}
      confirmText={'제출'}
      cancelText={'닫기'}
    />
  )
}

/*커스텀 타이틀 & 컨텐츠 형태*/
{
  opened && (
    <Popup  onConfirm={close}  onCancel={close} direction={'row'}>
      <Popup.Title>
        <Typography.Title1>커스텀 Title1</Typography.Title1>
        <Typography.Title2 ta={'center'}>커스텀 Title2</Typography.Title2>
        <Typography.Title3 ta={'right'}>커스텀 Title3</Typography.Title3>
      </Popup.Title>
      <Popup.Content>
        <FlexColumn>
          <Typography.Title3 c={'#334155'} lineClamp={2} style={{ marginBottom: '8px' }}>
            커스텀 Content ☺️ <br /> 당신의 온라인 비즈니스 파트너 큐샵
          </Typography.Title3>
          <Box>
            {sampleDesc?.length > 0 && (
              <List c={'#666666'} size={'sm'}>
                {sampleDesc.map((desc, index) => (
                  <List.Item key={`alert-${index}`}>{desc}</List.Item>
                ))}
              </List>
            )}
          </Box>
        </FlexColumn>
      </Popup.Content>
    </Popup>
  )
}
```

<br />

# usePopup 커스텀 훅

전역에 popup 배열을 관리하여 popup을 열고 닫을 수 있는 기능을 제공하는 커스텀 훅

## History

- 2024.11.06
  - usePopup 커스텀 훅 생성
  - 전역에서 popup 배열 사용하도록 recoil로 관리

## Return

- `popups`: 전역 상태에 열려 있는 팝업 배열
- `openConfirmPopup`: 확인 버튼 하나만 있는 기본 팝업을 엽니다.
- `openCancelConfirmPopup`: 확인, 취소 버튼 두 개가 있는 팝업을 엽니다.
- `closePopup`: ID를 통해 특정 팝업을 닫거나, ID가 없을 경우 가장 최근 팝업을 닫습니다.
- `closeAllPopup`: 열린 모든 팝업을 닫습니다.

## Example

```jsx
import usePopup from './usePopup'

const MyComponent = () => {
  const { openConfirmPopup, openCancelConfirmPopup, closePopup, closeAllPopup } = usePopup()

  // 확인 버튼만 있는 팝업 열기
  const handleOpenConfirmPopup = () => {
    openConfirmPopup({
      title: '확인 팝업',
      content: '작업을 진행하시겠습니까?',
      confirmText: '확인',
      onConfirm: () => console.log('확인됨'),
    })
  }

  // 확인/취소 버튼이 있는 팝업 열기
  const handleOpenCancelConfirmPopup = () => {
    openCancelConfirmPopup({
      title: '삭제 확인',
      content: '이 항목을 삭제하시겠습니까?',
      onConfirm: () => console.log('삭제됨'),
      onCancel: () => console.log('취소됨'),
    })
  }

  return (
    <div>
      <button onClick={handleOpenConfirmPopup}>확인 팝업 열기</button>
      <button onClick={handleOpenCancelConfirmPopup}>확인/취소 팝업 열기</button>
      <button onClick={closeAllPopup}>모든 팝업 닫기</button>
    </div>
  )
}
```

### openConfirmPopup

확인 버튼 하나만 있는 기본 팝업을 엽니다.

#### properties

| name        | type            | 설명                |
| ----------- | --------------- | ------------------- |
| id          | string          | 팝업 id             |
| title       | string          | 팝업 타이틀         |
| content     | string          | 팝업 content        |
| children    | React.ReactNode | 팝업 커스텀 content |
| confirmText | string          | 확인버튼 텍스트     |
| onConfirm   | function        | 확인버튼 함수       |

### openCancelConfirmPopup

확인, 취소 버튼 두 개가 있는 팝업을 엽니다.

#### properties

| name        | type            | 설명                                 |
| ----------- | --------------- | ------------------------------------ |
| id          | string          | 팝업 id                              |
| title       | string          | 팝업 타이틀                          |
| content     | string          | 팝업 content                         |
| children    | React.ReactNode | 팝업 커스텀 content                  |
| confirmText | string          | 확인버튼 텍스트                      |
| onConfirm   | function        | 확인버튼 함수                        |
| cancelText  | string          | 취소버튼 텍스트                      |
| direction   | string          | 취소버튼의 위치 결정, 'row' \| 'col' |
| onCancel    | function        | 취소버튼 함수                        |

### closePopup

ID를 통해 특정 팝업을 닫거나, ID가 없을 경우 가장 최근 팝업을 닫습니다.

#### properties

| name | type   | 설명    |
| ---- | ------ | ------- |
| id   | string | 팝업 id |
