# Chip Component

Chip 컴포넌트 (기존 태그 ui)

- 상품등록 옵션모달 / 상품등록 검색성정 키워드(태그)

## History

- 2024.10.15 Chip 공통 컴포넌트 생성

## Chip Component Props

| name     | type     | 설명                                      |
| -------- | -------- | ----------------------------------------- |
| onDelete | function | chip 삭제아이콘 유무 및 callback function |
| bg       | string   | chip background color                     |

## Example

```js
<Group.Section>
  <Group.Title />
  <Group.Content>
    {seo?.tags?.length > 0 && (
      <Flex wrap="wrap" gap="8px">
        {seo?.tags?.map((tag, index) => (
          <Chip key={`seo-tag-${tag}`} onDelete={e => handleDeleteTag(index)}>
            {tag}
          </Chip>
        ))}
      </Flex>
    )}
  </Group.Content>
</Group.Section>
```

```js
<>
  {option.length !== 0 && (
    <SC.TagSummaryContainer>
      <div style={{ position: 'relative' }}>
        <ReactSortable
          list={option}
          setList={(newVal, _, store) => {
            if (!store.dragging) return
            if (newVal.length === 0) return
            setOption(newVal)
          }}
          onKeyPress={e => e.preventDefault()}
          style={{ width: '300px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
        >
          {option.map((el, idx) => (
            <Chip key={el.id} onDelete={() => handleDelete(el.name)}>
              {el.name}
            </Chip>
          ))}
        </ReactSortable>

        {option.length !== 0 && <SC.TempText2 view="false">{<span>{`등 총 ${option.length} 개`}</span>}</SC.TempText2>}
      </div>
    </SC.TagSummaryContainer>
  )}
</>
```
