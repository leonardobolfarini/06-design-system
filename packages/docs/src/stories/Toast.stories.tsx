import type { StoryObj, Meta } from '@storybook/react'
import {
  ToastComponentProps,
  ToastComponent,
  Box,
} from '@hakari-ui-design-system/react'

export default {
  title: 'Form/Toast',
  component: ToastComponent,
  args: {
    date: new Date(),
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<ToastComponentProps>

export const Primary: StoryObj<ToastComponentProps> = {}
