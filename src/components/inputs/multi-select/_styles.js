import styled from "@emotion/styled";
import { createTheme } from "@mui/material";
import MuiSelect from "@mui/material/Select";
import { utils } from "@/styles/values/utils";

export const selectTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({}) => ({
          overflow: "hidden",
          boxShadow: "none",

          background: "#F8F8F8",
          border: "1px solid #eee",
          borderTop: "none",
          borderRadius: "0 0 4px 4px",
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "Pretendard !important",
          "& .MuiOutlinedInput-notchedOutline": {
            border: `1px solid #eee `,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "unset",
          },
          "&.Mui-focused ": {
            border: "unset",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `1px solid #eee`,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: `1px solid #FF1751 !important`,
            borderWidth: "1px ",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput": {
            border: `1px solid red `,
          },
        },
        select: {
          "&.MuiSelect-select": {
            minHeight: `auto`,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({}) => ({
          padding: "0px",
        }),
      },
    },
    MuiList: {
      styleOverrides: {
        root: ({}) => ({
          overflowY: "auto",
          padding: 0,
          "& li": {
            height: "32px",
            color: "#666",
            fontSize: 14,
            padding: 0,
            gap: "8px",
          },
          "& li:hover": {
            background: `transparent !important`,
          },
          "& li.Mui-selected": {
            background: "transparent",
          },

          "& li.Mui-disabled": {
            background: "transparent",
          },
          "& li.Mui-focusVisible": {
            backgroundColor: "transparent",
          },
        }),
      },
    },
  },

  palette: {
    primary: {
      main: "#9D42FB",
    },
    error: {
      main: "#FF3366",
    },
  },
});

export const SelectContainer = styled.div`
  position: relative;

  .Mui-disabled .MuiOutlinedInput-notchedOutline {
    border-color: #eee !important;
  }
`;

export const SelectBox = styled(MuiSelect)`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 32px;
  background-color: ${({ disabled }) => (disabled ? "#eee" : "#fff")};

  border-radius: ${({ open }) => (open ? "4px 4px 0 0" : "4px")};

  svg {
    position: absolute;
    right: 10px;
  }

  .MuiSelect-iconOpen {
  }

  .MuiInputBase-input {
    width: ${({ width }) => (width ? `${width - 20}px` : "90%")};
    padding: 0px;
    padding-left: 10px;
    padding-right: 0px !important;
  }

  legend {
    /* font-size: 12px; */
    overflow: unset;
    color: red !important;
    opacity: 1;
  }

  fieldset {
    border: 1px solid #eee;
    border-width: 1px !important;
  }

  :hover {
    fieldset {
      border: ${({ status, type }) =>
        status === "false" && type !== "top" && `1px solid #eee !important`};
    }
  }
`;

export const SelectMenuText = styled.span`
  width: ${({ width }) => `${width}px`};
  ${utils.ellipsis}
  color: ${({ disabled }) => disabled && color.grayscale.gray[400]};
`;
export const PlaceholderContainer = styled.div`
  p {
    word-break: break-all;
  }
`;
export const CountChip = styled.div`
  position: absolute;
  right: 34px;
`;

//table 에서 사용되는 멀티셀렉트
export const TableMultiSelectBox = styled(SelectBox)`
  svg {
    right: 10px;
  }
  .MuiInputBase-input {
    padding-left: 0;
  }
`;

export const MultiSelectOptionButton = styled.div`
  ${utils.ellipsis}
`;
