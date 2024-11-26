# Tooltip Component

모바일 확장성까지 고려한 clickable 한 형태의 툴팁.
- HelpTip icon : width, height 제한 없이 가이드를 제공하는 형태의 툴팁
- InfoTip icon : 최대 4줄 제한의 간단한 정보를 제공하는 형태의 툴팁.

## History

- 2024.10.04 툴팁 아이콘 컴포넌트 생성
  - floating-ui 의 useFloating 사용한 Tooltip 컴포넌트 생성
  - [floating-ui 문서 참고](https://floating-ui.com/docs)
- 2024.10.07 툴팁 Provider 형식으로 변경.
  - 커스텀 버튼 props 로 보내는 형식에서 children으로 보내는 형식으로 변경.
  - 툴팁 닫기 토글방식으로 수정
- 2024.10.10 툴팁 Footer 합성컴포넌트 추가 및 리팩토링
  - 툴팁의 Footer 부분은 대다수가 링크로, Next Link 활용하기 위해 분리.
  - onClick 이벤트가 들어가지만 기본적인 Footer 의 규칙은 벗어나지 않도록 TextButton 기반으로 생성.
  - overflow:hidden 의 영향을 받지 않기 위해 useFloating에 strategy: 'fixed' 옵션 추가
- 2024.10.11 상위 영향받지 않도록 이벤트 버블링 방지위해 stopPropagation 추가.
- 2024.10.21 툴팁인포 최대 4줄까지 늘임.

## Tooltip Component Props

| name     | type                              | 설명                                                                                         |
| -------- | --------------------------------- | -------------------------------------------------------------------------------------------- |
| type     | 'help' , 'info'                   | 타입에 따라 툴팁상태 변경. 타입이 info 일 경우 인포아이콘, 타이틀 없이 2줄 제한. 기본 'help' |
| title    | string                            | 툴팁 타이틀 텍스트                                                                           |
| content  | string                            | 툴팁 컨텐츠 텍스트                                                                           |
| linkText | string                            | 툴팁 링크버튼 텍스트. 기본 '자세히 알아보기'                                                 |
| link     | string                            | 툴팁 링크 주소                                                                               |
| target   | '_blank','_self','_parent','_top' | 툴팁 링크의 타겟속성. 기본 '_blank'                                                          |
| position | 'bottom','left','right'           | 툴팁이 나타나는 위치. 기본 'bottom'                                                          |


## Compound components

- Tooltip.Root
  - 커스텀 버튼 Tooltip 을 사용하기 위한 Root provider
- Tooltip.Button
  - 커스텀 Tooltip 버튼을 사용하기 위해 감싸는 Wrapper
- Tooltip.Title
  - 툴팁 커스텀 타이틀을 사용하기 위해 감싸는 Wrapper
- Tooltip.Content
  - 툴팁 커스텀 컨텐츠를 사용하기 위해 감싸는 Wrapper
- Tooltip.Footer
  - 툴팁 링크가 아닌 onClick 콜백함수를 받는 경우 사용되는 텍스트링크 형태의 Wrapper 
  
## Example

```js
import { Tooltip } from '@/components/common/tooltip/Tooltip'
import { Button } from '@/components/common/buttons'
import { List } from '@/components/common/list/List'

  const sampleArr = [
    `무형 상품은 음원, 도면, 이미지 등 특정 파일을 판매 가능합니다`,
    `무형 상품은 음원, 도면, 이미지 등 특정 파일을 판매 가능합니다.`,
    `입금/결제 완료 시 판매자의 별도 승인 없이 다운로드 가능하며\n마이페이지 주문 내역 및 상품 상세페이지에서 다시 다운로드할 수도 있습니다.`,
  ]
  const sampleLink = `https://github.com/mantinedev/mantine/blob/master/packages/@mantine/core/src/components/Tooltip/Tooltip.tsx`

  const handleLink = () => {
    router.push(sampleLink)
  }

//기본 툴팁
<Tooltip title={'툴팁 타이틀'} content={sampleContent}/>
     
//퉅팁 위치
 <Tooltip 
  type={'info'}
  position={'right'}
  content={'툴팁 메세지'}
  linkText={'사이트 이동하기'}
  onLink={handleLink}
  />

//커스텀 버튼 퉅팁
<Tooltip.Root>
  <Tooltip.Button>
    <Button>툴팁버튼</Button>
  </Tooltip.Button>
  <Tooltip title={'툴팁 타이틀'} content={sampleContent}/>
</Tooltip.Root>

<Tooltip.Root>
  <Tooltip.Button>
    <Button>툴팁버튼</Button>
  </Tooltip.Button>
  <Tooltip>
    <Tooltip.Title>툴팁커스텀타이틀</Tooltip.Title>
    <Tooltip.Content>{sampleContent}</Tooltip.Content>
    <Tooltip.Footer onClick={() => { console.log('CLICK!')}} c={'red'} size={'md'}>
      이동하기
    </Tooltip.Footer>
    <Tooltip.Footer onClick={() => { console.log('CLICK2!')}}>
      <Typography.Caption2>이동하기2</Typography.Caption2>
    </Tooltip.Footer>
  </Tooltip>
</Tooltip.Root>


//커스텀 툴팁
<Tooltip>
  <Tooltip.Title>
    <h3>툴팁커스텀타이틀</h3>
  </Tooltip.Title>
  <Tooltip.Content>
    <List gap={'4px'}>
      {sampleArr.map((text, idx) => {
        return (
          <List gap={'2px'}>
              {sampleHelp.map((text, idx) => {
                return (
                  <List.Item key={`hep-${idx}`}>
                    <Typography.Body3 c={'#666666'} ws={'pre'} lineClamp={2}>
                      {text}
                    </Typography.Body3>
                  </List.Item>
                )
              })}
          </List>
        )
      })}
    </List>
  </Tooltip.Content>
</Tooltip>
```
