# List Component

주로 가이드 UI 에서 사용되는 ul , ol ,li 커스텀 컴포넌트

## History

- 2024.09.19
  - list 공통 컴포넌트 생성
  - 확장성 고려해서 추가 리팩토링 필요함
- 2024.09.24
  - List Size 수정
    - md : typography body2 스타일로 변경
  - markerColor props 추가 : 기본 속성은 List text color inherit
- 2024.09.27
  - List li css 수정
    - :first-child > :first-of-type
    - first-child 사용 시 Try changing it to ":first-of-type" 워닝 발생
    - [참고 문서](https://velog.io/@ckm960411/Next-%EB%B0%B0%ED%8F%AC%EC%8B%9C-Dynamic-Route-%EC%97%90%EC%84%9C-404-%EA%B0%80-%EB%9C%A8%EB%8D%98-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0)

## List Component Props

| name        | type   | 설명                                                  |
| ----------- | ------ | ----------------------------------------------------- |
| gap         | string | list item 사이 간격 기본 8px                          |
| size        | string | [sm, md] 기본 md                                      |
| c           | string | text 색상                                             |
| markerColor | string | marker 색상 기본값은 text color inherit               |
| type        | string | list mark style [none , ordered] 기본값은 bullet 형태 |
| m           | string | margin (px) <br/> 기본값 : 0px                        |
| mt          | string | margin-top (px) <br/> 기본값 : 0px                    |
| mb          | string | margin-bottom (px) <br/> 기본값 : 0px                 |
| ml          | string | margin-left (px) <br/> 기본값 : 0px                   |
| mr          | string | margin-right (px) <br/> 기본값 : 0px                  |

## Example

```js
<FlexSC.FlexColumn gap={'20px'} style={{ width: '300px', backgroundColor: 'white', padding: '20px' }}>
  <List c="red">
    <List.Item>
      네이버 쇼핑 파트너 센터에 접속하여 기타 쇼핑파트너사{' '}
      <TextButton size="sm" c="red">
        입점신청
      </TextButton>{' '}
      버튼을 선택 합니다.
    </List.Item>
    <List.Item>
      충전금은 상품의 구매의사가 있는 이용자가 검색을 통해 상품을 확인하고, 상품을 클릭하여 입점이 된 쇼핑몰로 이동 할
      때마다 차감 됩니다.
    </List.Item>
  </List>
  <List type="ordered" c={'#666666'} gap="20px" size="md">
    <List.Item>
      네이버 쇼핑 파트너 센터에 접속하여 기타 쇼핑파트너사{` `}
      <TextButton c={'#666666'}>입점신청</TextButton>
      {` `}버튼을 선택 합니다.
    </List.Item>
    <List.Item>
      충전금은 상품의 구매의사가 있는 이용자가 검색을 통해 상품을 확인하고, 상품을 클릭하여 입점이 된 쇼핑몰로 이동 할
      때마다 차감 됩니다.
    </List.Item>
    <List.Item>
      충전금은 상품의 구매의사가 있는 이용자가 검색을 통해 상품을 확인하고, 상품을 클릭하여 입점이 된 쇼핑몰로 이동 할
      때마다 차감 됩니다.
    </List.Item>
  </List>

  <List type="none" gap="2px">
    <List.Item>
      네이버 쇼핑 파트너 센터에 접속하여 기타 쇼핑파트너사 <TextButton size="sm">입점신청</TextButton> 버튼을 선택
      합니다.
    </List.Item>
    <List.Item>
      충전금은 상품의 구매의사가 있는 이용자가 검색을 통해 상품을 확인하고, 상품을 클릭하여 입점이 된 쇼핑몰로 이동 할
      때마다 차감 됩니다.
    </List.Item>
  </List>
</FlexSC.FlexColumn>
```
