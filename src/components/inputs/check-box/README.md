# CheckBox Component

- check box 공통 컴포넌트
- CheckBox.Group 으로 묶어서 사용 가능

## History

- 2024.11.13 컴포넌트 개발
  - 추후 UI 고려 CheckBox Group 방향 설정 가능하게 개편 필요
- 2024.11.14
  - 체크박스 커서 스타일 추가 (active, disabled)

## CheckBox Component Props

### CheckBox props

| name  | type              | 설명                             |
| ----- | ----------------- | -------------------------------- |
| w     | string            | Check box 넓이 (default '136px') |
| label | string            | Check box Label                  |
| error | string or boolean | error message 유무 또는 내용     |
| m     | string            | margin (default '0px')           |
| mt    | string            | margin-top (default '0px')       |
| mb    | string            | margin-bottom (default '0px')    |
| ml    | string            | margin-left (default '0px')      |
| mr    | string            | margin-right (default '0px')     |

### CheckBox.Group props

| name  | type              | 설명                         |
| ----- | ----------------- | ---------------------------- |
| error | string or boolean | error message 유무 또는 내용 |

## Compound components

### CheckBox.Group

- CheckBox component 묶음
- CheckBox 들은 현재 가로 방향만 지원
- Flex 컴포넌트 기반

## Example

```javascript
<Group.Section align="flex-start">
  <Group.Title h="24px" type="sub">
    마케팅활용 및 광고수신동의
  </Group.Title>
  <Group.Content>
    <CheckBox.Group error={errors.isEmail?.message || errors.isSms?.message}>
      <CheckBox label="이메일(E-mail)" {...register('isEmail')} />
      <CheckBox label="문자 메시지(SMS)" w="160px" {...register('isSms')} />
    </CheckBox.Group>
  </Group.Content>
</Group.Section>
```
