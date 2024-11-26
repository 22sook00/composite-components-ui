import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const TextContainer = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp || 1};

  width: ${({ w }) => w || '100%'};

  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${({ ta }) => ta || 'left'};
  white-space: normal;

  color: ${({ c }) => c && c};
`

export const commonText = css`
  padding: 0;
  margin: 0;
  color: #121212;
  word-break: keep-all;
`

/**------------------------- Header Title -------------------------*/
export const Header1 = styled.h1`
  ${commonText}

  font-size: 40px;
  line-height: 76px;
  font-weight: ${({ fw }) => fw || 600};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Header2 = styled.h2`
  ${commonText}

  font-size: 32px;
  line-height: 40px;
  font-weight: ${({ fw }) => fw || 600};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Header3 = styled.h3`
  ${commonText}

  font-size: 24px;
  line-height: 32px;
  font-weight: ${({ fw }) => fw || 600};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Header4 = styled.h4`
  ${commonText}

  font-size: 20px;
  line-height: 28px;
  font-weight: ${({ fw }) => fw || 600};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

/**------------------------- Body Title -------------------------*/
export const Title1 = styled.p`
  ${commonText}

  font-size: 17px;
  line-height: 24px;
  font-weight: ${({ fw }) => fw || 600};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Title2 = styled.p`
  ${commonText}

  font-size: 15px;
  line-height: 22px;
  font-weight: ${({ fw }) => fw || 600};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Title3 = styled.p`
  ${commonText}

  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ fw }) => fw || 500};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

/**------------------------- Body Text -------------------------*/
export const Body1 = styled.p`
  ${commonText}

  font-size: 15px;
  line-height: 22px;
  font-weight: ${({ fw }) => fw || 400};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Body2 = styled.p`
  ${commonText}

  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ fw }) => fw || 400};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Body3 = styled.p`
  ${commonText}

  font-size: 13px;
  line-height: 18px;
  font-weight: ${({ fw }) => fw || 400};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

/**------------------------- Caption -------------------------*/
export const Caption1 = styled.p`
  ${commonText}

  font-size: 12px;
  line-height: 16px;
  font-weight: ${({ fw }) => fw || 400};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`

export const Caption2 = styled.p`
  ${commonText}

  font-size: 11px;
  line-height: 14px;
  font-weight: ${({ fw }) => fw || 500};
  color: ${({ c }) => c && c};
  white-space: ${({ ws }) => ws && ws};
`
