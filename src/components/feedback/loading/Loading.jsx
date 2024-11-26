import { color } from '@/styles/values/color'
import styled from '@emotion/styled'
import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react'

const Loading = ({ size = 40, thickness = 4, delay = true, leftPosition = '50%', spinnerColor }) => {
  const [view, setView] = useState(!delay)

  useEffect(() => {
    const time = setTimeout(() => {
      setView(true)
    }, [500])

    return () => {
      clearTimeout(time)
    }
  }, [])
  return (
    <>
      {view && (
        <Container>
          {/* <Circular /> */}
          <CircularProgress
            variant="determinate"
            sx={{
              color: color.grayscale.gray[300],
              position: 'absolute',
              left: leftPosition,
            }}
            size={size}
            thickness={thickness}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={{
              color: spinnerColor || color.primary.purple[300],
              animationDuration: '550ms',
              position: 'absolute',
              left: leftPosition,
              // [`& .${circularProgressClasses.circle}`]: {
              //   strokeLinecap: 'round',
              // },
            }}
            size={size}
            thickness={thickness}
          />
        </Container>
      )}
    </>
  )
}

export default Loading

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;
`
