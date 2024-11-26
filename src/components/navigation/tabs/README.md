# Tabs Component

프로젝트에 사용되는 Tab Component

## History

- 2024.10.4
  - Tab component 생성
  - tab 사이즈 확장성 있게 수정 필요
  - 디자인 리뷰 받고 추가 작업 필요
  - 인디케이터 애니메이션 추가 작업 필요
- 2024.10.7
  - Tab style css 수정
    - indicator ::before 태그로 수정
  - Tab container margin 값 조정할수 있는 props 추가
  - withBorder props 추가 (tab container border bottom 유무)
  - size props 추가
  - tabValues 이슈 수정
    - tabValues 배열에 value 값이 falsy 허용 nulish 값만 체크
    - `el.value || el` > `el.value ?? el` 로 수정
- 2024.11.13
  - 각 탭 disabled props 추가
  - bgColor props 추가
  - bgColor -> bg 네이밍 변경

## Tabs Component Props

### Tabs props

| name       | type           | 설명                                                                              |
| ---------- | -------------- | --------------------------------------------------------------------------------- |
| w          | string         | tab Container 의 크기를 설정 (default: 100%)                                      |
| size       | string         | tab 사이즈 md , sm (default: md)                                                  |
| value      | string, number | tab value , 활성화된 현재 tab                                                     |
| onChange   | function       | tab value onChange 함수                                                           |
| tabValues  | array          | tab value list (label, value 객체 배열로 보내도 되고, 그냥 string 배열로도 가능 ) |
| variant    | string         | tab 종류 line 또는 button (default: line)                                         |
| justify    | string         | tab 요소들의 정렬 방법 (default: flex-start)                                      |
| gap        | string         | tab 요소들간의 간격 (default: 0px)                                                |
| grow       | boolean        | tab 요소들의 빈공간 차지 여부 (default:false)                                     |
| spacing    | string         | tab 요소와 인디케이터의 간격 , line tab 에서만 활성화 됨 (default: 16px)          |
| withBorder | boolean        | tab 기본 border bottom 유무 (default: true)                                       |
| bg         | string         | background color 속성 <br/> 기본값 : #F4F4F6                                      |
| c          | string         | tab 글자색과 , 인디케이터 색상 (default: primary purple 300)                      |
| m          | string         | margin (px) <br/> 기본값 : 0px                                                    |
| mt         | string         | margin-top (px) <br/> 기본값 : 0px                                                |
| mb         | string         | margin-bottom (px) <br/> 기본값 : 0px                                             |
| ml         | string         | margin-left (px) <br/> 기본값 : 0px                                               |
| mr         | string         | margin-right (px) <br/> 기본값 : 0px                                              |

### Tabs.Tab props

| name       | type           | 설명                             |
| ---------- | -------------- | -------------------------------- |
| value      | string, number | 해당 tab value                   |
| onClickTab | function       | 해당 tab click callback function |
| disabled   | boolean        | 디폴트 false                     |

## Compound components

- Tabs.List
  - Tab 들 묶는 컨테이너 (flex 속성)
- Tabs.Tab
  - 탭 요소들 (버튼 or 라인 형식)
  - 각탭 요소들의 value 값 + 라벨 설정
  - onChange callback 함수 추가 가능

## Example

```js
const TabPage = () => {
  const [tabValue, setTabValue] = useState('value1')
  const [lnbValue, setLnbValue] = useState('운영관리')

  return (
    <Page>
      <FlexSC.FlexColumn
        align={'flex-start'}
        gap="30px"
        style={{ width: '100%', backgroundColor: 'white', padding: '10px' }}
      >
        <Tabs w="240px" value={lnbValue} onChange={setLnbValue} variant="button">
          <Tabs.List>
            <Tabs.Tab value="운영관리">
              <FlexSC.FlexColumn gap="6px">
                <ShopIcon color={lnbValue !== '운영관리' ? '#959595' : 'white'} />
                <Typography.Title2 c={lnbValue !== '운영관리' ? '#B2B2B2' : 'white'} ta="center">
                  운영관리
                </Typography.Title2>
              </FlexSC.FlexColumn>
            </Tabs.Tab>
            <Tabs.Tab value="상점설정">
              <FlexSC.FlexColumn gap="6px">
                <NavSettingIcon color={lnbValue !== '상점설정' ? '#B2B2B2' : 'white'} />
                <Typography.Title2 c={lnbValue !== '상점설정' ? '#B2B2B2' : 'white'} ta="center">
                  상점설정
                </Typography.Title2>
              </FlexSC.FlexColumn>
            </Tabs.Tab>
            <Tabs.Tab value="성장센터">
              <FlexSC.FlexColumn gap="6px">
                <PartnerIcon color={lnbValue !== '성장센터' ? '#959595' : 'white'} />
                <Typography.Title2 ta="center" c={lnbValue !== '성장센터' ? '#959595' : 'white'}>
                  성장센터
                </Typography.Title2>
              </FlexSC.FlexColumn>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Tabs w="240px" grow value={lnbValue} onChange={setLnbValue} spacing="30px">
          <Tabs.List>
            <Tabs.Tab value="운영관리">
              <FlexSC.FlexColumn gap="6px">
                <ShopIcon color={lnbValue !== '운영관리' ? '#959595' : '#9D42FB'} />
                <Typography.Title2 c={lnbValue !== '운영관리' ? '#B2B2B2' : '#9D42FB'} ta="center">
                  운영관리
                </Typography.Title2>
              </FlexSC.FlexColumn>
            </Tabs.Tab>
            <Tabs.Tab value="상점설정">
              <FlexSC.FlexColumn gap="6px">
                <NavSettingIcon color={lnbValue !== '상점설정' ? '#B2B2B2' : '#9D42FB'} />
                <Typography.Title2 c={lnbValue !== '상점설정' ? '#B2B2B2' : '#9D42FB'} ta="center">
                  상점설정
                </Typography.Title2>
              </FlexSC.FlexColumn>
            </Tabs.Tab>
            <Tabs.Tab value="성장센터">
              <FlexSC.FlexColumn gap="6px">
                <PartnerIcon color={lnbValue !== '성장센터' ? '#959595' : '#9D42FB'} />
                <Typography.Title2 ta="center" c={lnbValue !== '성장센터' ? '#959595' : '#9D42FB'}>
                  성장센터
                </Typography.Title2>
              </FlexSC.FlexColumn>
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Tabs value={tabValue} variant="button" onChange={setTabValue} justify="flex-end" gap="30px">
          <Tabs.List>
            <Tabs.Tab value="value1" onClickTab={v => alert(v)}>
              value1
            </Tabs.Tab>
            <Tabs.Tab value="value2">value2</Tabs.Tab>
            <Tabs.Tab value="value3">value3</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Tabs value={tabValue} justify="center" tabValues={['value1', 'value2', 'value3']} onChange={setTabValue} />
        <Tabs
          c="#000000"
          value={tabValue}
          grow
          tabValues={[
            { value: 'value1', label: 'label1' },
            { value: 'value2', label: 'label2' },
            { value: 'value3', label: 'label3' },
          ]}
          onChange={setTabValue}
        />

        <Tabs
          value={tabValue}
          justify="center"
          tabValues={['value1', 'value2', 'value3']}
          bgColor={'#eee'}
          onChange={setTabValue}
        />
      </FlexSC.FlexColumn>
    </Page>
  )
}
```
