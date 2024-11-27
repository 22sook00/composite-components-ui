import { Typography } from "@/components/typography/Typography";
import { Flex } from "@/components/layout";

import { forwardRef } from "react";

import * as SC from "./_styles";
import { useId } from "react";
import IcCheckActive24 from "./_assets/Ic_Check_Active_24";

const CheckGroup = ({ children, error, ...rest }) => {
  return (
    <Flex.Column gap="4px" {...rest}>
      <Flex gap="8px">{children}</Flex>
      {typeof error === "string" && (
        <Typography.Body2 lineClamp={10} c={"#FF1751"}>
          {error}
        </Typography.Body2>
      )}
    </Flex.Column>
  );
};

const Check = forwardRef(function Check(props, ref) {
  const {
    w = "136px",
    m,
    mt,
    mb,
    ml,
    mr,
    label,
    error,
    disabled,
    ...rest
  } = props;

  const checkBoxId = useId();

  return (
    <Flex.Column
      w="fit-content"
      gap="4px"
      m={m}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      <SC.CheckBoxContainer w={w} align="center" disabled={disabled}>
        <SC.CheckBoxWrapper align="center" justify="center">
          <input
            {...rest}
            disabled={disabled}
            ref={ref}
            type="checkbox"
            id={checkBoxId}
          />
          <SC.CheckIcon className="check_icon">
            <IcCheckActive24 />
          </SC.CheckIcon>
        </SC.CheckBoxWrapper>

        <label htmlFor={checkBoxId}>
          <Typography.Body1>{label}</Typography.Body1>
        </label>
      </SC.CheckBoxContainer>

      {typeof error === "string" && (
        <Typography.Body2 w={w} lineClamp={10} c={"#FF1751"}>
          {error}
        </Typography.Body2>
      )}
    </Flex.Column>
  );
});

const CheckBox = Object.assign(Check, { Group: CheckGroup });

export default CheckBox;
