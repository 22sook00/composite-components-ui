import { TextInput } from "@/components/inputs/index";
import useDisclosure from "@/hooks/use-disclosure/useDisclosure";

import { IconButton } from "@/components/buttons";
import { forwardRef } from "react";
import IcHidePasswordDefault20 from "./_assets/Ic_HidePassword_Default_20";
import IcShowPasswordDefault20 from "./_assets/Ic_ShowPassword_Default_20";

const PasswordInput = forwardRef((props, ref) => {
  const [passwordVisible, { toggle }] = useDisclosure(false);

  return (
    <TextInput
      ref={ref}
      {...props}
      type={passwordVisible ? "text" : "password"}
      inputMode="text"
      rightIcon={
        <IconButton type="button" onClick={toggle}>
          {passwordVisible ? (
            <IcHidePasswordDefault20 />
          ) : (
            <IcShowPasswordDefault20 />
          )}
        </IconButton>
      }
    />
  );
});

export default PasswordInput;
