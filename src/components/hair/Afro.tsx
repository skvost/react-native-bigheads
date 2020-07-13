import React from 'react'
import { useTheme } from '../../themeContext'
import { HairProps } from './types'
import { Path } from 'react-native-svg'

export const Back = ({ hairColor }: HairProps) => {
  const { colors } = useTheme()

  const { base, shadow } = colors.hair[hairColor]

  return (
    <>
      <Path
        d="M833.15,369a58.35,58.35,0,0,0-35.89-54.16,58.56,58.56,0,0,0,25.82-48.77c0-27.77-19-51-44.47-56.88a59.13,59.13,0,0,0,7.51-28.9C786.12,148.1,760.55,122,729,122a55.89,55.89,0,0,0-24.2,5.49,58.35,58.35,0,0,0,.67-8.92c0-32.21-25.57-58.33-57.12-58.33a56.49,56.49,0,0,0-43.76,20.86c-1.61-30.74-26.53-55.17-57-55.17A56.9,56.9,0,0,0,497.6,56a56.93,56.93,0,0,0-50-30.07c-30.5,0-55.42,24.43-57,55.17a56.53,56.53,0,0,0-43.77-20.86c-31.53,0-57.11,26.11-57.11,58.33a59.65,59.65,0,0,0,.66,8.92A55.76,55.76,0,0,0,266.21,122c-31.54,0-57.12,26.12-57.12,58.33a59,59,0,0,0,7.51,28.9c-25.45,5.88-44.46,29.11-44.46,56.88A58.56,58.56,0,0,0,198,314.86a58.83,58.83,0,0,0-1.13,107.85,58.81,58.81,0,0,0-14.6,39c0,28.51,20.05,52.25,46.54,57.33-11.51,10.31,545.36,10.93,534.18.55,28.2-3.57,50-28.11,50-57.87a58.87,58.87,0,0,0-14.61-39A58.4,58.4,0,0,0,833.15,369ZM270.81,513.54c-.93-.52-1.89-1-2.85-1.41C268.93,511.56,270.81,513.54,270.81,513.54Z"
        fill={base}
      />
      <Path
        d="M470,505.43a51,51,0,0,1-85.38-36.67,51.1,51.1,0,0,1-63.44-66.59,51.18,51.18,0,0,1-32.54-87.48,51.32,51.32,0,0,1-1.26-93.62A51.42,51.42,0,0,1,327,136.89h.16a51.55,51.55,0,0,1,50-63.89,53,53,0,0,1,5.66.31,56.13,56.13,0,0,0-36-13.09c-31.54,0-57.11,26.11-57.11,58.33a59.65,59.65,0,0,0,.66,8.92A55.76,55.76,0,0,0,266.21,122c-31.54,0-57.12,26.12-57.12,58.33a59,59,0,0,0,7.51,28.9c-25.45,5.88-44.46,29.11-44.46,56.88A58.56,58.56,0,0,0,198,314.86a58.83,58.83,0,0,0-1.13,107.85,58.81,58.81,0,0,0-14.6,39c0,28.51,20.05,52.25,46.54,57.33-5.61,5,123.81,7.75,256.66,8A51.14,51.14,0,0,1,470,505.43Z"
        fill={shadow}
      />
      <Path
        d="M741.2,386l-35,78.16,39.47,58.61c12.24-.91,18.61-2,17.31-3.17,28.2-3.57,50-28.11,50-57.87a60.75,60.75,0,0,0-.8-9.7C792.18,391.39,741.2,386,741.2,386Z"
        fill={shadow}
      />
      <Path
        d="M833.15,369a58.35,58.35,0,0,0-35.89-54.16,58.56,58.56,0,0,0,25.82-48.77c0-27.77-19-51-44.47-56.88a59.13,59.13,0,0,0,7.51-28.9C786.12,148.1,760.55,122,729,122a55.89,55.89,0,0,0-24.2,5.49,58.35,58.35,0,0,0,.67-8.92c0-32.21-25.57-58.33-57.12-58.33a56.49,56.49,0,0,0-43.76,20.86c-1.61-30.74-26.53-55.17-57-55.17A56.9,56.9,0,0,0,497.6,56a56.93,56.93,0,0,0-50-30.07c-30.5,0-55.42,24.43-57,55.17a56.53,56.53,0,0,0-43.77-20.86c-31.53,0-57.11,26.11-57.11,58.33a59.65,59.65,0,0,0,.66,8.92A55.76,55.76,0,0,0,266.21,122c-31.54,0-57.12,26.12-57.12,58.33a59,59,0,0,0,7.51,28.9c-25.45,5.88-44.46,29.11-44.46,56.88A58.56,58.56,0,0,0,198,314.86a58.83,58.83,0,0,0-1.13,107.85,58.81,58.81,0,0,0-14.6,39c0,28.51,20.05,52.25,46.54,57.33-11.51,10.31,545.36,10.93,534.18.55,28.2-3.57,50-28.11,50-57.87a58.87,58.87,0,0,0-14.61-39A58.4,58.4,0,0,0,833.15,369Z"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
    </>
  )
}

