# Button Component

프로젝트에 사용되는 Button 모음집

- Filled / Outlined 스타일 버튼만 있음
- theme 종류는 `primary` `sub` `gray` 있음

## History

- 2024.09.10
  - button 공통 컴포넌트 생성
- 2024.09.24
  - FilledButton , OutlinedButton css 수정
    - flex , align center 속성 추가
  - xl , lg 버튼 font weight 수정 (700 > 600)

## Button Component Props

| name                | type         | 설명                                                       |
| ------------------- | ------------ | ---------------------------------------------------------- |
| size                | string       | 버튼 사이즈 [xl, lg, md, sm] <br/> 기본값 : md             |
| isLoading           | boolean      | 로딩유무                                                   |
| variant             | string       | 버튼 스타일 [filled, outlined] <br/> 기본값 : filled       |
| theme               | string       | 버튼 테마 색상 [primary, sub, gray] <br/> 기본값 : primary |
| leftIcon            | React.node   | 버튼 왼쪽에 추가할 icon                                    |
| rightIcon           | React.node   | 버튼 오른쪽에 추가할 icon                                  |
| w                   | string       | 버튼 크기(px) <br/> 기본값 : fit-content                   |
| m                   | string       | margin (px) <br/> 기본값 : 0px                             |
| mt                  | string       | margin-top (px) <br/> 기본값 : 0px                         |
| mb                  | string       | margin-bottom (px) <br/> 기본값 : 0px                      |
| ml                  | string       | margin-left (px) <br/> 기본값 : 0px                        |
| mr                  | string       | margin-right (px) <br/> 기본값 : 0px                       |
| 그밖에 button props | button props | 버튼 기본속성들 (onclick type disabled ...)                |

## Example

```js
<FlexSC.FlexColumn gap={'20px'} align={'flex-start'} style={{ width: '100%' }}>
  <Button
    isLoading={isLoading}
    onClick={() => setIsLoading(!isLoading)}
    size={'xl'}
    rightIcon={linkIcon}
    w={'80%'}
    m={'20px'}
  >
    버튼 텍스트
  </Button>
  <Button
    isLoading={isLoading}
    onClick={() => setIsLoading(!isLoading)}
    size={'lg'}
    theme={'gray'}
    leftIcon={startIcon}
    rightIcon={uploadIcon}
  >
    버튼 텍스트
  </Button>
  <Button isLoading={isLoading} onClick={() => setIsLoading(!isLoading)} variant={'outlined'} ml={'20px'}>
    버튼 텍스트
  </Button>
  <Button
    isLoading={isLoading}
    onClick={() => setIsLoading(!isLoading)}
    size={'sm'}
    variant={'outlined'}
    theme={'gray'}
  >
    버튼 텍스트
  </Button>
  <Button isLoading={isLoading} onClick={() => setIsLoading(!isLoading)} disabled>
    버튼 텍스트
  </Button>
</FlexSC.FlexColumn>
```
