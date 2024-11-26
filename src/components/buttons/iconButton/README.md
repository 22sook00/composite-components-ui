# IconButton Component

프로젝트 사용되는 IconButton 모음집  
버튼 padding 값 없음  
theme 없음  
children 으로 들어오는 icon 컴포넌트에서 사이즈/색상 조정

## History

- 2024.09.11
  - 공통 컴포넌트 생성

## TextButton Component Props

| name                | type         | 설명                                        |
| ------------------- | ------------ | ------------------------------------------- |
| w                   | string       | 버튼 크기(px) <br/> 기본값 : fit-content    |
| m                   | string       | margin (px) <br/> 기본값 : 0px              |
| mt                  | string       | margin-top (px) <br/> 기본값 : 0px          |
| mb                  | string       | margin-bottom (px) <br/> 기본값 : 0px       |
| ml                  | string       | margin-left (px) <br/> 기본값 : 0px         |
| mr                  | string       | margin-right (px) <br/> 기본값 : 0px        |
| 그밖에 button props | button props | 버튼 기본속성들 (onclick type disabled ...) |

## Example

```js
<FlexSC.FlexRow
  justify={'center'}
  style={{ width: '100%', backgroundColor: 'white', padding: '30px', marginTop: '20px' }}
>
  <IconButton>
    <ArrowUpIcon />
  </IconButton>

  <IconButton>
    <ArrowDownIcon />
  </IconButton>

  <IconButton>
    <CloseIcon color={'#5d5d5d'} width={24} height={24} />
  </IconButton>
</FlexSC.FlexRow>
```
