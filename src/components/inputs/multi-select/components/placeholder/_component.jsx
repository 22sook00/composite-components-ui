import { useEffect, useState, useRef, Fragment } from 'react'
import * as SC from '../../_styles'

import { Typography } from '@/components/common/typography/Typography'
import { Flex } from '@/components/layout'

const MultiSelectPlaceholder = ({ selected, options, selectStyle, placeholder }) => {
  const { disabled } = selectStyle

  const filterSelectOption = options.filter(grp => selected.includes(grp.value))

  return (
    <SC.PlaceholderContainer>
      {selected.length < 1 && <Typography.Body2 c={'#bbb'}>{placeholder}</Typography.Body2>}

      <Flex justify={'space-between'} maw={'250px'}>
        {selected.length === options.length && <Typography.Body2 w={'fit-content'}>전체그룹</Typography.Body2>}
        {selected.length !== options.length && (
          <Typography.Body2>
            {filterSelectOption?.map((grp, idx) => {
              return (
                <Fragment key={`selected-group-${idx}`}>
                  {grp.isDefault && <b>[기본]</b>} {grp.label}
                  {idx !== selected.length - 1 && ','}
                </Fragment>
              )
            })}
          </Typography.Body2>
        )}

        {/* {selected.length > 1 && selected.length !== options.length && (
          <SC.CountChip>
            <Typography.Body2 disabled={disabled}>+ {selected.length - 1}</Typography.Body2>
          </SC.CountChip>
        )} */}
      </Flex>
    </SC.PlaceholderContainer>
  )
}
export default MultiSelectPlaceholder
