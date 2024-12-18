import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@hakari-ui-design-system/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/leonardobolfarini.png',
    alt: 'Imagem de perfil',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const FallbackImage: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
