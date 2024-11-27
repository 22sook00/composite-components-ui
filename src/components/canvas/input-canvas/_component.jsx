import { Button } from "@/components/buttons";
import { CheckBox, PasswordInput, TextInput } from "@/components/inputs";
import { Flex, Group } from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { _UserSchema, user, UserSchema } from "./_schema.js";
import { Typography } from "@/components/typography/Typography.jsx";

const InputCanvas = () => {
  const [search, setSearch] = useState("");
  const [userSchema, setUserSchema] = useState(UserSchema);

  const form = useForm({
    mode: "onChange", //[onSubmit , onBlur, onChange , onTouched]
    defaultValues: user,
    resolver: zodResolver(userSchema),
  });

  const form2 = useForm({
    mode: "onChange",
    defaultValues: {
      search: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = form;

  /**
   * @param {import('./_types').User} data
   */
  const onSubmit = (data) => {
    console.log(data);
    console.log("search >>>", search);
    reset();
  };

  const handleSearch = () => {
    alert(search);
  };

  const onClick = () => {
    reset();
    setUserSchema(_UserSchema);
    setValue("isEmail", true);
  };

  return (
    //<Form onSubmit={handleSubmit(onSubmit)} control={control}>
    //  <Flex.Column mih="50vh">
    //    <Typography.Title1>인풋 폼</Typography.Title1>
    //    <Group>
    //      <Group.Header>
    //        <Group.Title>Form Test</Group.Title>
    //        <Group.Content>
    //          <Button type="submit">Submit</Button>
    //          <Button type="button" onClick={onClick}>
    //            change schema
    //          </Button>
    //        </Group.Content>
    //      </Group.Header>
    //      <Group.Body>
    //        <Group.Section align="flex-start">
    //          <Group.Title h="32px" required type="sub">
    //            아이디
    //          </Group.Title>
    //          <Group.Content>
    //            <TextInput
    //              w="360px"
    //              {...register("id")}
    //              maxLength={16}
    //              placeholder="아이디를 입력해주세요"
    //              error={errors.id?.message}
    //            />
    //          </Group.Content>
    //        </Group.Section>

    //        <Group.Section align="flex-start">
    //          <Group.Title h="32px" required type="sub">
    //            이메일
    //          </Group.Title>
    //          <Group.Content>
    //            <TextInput
    //              w="360px"
    //              {...register("email")}
    //              placeholder="이메일을 입력해주세요"
    //              error={errors.email?.message}
    //            />
    //          </Group.Content>
    //        </Group.Section>

    //        <Group.Section align="flex-start">
    //          <Group.Title h="32px" required type="sub">
    //            비밀번호
    //          </Group.Title>
    //          <Group.Content>
    //            <Flex.Column>
    //              <PasswordInput
    //                w="360px"
    //                placeholder="Password"
    //                {...register("password")}
    //                error={errors.password?.message}
    //              />
    //            </Flex.Column>
    //          </Group.Content>
    //        </Group.Section>

    //        <Group.Section align="flex-start">
    //          <Group.Title h="32px" required type="sub">
    //            이름
    //          </Group.Title>
    //          <Group.Content>
    //            <TextInput
    //              w="360px"
    //              {...register("name")}
    //              placeholder="이름을 입력해주세요"
    //              error={errors.name?.message}
    //            />
    //          </Group.Content>
    //        </Group.Section>

    //        <Group.Section align="flex-start">
    //          <Group.Title h="24px" type="sub">
    //            마케팅활용 및 광고수신동의
    //          </Group.Title>
    //          <Group.Content>
    //            <CheckBox.Group
    //              error={errors.isEmail?.message || errors.isSms?.message}
    //            >
    //              <CheckBox label="이메일(E-mail)" {...register("isEmail")} />
    //              <CheckBox
    //                label="문자 메시지(SMS)"
    //                w="160px"
    //                {...register("isSms")}
    //              />
    //            </CheckBox.Group>
    //          </Group.Content>
    //        </Group.Section>
    //      </Group.Body>
    //    </Group>
    //  </Flex.Column>

    <Flex.Column>
      <FormProvider {...form2}>
        <Form onSubmit={handleSearch}>
          <TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            w="360px"
            placeholder="Search keyword"
            type="search"
            m="20px"
            onSearch={handleSearch}
          />
          <TextInput
            w="360px"
            {...register("name")}
            placeholder="이름을 입력해주세요"
            error={errors.name?.message}
          />
        </Form>
      </FormProvider>

      <CheckBox m="20px" label="test" error="error text message" />

      <CheckBox m="20px" label="test-2" disabled />

      <CheckBox m="20px" label="test-2" disabled checked />
    </Flex.Column>
    //</Form>
  );
};

export default InputCanvas;
