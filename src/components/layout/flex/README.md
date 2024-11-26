# Flex Component

기존 Flex.SC 스타일 컴포넌트 개선  
스타일 컴포넌트가 아닌 props 를 받는 일반 컴포넌트로 사용  
백그라운색상, 크기, 마진, 넓이 등등 다양한 props를 통해서 확장 가능

- 하위에 Flex.Row , Flex.Column 컴포넌트 있음
- Flex.Row 컴포넌트 grow 속성으로 하위 요소들 비율 조절 가능

## History

- 2024.10.14
  - Flex 컴포넌트 생성

## Flex Component Props

| name       | type    | 설명                                                |
| ---------- | ------- | --------------------------------------------------- |
| direction  | string  | flex-direction 속성 <br/> 기본값 : row              |
| justify    | string  | flex justify-content 속성 <br/> 기본값 : flex-start |
| align      | string  | flex align-items 속성 <br/> 기본값 : flex-start     |
| gap        | string  | flex gap 속성 <br/> 기본값 : 0px                    |
| wrap       | string  | flex wrap 속성 <br/> 기본값 : nowrap                |
| w          | string  | flex box 넓이(px) <br/> 기본값 : 100%               |
| h          | string  | flex box 높이(px) <br/> 기본값 : auto               |
| miw        | string  | flex box 최소넓이(px) <br/> 기본값 : 0px            |
| mih        | string  | flex box 최소높이(px) <br/> 기본값 : 0px            |
| maw        | string  | flex box 최대넓이(px) <br/> 기본값 : ''             |
| mah        | string  | flex box 최대높이(px) <br/> 기본값 : ''             |
| p          | string  | padding (px) <br/> 기본값 : 0px                     |
| pt         | string  | padding-top (px) <br/> 기본값 : 0px                 |
| pb         | string  | padding-bottom (px) <br/> 기본값 : 0px              |
| pl         | string  | padding-left (px) <br/> 기본값 : 0px                |
| pr         | string  | padding-right (px) <br/> 기본값 : 0px               |
| m          | string  | margin (px) <br/> 기본값 : 0px                      |
| mt         | string  | margin-top (px) <br/> 기본값 : 0px                  |
| mb         | string  | margin-bottom (px) <br/> 기본값 : 0px               |
| ml         | string  | margin-left (px) <br/> 기본값 : 0px                 |
| mr         | string  | margin-right (px) <br/> 기본값 : 0px                |
| withBorder | boolean | flex box border 유무 <br/> 기본값 : false           |
| radius     | string  | border radius 속성 <br/> 기본값 : 0px               |
| bg         | string  | background color 속성 <br/> 기본값 : transparent    |

### Flex.Row Component Props

- Flex props 상속
  | name | type | 설명 |
  | ---------- | ------- | --------------------------------------------------- |
  | grow | boolean | row 박스 하위 요소들의 크기 비율을 1:1로 고르게 분배 <br/> 기본값 : false |

## Example

```js
const FlexPage = () => {
  return (
    <Page>
      <Flex direction="column" gap="20px" p="20px" align="center">
        <Flex.Row bg="white" h="350px" gap="40px" align="flex-start" grow>
          <Item>1</Item>
          <Button w="100%">Button</Button>
          <Item>2</Item>
          <Typography.H3 ta="center">Typography Typography Typography</Typography.H3>
          <div style={{ textAlign: 'center' }}>text</div>
          <Flex withBorder direction="column" align="center">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        </Flex.Row>

        <Flex direction="row-reverse" justify="space-around" gap="20px" p="20px" bg="white">
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          w="600px"
          h="250px"
          gap="20px"
          bg="gray"
          radius="6px"
          mt="20px"
          p="20px"
          wrap="wrap"
        >
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
        </Flex>

        <Flex align="stretch" direction="column" gap="20px" w="500px" p="20px" bg="white" withBorder radius="4px">
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
        </Flex>
      </Flex>
    </Page>
  )
}

export default FlexPage
```
