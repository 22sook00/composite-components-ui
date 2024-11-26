import { Typography } from '@/components/common/typography/Typography'
import * as SC from './Chip.styles'
import { CloseTagIcon } from '@/components/icon/common/X'
import { IconButton } from '@/components/common/buttons/index'

const Chip = ({ children, onDelete, bg }) => {
  return (
    <SC.Container align="center" w="fit-content" p="4px 6px" radius="2px" bg={bg || '#f8f8f8'}>
      <div>
        <Typography.Caption1 c="#666666">{children}</Typography.Caption1>
      </div>

      {onDelete && (
        <IconButton onClick={onDelete}>
          <CloseTagIcon />
        </IconButton>
      )}
    </SC.Container>
  )
}

export default Chip
