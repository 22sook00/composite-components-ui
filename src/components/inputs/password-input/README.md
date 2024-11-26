# PasswordInput Component

- input type password, 비밀번호 전용 input
- [TextInput](../text-input/README.md) 컴포넌트 기반으로 생성

## History

- 2024.11.13 컴포넌트 개발

## PasswordInput Component Props

- [TextInput Props](../text-input/README.md) 참고
- rightIcon props 만 비활성화 : 비밀번호 보여지기 아이콘 기본적으로 생성 되기때문

## Example

```javascript
const FormPage = () => {
  const form = useForm()
  const {
    formState: { errors },
    register,
  } = form

  return (
    <Group.Section align="flex-start">
      <Group.Title h="32px" required type="sub">
        비밀번호
      </Group.Title>
      <Group.Content>
        <Flex.Column>
          <PasswordInput w="360px" placeholder="Password" {...register('password')} error={errors.password?.message} />
        </Flex.Column>
      </Group.Content>
    </Group.Section>
  )
}
```