export const Front = ({ hairColor }: HairProps) => {
  const { colors, skin } = useTheme()

  const { base, shadow } = colors.hair[hairColor]

  return (
    <>
      <Path
        d="M558.42,406.88c-12.87,24-60,37.45-63.83,31.42-4.3-6.73,37.85-55.32,13.9-106.14"
        fill={skin.shadow}
      />
      <Path
        d="M500.15,221.81C369,221.81,247.79,328.25,226,457c0,0,201.33,15.23,274.66-66.75-4.65,22.65-17.72,39.87-15.51,43.33,3.08,4.84,40.92-5.92,51.25-25.22l-3.66-5.48C582.65,421,680.23,443.46,746,375.26,702.52,285,604.61,221.81,500.15,221.81Z"
        fill={base}
      />
      <Path
        d="M331.52,454.81a51.09,51.09,0,0,1-10.35-52.64,51.12,51.12,0,0,1-47.23-58.35c-24.09,33.69-41,72.3-48,113.18A671.08,671.08,0,0,0,331.52,454.81Z"
        fill={shadow}
      />
      <Path
        d="M739.66,389.6C665,447,579.07,424.7,533.51,405.69c-10.14,17.94-45.26,27.89-48.15,23.36-2-3.08,8.82-17.65,13.78-37.16-74.28,80.27-259.85,72-259.85,72"
        fill="none"
        stroke={colors.outline}
        strokeMiterlimit={10}
        strokeWidth="12px"
      />
      <Path
        d="M280.92,140.17a53.59,53.59,0,0,0-20.26,5A45.83,45.83,0,0,0,245,157a18.94,18.94,0,0,0-1.53,1.92c-.48.66-1,1.28-1.46,2a43.23,43.23,0,0,0-2.56,4.23,52.32,52.32,0,0,0-3.9,9.18,62.77,62.77,0,0,0-2.29,20.8A36.91,36.91,0,0,1,229.42,173l.53-2.86.29-1.44c.11-.47.27-.93.41-1.4.28-.94.56-1.88.87-2.81s.76-1.8,1.14-2.71a43.25,43.25,0,0,1,2.76-5.21c.51-.85,1.14-1.61,1.7-2.42a24.27,24.27,0,0,1,1.82-2.33,39.88,39.88,0,0,1,19.58-12.56A34.18,34.18,0,0,1,280.92,140.17Z"
        fill={colors.white}
      />
      <Path
        d="M358.88,77.15a62.84,62.84,0,0,0-18,2,52.26,52.26,0,0,0-15.47,7.06A51.64,51.64,0,0,0,313.09,98c-.84,1.18-1.8,2.31-2.53,3.58l-1.21,1.88c-.43.62-.71,1.3-1.09,2a73.25,73.25,0,0,0-4.1,8.38,28.54,28.54,0,0,1,.39-9.7c.17-.8.27-1.63.52-2.42l.74-2.36a31.32,31.32,0,0,1,1.91-4.61A39,39,0,0,1,321,79.59,39.38,39.38,0,0,1,339.89,73,32.35,32.35,0,0,1,358.88,77.15Z"
        fill={colors.white}
      />
    </>
  )
}

export const hatScale = 0
