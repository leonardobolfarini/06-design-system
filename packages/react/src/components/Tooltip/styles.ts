import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: `$3 $4`,
  borderRadius: '5px',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  background: 'transparent',
  color: '$white',
  padding: `$4 $6`,
  border: '1px solid transparent',
  borderRadius: '$sm',

  '&:not(:disabled)': {
    background: '$gray600',
  },
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
