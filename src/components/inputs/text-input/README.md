# TextInput Component

- text, email, 등등 text type input component

## History

- 2024.11.13 컴포넌트 개발
  - onSearch 콜백함수 추가
- 2024.11.14 styles.js 수정
  - IconWrapper 에 flex 속성및 가운데 정렬 css 추가
  - width, height 값 제거

## TextInput Component Props

| name               | type              | 설명                                       |
| ------------------ | ----------------- | ------------------------------------------ |
| w                  | string            | input box 넓이 (default 'fit-content')     |
| m                  | string            | margin (default '0px')                     |
| mt                 | string            | margin-top (default '0px')                 |
| mb                 | string            | margin-bottom (default '0px')              |
| ml                 | string            | margin-left (default '0px')                |
| mr                 | string            | margin-right (default '0px')               |
| leftIcon           | React.node        | input box 왼쪽에 추가할 icon               |
| rightIcon          | React.node        | input box 오른쪽에 추가할 icon             |
| error              | string or boolean | error message 유무 또는 내용               |
| onSearch           | function          | input type search 일경우 callback function |
| input tag property | -                 | input tag 기본 속성들                      |

## Component Hooks

### useInputMode()

- input type 에 따라 최적에 inputMode 를 지정해주는 hook

#### Params

| name | type                                                   | 설명            |
| ---- | ------------------------------------------------------ | --------------- |
| type | string / ['tel' , 'number' , 'email' , 'url' , 'text'] | input type 종류 |

#### Return

| name      | type                                                    | 설명                                    |
| --------- | ------------------------------------------------------- | --------------------------------------- |
| InputMode | string / ['tel' , 'decimal' , 'email' , 'url' , 'text'] | input mode 종류 (default return 'text') |

## Example

```js
const FormPage = () => {
  const [search, setSearch] = useState('')

  const form = useForm()
  const {
    formState: { errors },
    register,
  } = form

  return (
    <>
      <TextInput
        value={search}
        onChange={e => setSearch(e.target.value)}
        w="360px"
        placeholder="Search keyword"
        type="search"
        m="20px"
        onSearch={handleSearch}
      />

      <Group.Section align="flex-start">
        <Group.Title h="32px" required type="sub">
          아이디
        </Group.Title>
        <Group.Content>
          <TextInput
            w="360px"
            {...register('id')}
            maxLength={16}
            placeholder="아이디를 입력해주세요"
            error={errors.id?.message}
          />
        </Group.Content>
      </Group.Section>
    </>
  )
}
```
