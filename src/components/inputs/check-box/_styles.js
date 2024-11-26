import { Flex } from '@/components/layout'
import styled from '@emotion/styled'

export const CheckBoxContainer = styled(Flex)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  * {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }

  label {
    width: ${({ w }) => `calc(${w} - 32px)`};
    margin-left: 8px;
  }

  input[type='checkbox'] {
    z-index: 2;
    appearance: none;

    width: 18px;
    height: 18px;
    border-radius: 3px;
    background-color: transparent;
  }

  input[type='checkbox']:checked + .check_icon {
    background-color: #8b5ff1;
    border-color: #8b5ff1;

    .ic_check_active_24 path {
      stroke: white;
    }
  }

  input[type='checkbox']:disabled + .check_icon {
    border-color: #eeeeee !important;
    background-color: #eeeeee !important;
  }
`

export const CheckBoxWrapper = styled(Flex)`
  position: relative;
  width: 24px;
  height: 24px;
`

export const CheckIcon = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;

  border: 1.5px solid #eeeeee;
  border-radius: 3px;

  background-color: white;

  .ic_check_active_24 path {
    stroke: transparent;
  }
`
