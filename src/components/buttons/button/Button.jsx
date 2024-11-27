import { Typography } from "@/components/typography/Typography";
import * as SC from "./Button.styles";
import { filledTheme, outlinedTheme } from "./theme";

const ButtonText = ({ size, children }) => {
  if (["xl", "lg"].includes(size))
    return (
      <Typography.Title2 fw={600} style={{ width: "fit-content" }}>
        {children}
      </Typography.Title2>
    );
  if (size === "md")
    return (
      <Typography.Body3 fw={500} style={{ width: "fit-content" }}>
        {children}
      </Typography.Body3>
    );
  return (
    <Typography.Caption1 fw={500} style={{ width: "fit-content" }}>
      {children}
    </Typography.Caption1>
  );
};

export const Button = ({
  variant = "filled",
  theme = "primary",
  size = "md",
  isLoading = false,
  leftIcon = null,
  rightIcon = null,
  children,
  ...props
}) => {
  if (variant === "outlined") {
    const color = outlinedTheme[theme] || outlinedTheme.primary;
    return (
      <SC.OutlinedButton
        size={size}
        bg={color.bg}
        hover={color.hover}
        c={color.text}
        {...props}
      >
        <SC.ButtonLoader isLoading={isLoading} c={color.text} />
        <SC.ButtonInner isLoading={isLoading}>
          {leftIcon && <span>{leftIcon}</span>}
          <ButtonText size={size}>{children}</ButtonText>
          {rightIcon && <span>{rightIcon}</span>}
        </SC.ButtonInner>
      </SC.OutlinedButton>
    );
  }

  const color = filledTheme[theme] || filledTheme.primary;
  return (
    <SC.FilledButton
      size={size}
      bg={color.bg}
      hover={color.hover}
      c={color.text}
      {...props}
    >
      <SC.ButtonLoader isLoading={isLoading} c={color.text} />
      <SC.ButtonInner isLoading={isLoading}>
        {leftIcon && <span>{leftIcon}</span>}
        <ButtonText size={size}>{children}</ButtonText>
        {rightIcon && <span>{rightIcon}</span>}
      </SC.ButtonInner>
    </SC.FilledButton>
  );
};
