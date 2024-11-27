import { Flex } from "@/components/layout";
import * as SC from "./_styles";
import { Typography } from "@/components/common/typography/Typography";

import { forwardRef } from "react";
import IcSearchDefault20 from "./_assets/Ic_Search_Default_20";
import useInputMode from "./_hooks/useTextInput";
import { IconButton } from "@/components/common/buttons";

/**
 * @param {import('./_types').InputIconProps}
 */
const InputIcon = ({ position, type, icon, onSearch }) => {
  if (type === "search") {
    return (
      <SC.IconWrapper rightIcon={true}>
        <IconButton type="button" onClick={onSearch}>
          <IcSearchDefault20 />
        </IconButton>
      </SC.IconWrapper>
    );
  }

  return (
    <SC.IconWrapper
      leftIcon={position === "left"}
      rightIcon={position === "right"}
    >
      {icon}
    </SC.IconWrapper>
  );
};

const TextInput = forwardRef((props, ref) => {
  const {
    placeholder = "내용을 입력해주세요",
    leftIcon = false,
    rightIcon = false,
    w = "fit-content",
    m,
    mt,
    mb,
    ml,
    mr,
    error,
    type = "text",
    inputMode = "text",
    autoComplete = "off",
    onSearch,
    ...rest
  } = props;

  const computedInputMode = useInputMode(type);

  return (
    <Flex.Column w={w} gap="4px" m={m} mt={mt} mb={mb} ml={ml} mr={mr}>
      <Flex style={{ position: "relative" }}>
        {leftIcon && <InputIcon position="left" type={type} icon={leftIcon} />}
        <SC.Input
          ref={ref}
          placeholder={placeholder}
          leftIcon={leftIcon}
          rightIcon={rightIcon || type === "search"}
          type={type}
          inputMode={computedInputMode}
          error={error}
          autoComplete={autoComplete}
          {...rest}
        />
        {(rightIcon || type === "search") && (
          <InputIcon
            position="right"
            type={type}
            icon={rightIcon}
            onSearch={onSearch}
          />
        )}
      </Flex>

      {typeof error === "string" && (
        <Typography.Body2 lineClamp={10} c={"#FF3366"}>
          {error}
        </Typography.Body2>
      )}
    </Flex.Column>
  );
});

export default TextInput;
