import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastRoot = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',
})

export const ToastInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})
