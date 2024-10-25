import type { StoryObj, Meta } from '@storybook/react'
import {
  TooltipComponentProps,
  TooltipComponent,
} from '@hakari-ui-design-system/react'

export default {
  title: 'Form/Tooltip',
  component: TooltipComponent,
  args: {
    disponibility: true,
    date: new Date(),
  },
} as Meta<TooltipComponentProps>

export const Primary: StoryObj<TooltipComponentProps> = {}

export const Unavailable: StoryObj<TooltipComponentProps> = {
  args: {
    disponibility: false,
  },
}
