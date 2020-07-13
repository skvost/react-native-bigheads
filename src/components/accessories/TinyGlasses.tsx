import React from 'react'
import { useTheme } from '../../themeContext'
import { Circle, Path } from 'react-native-svg'

export const TinyGlasses = () => {
  const { colors } = useTheme()

  return (
    <>
      <Circle
        cx="382.91"
        cy="594.66"
        r="33.84"
        fill={colors.white}
        opacity={0.2}
      />
      <Path
        d="M375.87,631l43.31-41.74a147.47,147.47,0,0,0-7.57-12.9l-45.87,44.21C367.64,621.9,373.72,630.08,375.87,631Z"
        fill={colors.white}
        opacity={0.4}
      />
      <Circle
        cx="382.91"
        cy="594.66"
        r="33.84"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M378,580.47c1.22,3.83-3.5,6.78-7,7.37-3.54,0-5.9-2.36-7.08-5.31-.59-2.95,0-5.9,2.36-7.67,2.95-1.18,7.08-2.36,9.7.67A6.85,6.85,0,0,1,378,580.47Z"
        fill={colors.white}
      />
      <Path
        d="M384.32,578.21a2.29,2.29,0,0,1-4.49.19c0-1.77.59-2.36,2.27-2.42a2.22,2.22,0,0,1,2.22,2.22Z"
        fill={colors.white}
      />
      <Circle
        cx="615.2"
        cy="594.66"
        r="33.84"
        fill={colors.white}
        opacity={0.2}
      />
      <Path
        d="M610.12,628.11l38.54-38.54c-.21-1.37-5.91-8.1-6.29-9.44l-41.72,41.74C602,622.24,608.75,627.91,610.12,628.11Z"
        fill={colors.white}
        opacity={0.4}
      />
      <Circle
        cx="615.2"
        cy="594.66"
        r="33.84"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M607.36,579.91c1,3.25-3,5.75-6,6.25-3,0-5-2-6-4.5-.5-2.5,0-5,2-6.5,2.5-1,6-2,8.23.57A5.85,5.85,0,0,1,607.36,579.91Z"
        fill={colors.white}
      />
      <Path
        d="M612.7,578a1.94,1.94,0,0,1-3.8.16c0-1.5.5-2,1.92-2A1.88,1.88,0,0,1,612.7,578Z"
        fill={colors.white}
      />
      <Path
        d="M416.74,594.66q83.68-30,164.63,0"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M615.2,634.5A39.9,39.9,0,0,1,575.6,599c-50-17.65-101.46-17.64-153.1,0a39.81,39.81,0,0,1-50.92,33.84,38,38,0,0,0,54.51-29.91c49.22-16.86,98.28-16.88,145.93,0a38,38,0,0,0,54.51,30A40,40,0,0,1,615.2,634.5Z"
        opacity={0.15}
      />
    </>
  )
}
