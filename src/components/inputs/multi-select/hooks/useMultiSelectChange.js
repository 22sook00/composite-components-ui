const useMultiSelectChange = ({ options, selectedValues, setSelectedValues }) => {
  const filteredOption = options.filter(el => !el.disabled)
  const initSortedValues =
    selectedValues && options.map(option => option.value).filter(optionValue => selectedValues.includes(optionValue))

  const handleSelectChange = event => {
    const value = event.target.value
    const sortedValues = options.map(option => option.value).filter(optionValue => value.includes(optionValue))

    if (value.includes('all')) {
      const selectAllToggle =
        selectedValues.length === filteredOption.length ? [] : filteredOption.map(option => option.value)
      setSelectedValues(selectAllToggle)
      handleChange && handleChange(selectAllToggle)
      return
    }

    setSelectedValues(sortedValues)
    handleChange && handleChange(sortedValues)
  }

  return { filteredOption, initSortedValues, handleSelectChange }
}

export default useMultiSelectChange
