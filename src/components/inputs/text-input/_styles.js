import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding-left: ${({ leftIcon }) => (leftIcon ? "32px" : "12px")};
  padding-right: ${({ rightIcon }) => (rightIcon ? "32px" : "12px")};

  border: ${({ error }) =>
    error ? `1px solid #FF3366}` : `1px solid #eeeeee`};
  border-radius: 4px;

  font-size: 14px;
  line-height: 20px;
  font-weight: 400;

  ::placeholder {
    color: #bbbbbb;
    opacity: 1;
  }

  :active,
  :focus {
    outline: none;
    border: ${({ error }) =>
      error ? `1px solid #FF3366` : `1px solid #9D42FB`};
  }

  :disabled {
    cursor: not-allowed;
    background-color: #f8f8f8;
    border: 1px solid #eeeeee !important;
  }

  &[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ leftIcon }) => leftIcon && "8px"};
  right: ${({ rightIcon }) => rightIcon && "8px"};
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
`;
