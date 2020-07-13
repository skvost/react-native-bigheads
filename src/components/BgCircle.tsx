import React from 'react'
import { useTheme } from '../themeContext'
import { colors } from '../theme'
import { Circle } from 'react-native-svg'

export interface BgCircleProps {
  circleColor: keyof typeof colors.bgColors
}

export const BgCircle = ({ circleColor }: BgCircleProps) => {
  const { colors } = useTheme()

  const color = colors.bgColors[circleColor]

  return <Circle cx="500" cy="630.1601" r="332.441995" fill={color} />
}
