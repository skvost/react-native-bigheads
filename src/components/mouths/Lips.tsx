import React from 'react'
import { useTheme } from '../../themeContext'
import { MouthProps } from './types'
import { Path } from 'react-native-svg'

export const Lips = ({ lipColor }: MouthProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.lipColors[lipColor || 'red']

  return (
    <>
      {/* <Path
        d="M560.41,648.36l-.56-2.28C487.07,662.7,440,647.21,440,647.21l-1.83-.32a1.84,1.84,0,0,0,.49,1.78c18.05,18.05,34,30.45,61.79,30.45C529.93,679.12,542.43,666.22,560.41,648.36Z"
        fill={skin.shadow}
      /> */}
      <Path
        d="M558.55,642.44c-3.63,0-5.35-1.31-15.58-10.79-7.49-6.93-12.63-10.36-18.91-11.46-7.83-1.37-15.83-.88-24.36,7.68-8.53-8.56-16.52-9-24.36-7.68-6.28,1.1-11.42,4.53-18.91,11.46-10.23,9.48-11.95,10.79-15.58,10.79a1.84,1.84,0,0,0-1.3,3.14q26.25,26.25,60.15,26.28t60.15-26.28A1.84,1.84,0,0,0,558.55,642.44Z"
        fill={base}
      />
      <Path
        d="M559.57,645.84l-.55-2.21c-70.56,16.12-118.17.53-118.17.53l-1.77-.31a1.82,1.82,0,0,0,.47,1.73q26.25,26.25,60.15,26.28Q533.38,671.86,559.57,645.84Z"
        fill={shadow}
      />
      <Path
        d="M479.28,650.39c13.45-.94,26.69-1.44,39.89-3,6.59-.76,13.15-1.74,19.67-2.86s13-2.41,19.51-3.8l1.34,5.85q-9.87,2.34-19.92,3.81t-20.16,2.06c-6.75.37-13.5.54-20.25.27A127.84,127.84,0,0,1,479.28,650.39Z"
        fill={colors.outline}
      />
      <Path
        d="M441.79,641.31c1.69.43,3.57,1,5.38,1.48s3.65,1.08,5.49,1.63,3.68,1.1,5.52,1.77a27.06,27.06,0,0,1,5.46,2.64,22.06,22.06,0,0,1-6.05.9c-2,0-3.95-.16-5.93-.32s-3.93-.47-5.88-.85a38.82,38.82,0,0,1-5.86-1.55Z"
        fill={colors.outline}
      />
      <Path
        d="M558.55,642.44c-3.63,0-5.35-1.31-15.58-10.79-7.49-6.93-12.53-11.29-18.91-11.46-11.21-.3-19.15,6.12-24.76,6.12s-10.45-7.53-24-6.12c-6.34.66-11.42,4.53-18.91,11.46-10.23,9.48-11.95,10.79-15.58,10.79a1.84,1.84,0,0,0-1.3,3.14q26.25,26.25,60.15,26.28t60.15-26.28A1.84,1.84,0,0,0,558.55,642.44Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="8px"
      />
      <Path
        d="M524.06,626.48a41.49,41.49,0,0,0-12.19,2.94c-1.94.77-3.87,1.6-5.85,2.42a20.2,20.2,0,0,1-6.42,1.74,8.92,8.92,0,0,1-3.47-.64,24,24,0,0,1-3-1.4,59.7,59.7,0,0,0-5.58-2.83,27.56,27.56,0,0,0-5.94-1.73,38.5,38.5,0,0,0-6.29-.5,26.31,26.31,0,0,1,6.4-.48,24.54,24.54,0,0,1,6.38,1.25,46,46,0,0,1,5.9,2.6c1.87.94,3.71,1.83,5.52,1.74a19.76,19.76,0,0,0,5.8-1.51c2-.71,4-1.51,6-2.13A30,30,0,0,1,524.06,626.48Z"
        fill={colors.white}
      />
      <Path
        d="M472.62,652.36c3.22,0,3.23-5,0-5s-3.22,5,0,5Z"
        fill={colors.outline}
      />
    </>
  )
}
