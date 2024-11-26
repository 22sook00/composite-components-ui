import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, ThemeProvider } from '@mui/material'
import useMultiSelectStyle from '@/hooks/useMultiSelectStyle'

import {
  CheckedIcon,
  UnCheckedIcon,
  DisableUnCheckedIcon,
  DisableCheckedIcon,
} from '@/components/icon/common/check/Check'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import MultiSelectLabel from './components/label/_component'
import MultiSelectPlaceholder from './components/placeholder/_component'

import * as SC from './_styles'
import IcArrowDownDefault20 from './_assets/ic_arrow_down_default20'
import IcArrowTopDefault20 from './_assets/ic_arrow_top_default20'
import useMultiSelectChange from './hooks/useMultiSelectChange'

const MultiSelect = ({
  name,
  control,
  options,
  disabled = false,
  defaultValue,
  value,
  rule,
  placeholder,
  width,
  size = 'md', //"sm" | "md" | "lg"
  selectedValues,
  setSelectedValues,
  handleChange,
  handleClose,
  limit = null,
  isError = false,
  isLoading = false,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const { selectSize, MenuProps } = useMultiSelectStyle(size, width)

  const { filteredOption, initSortedValues, handleSelectChange } = useMultiSelectChange({
    options,
    selectedValues,
    setSelectedValues,
  })

  return (
    <ThemeProvider theme={SC.selectTheme}>
      {control ? (
        <Controller
          control={control}
          name={name}
          rules={rule && rule}
          render={({ field, fieldState }) => {
            const { onChange, value: selectedValues } = field
            const { error } = fieldState

            const handleChange = event => {
              const { value } = event.target
              const sortedValues = options
                .map(option => option.value)
                .filter(optionValue => value.includes(optionValue))

              if (value.includes('all')) {
                const toggle =
                  selectedValues.length === filteredOption?.length ? [] : options.map(option => option.value)
                onChange(toggle)
                return
              }
              onChange(sortedValues)
            }

            return (
              <FormControl error={!!error} sx={{ width: selectSize.width }}>
                <SC.SelectContainer>
                  <SC.SelectBox
                    MenuProps={MenuProps}
                    disabled={disabled}
                    onChange={handleChange}
                    value={initSortedValues || field.value}
                    status={'false'}
                    displayEmpty
                    multiple
                    error={!!error}
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    IconComponent={open ? IcArrowTopDefault20 : IcArrowDownDefault20}
                    renderValue={selected => {
                      return (
                        <MultiSelectPlaceholder
                          selected={selected}
                          options={options}
                          placeholder={placeholder}
                          selectStyle={{ size, width, disabled }}
                        />
                      )
                    }}
                  >
                    <MenuItem
                      disableRipple
                      size={size}
                      value="all"
                      className="all-menu"
                      disabled={disabled || isLoading}
                    >
                      <Checkbox
                        checkedIcon={disabled || isLoading ? <DisableCheckedIcon /> : <CheckedIcon />}
                        icon={disabled || isLoading ? <DisableUnCheckedIcon /> : <UnCheckedIcon />}
                        checked={selectedValues.length === options.length}
                      />
                      <SC.SelectMenuText width={selectSize.ellipsisWidth}>전체 그룹</SC.SelectMenuText>
                    </MenuItem>

                    {options.map(el => (
                      <MenuItem
                        size={size}
                        key={`multi-${el.value}`}
                        value={el.value}
                        disabled={disabled || isLoading ? true : el.disabled}
                        disableRipple
                      >
                        <Checkbox
                          checkedIcon={el.disabled ? <DisableCheckedIcon /> : <CheckedIcon />}
                          icon={el.disabled ? <DisableUnCheckedIcon /> : <UnCheckedIcon />}
                          checked={selectedValues.includes(el.value)}
                        />

                        <MultiSelectLabel option={el} selectStyle={{ size, width }} />
                      </MenuItem>
                    ))}
                  </SC.SelectBox>
                </SC.SelectContainer>
              </FormControl>
            )
          }}
        />
      ) : (
        <FormControl sx={{ width: selectSize.width }}>
          <SC.SelectContainer>
            <SC.SelectBox
              MenuProps={MenuProps}
              disabled={disabled}
              onChange={handleSelectChange}
              onClose={() => {
                setOpen(false)
                if (handleClose) {
                  handleClose(selectedValues)
                }
              }}
              value={initSortedValues ?? options[0]?.value}
              displayEmpty
              multiple
              error={isError}
              status={'false'}
              open={open}
              onOpen={() => setOpen(true)}
              IconComponent={open ? IcArrowTopDefault20 : IcArrowDownDefault20}
              width={width}
              renderValue={selected => {
                return (
                  <MultiSelectPlaceholder
                    selected={selected}
                    options={options}
                    placeholder={placeholder}
                    selectStyle={{ size, width, disabled }}
                  />
                )
              }}
              {...rest}
            >
              <MenuItem size={size} value="all" className="all-menu" disabled={disabled || isLoading} disableRipple>
                <Checkbox
                  checkedIcon={disabled || isLoading ? <DisableCheckedIcon /> : <CheckedIcon />}
                  icon={disabled || isLoading ? <DisableUnCheckedIcon /> : <UnCheckedIcon />}
                  checked={selectedValues.length === filteredOption.length}
                />
                <SC.SelectMenuText width={selectSize.ellipsisWidth}>전체 그룹</SC.SelectMenuText>
              </MenuItem>

              {options.map(el => (
                <MenuItem
                  size={size}
                  key={`multi-${el.value}`}
                  value={el.value}
                  disabled={disabled || isLoading ? true : el.disabled}
                  disableRipple
                >
                  <Checkbox
                    checkedIcon={el.disabled ? <DisableCheckedIcon /> : <CheckedIcon />}
                    icon={el.disabled ? <DisableUnCheckedIcon /> : <UnCheckedIcon />}
                    checked={selectedValues.includes(el.value)}
                  />

                  <MultiSelectLabel option={el} selectStyle={{ size, width }} />
                </MenuItem>
              ))}
            </SC.SelectBox>
          </SC.SelectContainer>
        </FormControl>
      )}
    </ThemeProvider>
  )
}

export default MultiSelect
