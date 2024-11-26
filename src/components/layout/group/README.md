# Group Component

- AD 페이지에서 사용되는 카드형식에 공통 컴포넌트
- 페이지 + 모달 등 타이틀 과 필드 형식으로 구분되는 레이아웃 공통 사용 가능
- Flex 컴포넌트를 기본으로 하는 컴포넌트

## History

- 2024.10.14
  - Card 컴포넌트 생성
- 2024.10.23
  - Card 컴포넌트 Group 컴포넌트로 네이밍 수정

## Group Component Props

- 기본 direction="column" bg="white" radius="8px"
- Flex 기본 속성들 상속
- 참고 [Flex.jsx](../flex/README.md)

## Compound components Props

- 모든 Group compound components 는 Flex 박스 기반으로 만들어져 Flex 속성 모두 사용 가능

### Group.Header

- 카드 헤더 영역 (상품등록 ui 에서 확인 가능)
- 기본 direction = 'row' align = 'center', gap = '20px'

| name       | type    | 설명                                      |
| ---------- | ------- | ----------------------------------------- |
| withBorder | boolean | 헤더영역 border bottom 유무 기본값 : true |

### Group.Body

- 카드 헤더 영역 이외 영역 wrapper
- Group Section 들에 묶음
- 기본 direction = 'column' align = 'center', gap = '20px'

### Group.Section

- Group 필드영역에서 row 한줄
- Group Title 과 Group Content 에 wrapper
- 기본 direction = 'row' align = 'center', gap = '20px',

### Group.Title

- 필드에 타이틀 영역
- Header 영역 title 과 Body 영역 title 구분
- children 순서와 역할
  - children [0] : title text 가 오는 자리
- 기본 direction = 'row' w="160px" align="center" gap="4px"

| name     | type    | 설명                                        |
| -------- | ------- | ------------------------------------------- |
| type     | string  | main , sub 두가지 값을 갖음 기본값 : main   |
| required | boolean | 타이틀 옆 Asterisk 마크 유무 기본값 : false |

### Group.Content

- Group Section 안에서 Title 제외 영역을 차지함

## Example

```js
<Group id={'p-sale'}>
  <Group.Header>
    <Group.Title>판매상태</Group.Title>
    <Group.Content>
      <RadioGroup align="row" control={control} name="status">
        <Radio value="sale" label="판매함" />
        <Radio value="stop" label="판매안함" />
      </RadioGroup>
    </Group.Content>
  </Group.Header>
  <Group.Body>
    <Group.Section>
      <Group.Title type="sub">판매 중단 대체 문구</Group.Title>
      <Group.Content>
        <Input
          control={control}
          name={'stopText'}
          max={20}
          placeholder={'상품 판매중단시 보여질 문구를 입력하세요. (미입력시 ‘판매중단’으로 자동표기)'}
        />
      </Group.Content>
    </Group.Section>
  </Group.Body>
</Group>
```

```js
// 모달안에서는 이런식으로 사용
<Flex.Column gap="24px">
  <Group.Section>
    <Group.Title w="120px">진열상태</Group.Title>
    <Group.Content>
      <RadioGroup
        value={accessibleDevice !== 'none'}
        defaultValue={true}
        handleChange={e => {
          const value = e.target.value === 'true'
          setValue('accessibleDevice', value ? 'all' : 'none', { shouldValidate: true })
        }}
      >
        <Radio customWidth={'120px'} value={true} label="진열함" />
        <Radio customWidth={'120px'} value={false} label="진열안함" />
      </RadioGroup>
    </Group.Content>
  </Group.Section>

  <Group.Section>
    <Group.Title w="120px">진열할 환경</Group.Title>
    <Group.Content>
      <Flex gap="8px">
        <Checkbox
          label={'데스크탑'}
          checked={['pc', 'all'].includes(accessibleDevice)}
          handleChange={e => handleChangeDevice(e, 'pc')}
          disabled={accessibleDevice === 'none'}
          customWidth={'120px'}
        />
        <Checkbox
          label={'모바일'}
          checked={['mobile', 'all'].includes(accessibleDevice)}
          handleChange={e => handleChangeDevice(e, 'mobile')}
          disabled={accessibleDevice === 'none'}
          customWidth={'120px'}
        />
      </Flex>
    </Group.Content>
  </Group.Section>

  <Group.Section>
    <Group.Title w="120px">상품 목록에 진열</Group.Title>
    <Group.Content>
      <RadioGroup
        align="row"
        value={isVisible}
        defaultValue={true}
        handleChange={e => {
          console.log(e.target.value)
          const value = e.target.value === 'true'
          setValue('isVisible', value, { shouldValidate: true })
        }}
      >
        <Radio customWidth={'120px'} value={true} label="진열함" disabled={accessibleDevice === 'none'} />
        <Radio customWidth={'120px'} value={false} label="진열안함" disabled={accessibleDevice === 'none'} />
      </RadioGroup>
    </Group.Content>
  </Group.Section>
</Flex.Column>
```
