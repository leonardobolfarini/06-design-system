import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@hakari-ui-design-system/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  css,
  keyframes,
  getCssText,
  createTheme,
  styled,
  globalCss,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
