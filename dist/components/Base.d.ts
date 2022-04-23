import React from 'react';
import { colors } from '../theme';
import { FacialHairProps } from './facialHair/types';
import { HairProps } from './hair/types';
import { ClothingProps } from './clothing/types';
import { MouthProps } from './mouths/types';
import { BodyProps } from './bodies/types';
import { HatProps } from './hats/types';
import { EyeProps } from './eyes/types';
import { SvgProps } from 'react-native-svg';
import { ViewProps, ViewStyle } from 'react-native';
import { BgShapeProps, BgMaskProps } from './backgrounds/types';
interface BaseProps extends SvgProps {
    eyes: React.ComponentType<EyeProps>;
    eyebrows: React.ComponentType;
    mouth: React.ComponentType<MouthProps>;
    hair?: {
        Front: React.ComponentType<HairProps>;
        Back: React.ComponentType<HairProps>;
        hatScale?: number;
    };
    facialHair: React.ComponentType<FacialHairProps>;
    accessory: React.ComponentType;
    graphic: React.ComponentType;
    hat: {
        Front: React.ComponentType<ClothingProps & HatProps>;
        Back: React.ComponentType<ClothingProps & HatProps>;
    };
    body: {
        Front: React.ComponentType<BodyProps>;
        Back: React.ComponentType<BodyProps>;
        hasBreasts: boolean;
    };
    clothing: {
        Front: React.ComponentType<ClothingProps>;
        Back: React.ComponentType<ClothingProps>;
        braStraps?: boolean;
    };
    clothingColor: keyof typeof colors.clothing;
    hairColor: keyof typeof colors.hair;
    bgShape: {
        Shape: React.ComponentType<BgShapeProps>;
        Mask: React.ComponentType<BgMaskProps>;
    };
    bgColor: keyof typeof colors.bgColors;
    lipColor: keyof typeof colors.lipColors;
    hatColor: keyof typeof colors.clothing;
    showBackground: boolean;
    lashes: boolean;
    size: number;
    containerStyles: ViewStyle;
    containerProps: ViewProps;
    svgRef?: React.Ref<React.Component<SvgProps>>;
}
export declare const Base: ({ eyes: Eyes, eyebrows: Eyebrows, mouth: Mouth, hair, facialHair: FacialHair, clothing, accessory: Accessory, graphic: Graphic, hat, body, hairColor, clothingColor, bgShape, bgColor, lipColor, hatColor, showBackground, lashes, size, containerStyles, containerProps, svgRef, ...rest }: BaseProps) => JSX.Element;
export {};
