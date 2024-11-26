# Typography Component

프로젝트에 사용되는 Title + Body Text + Caption 정의

## History

- 2024.8.24
  - typography 공통 컴포넌트 생성 <br/><br/>
- 2024.09.09
  - font weight / color / lineClamp props 만 받는걸로 변경
  - Typography HOC 형식으로 리팩토링
- 2024.09.11
  - ta props 추가 (text align)
  - span 태그들 p 태그로 변경
    - span 태그와 p 태그의 목적과 쓰임새를 명확하기 위해
    - underline 이슈와 , lineClamp 적용시 line height 이슈 수정
- 2024.09.25
  - text 기본 색상 변경 black >> #121212
- 2024.10.07
  - text white-space 처리를 위한 ws props 추가.
- 2024.10.23
  - w (width) props 추가 / 혹시모를 사이드 이펙트로 기본값 '100%'로 설정
  - 추후 이펙트 없을시 기본값 'fit-content'로 수정 예정

## Typography Component Props

| name      | type             | 설명                                |
| --------- | ---------------- | ----------------------------------- |
| lineClamp | number           | text가 줄임표시 되는 줄수           |
| fw        | number or string | text 굵기                           |
| c         | string           | text 색상                           |
| ta        | string           | text-align [left, right, center]    |
| ws        | string           | text의 줄바꿈 및 공백 처리하는 속성 |
| w         | string           | text 컨테이너 넓이 지정 기본값 100% |

## Example

```js
import { Typography } from '@/components/common/typography/Typography'
import { FlexSC, PageSC } from '@/styles/components/global'

const TypographyPage = () => {
  return (
    <PageSC.Container>
      <FlexSC.FlexColumn gap={'20px'} align={'flex-start'}>
        <Typography.H1>당신의 온라인 비즈니스 파트너 큐샵</Typography.H1>
        <Typography.H2>당신의 온라인 비즈니스 파트너 큐샵</Typography.H2>
        <div style={{ width: '180px', border: '1px solid' }}>
          <Typography.H3>당신의 온라인 비즈니스 파트너 큐샵</Typography.H3>
        </div>
        <div style={{ width: '180px', border: '1px solid' }}>
          <Typography.H4 lineClamp={2}>당신의 온라인 비즈니스 파트너 큐샵</Typography.H4>
        </div>

        <Typography.Title1>당신의 온라인 비즈니스 파트너 큐샵</Typography.Title1>
        <Typography.Title2>당신의 온라인 비즈니스 파트너 큐샵</Typography.Title2>
        <Typography.Title2 fw={500} c={'red'}>
          당신의 온라인 비즈니스 파트너 큐샵
        </Typography.Title2>
        <Typography.Title3>당신의 온라인 비즈니스 파트너 큐샵</Typography.Title3>
        <Typography.Body1>당신의 온라인 비즈니스 파트너 큐샵</Typography.Body1>
        <Typography.Body2>당신의 온라인 비즈니스 파트너 큐샵</Typography.Body2>
        <Typography.Body3>당신의 온라인 비즈니스 파트너 큐샵</Typography.Body3>
        <Typography.Caption1>당신의 온라인 비즈니스 파트너 큐샵</Typography.Caption1>
        <Typography.Caption2>당신의 온라인 비즈니스 파트너 큐샵</Typography.Caption2>
      </FlexSC.FlexColumn>
    </PageSC.Container>
  )
}
```
