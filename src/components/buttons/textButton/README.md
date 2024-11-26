# TextButton Component

프로젝트에 사용되는 TextButton 모음집  
기본 버튼과 비슷하지만 theme props 가 없고 c:(color) props에 의존함  
padding 값이 없음

## History

- 2024.09.10
  - textButton 공통 컴포넌트 생성
- 2024.09.19
  - td (text-decoration) props 추가

## TextButton Component Props

| name                | type         | 설명                                                                  |
| ------------------- | ------------ | --------------------------------------------------------------------- |
| td                  | string       | 텍스트 underline 표시 유무 [none, underline] <br/> 기본값 : underline |
| size                | string       | 버튼 사이즈 [md, sm] <br/> 기본값 : md                                |
| leftIcon            | React.node   | 버튼 왼쪽에 추가할 icon                                               |
| rightIcon           | React.node   | 버튼 오른쪽에 추가할 icon                                             |
| c                   | string       | 버튼 color <br/> 기본값 : #555555                                     |
| w                   | string       | 버튼 크기(px) <br/> 기본값 : fit-content                              |
| m                   | string       | margin (px) <br/> 기본값 : 0px                                        |
| mt                  | string       | margin-top (px) <br/> 기본값 : 0px                                    |
| mb                  | string       | margin-bottom (px) <br/> 기본값 : 0px                                 |
| ml                  | string       | margin-left (px) <br/> 기본값 : 0px                                   |
| mr                  | string       | margin-right (px) <br/> 기본값 : 0px                                  |
| 그밖에 button props | button props | 버튼 기본속성들 (onclick type disabled ...)                           |

## Example

```js
<FlexSC.FlexRow
  justify={'center'}
  style={{ width: '100%', backgroundColor: 'white', padding: '30px', marginTop: '20px' }}
>
  <TextButton mr={'20px'} rightIcon={linkIcon}>
    버튼 텍스트
  </TextButton>
  <TextButton m={'20px 30px'} size={'sm'} c={'#9D42FB'}>
    버튼 텍스트
  </TextButton>
  <TextButton ml={'30px'} disabled>
    버튼 텍스트
  </TextButton>
</FlexSC.FlexRow>
```
