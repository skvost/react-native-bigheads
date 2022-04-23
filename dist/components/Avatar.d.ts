import React from 'react';
import { colors } from '../theme';
import * as LongHair from '../components/hair/LongHair';
import * as BunHair from '../components/hair/BunHair';
import * as ShortHair from '../components/hair/ShortHair';
import * as PixieCut from '../components/hair/PixieCut';
import * as BaldingHair from '../components/hair/BaldingHair';
import * as BuzzCut from '../components/hair/BuzzCut';
import * as Afro from '../components/hair/Afro';
import * as BobCut from '../components/hair/BobCut';
import * as Beanie from '../components/hats/Beanie';
import * as Turban from '../components/hats/Turban';
import * as Chest from '../components/bodies/Chest';
import * as Breasts from '../components/bodies/Breasts';
import * as Dress from './clothing/Dress';
import { ViewProps, ViewStyle } from 'react-native';
import * as ChequeredShirt from './clothing/ChequeredShirt';
import * as ChequeredShirtDark from './clothing/ChequeredShirtDark';
import * as Mohawk from './hair/Mohawk';
import * as Party from './hats/Party';
import * as Hijab from './hats/Hijab';
import { SvgProps } from 'react-native-svg';
export declare const eyesMap: {
    normal: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    leftTwitch: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    happy: () => JSX.Element;
    content: () => JSX.Element;
    squint: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    simple: () => JSX.Element;
    dizzy: () => JSX.Element;
    wink: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    hearts: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    crazy: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    cute: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    dollars: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    stars: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    cyborg: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    simplePatch: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
    piratePatch: ({ withLashes }: import("./eyes/types").EyeProps) => JSX.Element;
};
export declare const eyebrowsMap: {
    raised: () => JSX.Element;
    leftLowered: () => JSX.Element;
    serious: () => JSX.Element;
    angry: () => JSX.Element;
    concerned: () => JSX.Element;
};
export declare const mouthsMap: {
    grin: () => JSX.Element;
    sad: () => JSX.Element;
    openSmile: () => JSX.Element;
    lips: ({ lipColor }: import("./mouths/types").MouthProps) => JSX.Element;
    open: () => JSX.Element;
    serious: () => JSX.Element;
    tongue: () => JSX.Element;
    piercedTongue: () => JSX.Element;
    vomitingRainbow: () => JSX.Element;
};
export declare const hairMap: {
    none: {
        Front: () => JSX.Element;
        Back: () => JSX.Element;
    };
    long: typeof LongHair;
    bun: typeof BunHair;
    short: typeof ShortHair;
    pixie: typeof PixieCut;
    balding: typeof BaldingHair;
    buzz: typeof BuzzCut;
    afro: typeof Afro;
    bob: typeof BobCut;
    mohawk: typeof Mohawk;
};
export declare const facialHairMap: {
    none: () => JSX.Element;
    none2: () => JSX.Element;
    none3: () => JSX.Element;
    stubble: () => JSX.Element;
    mediumBeard: ({ color }: import("./facialHair/types").FacialHairProps) => JSX.Element;
    goatee: ({ color }: import("./facialHair/types").FacialHairProps) => JSX.Element;
};
export declare const clothingMap: {
    naked: {
        Back: () => JSX.Element;
        Front: () => JSX.Element;
    };
    shirt: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => JSX.Element;
        Front: () => JSX.Element;
    };
    dressShirt: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => JSX.Element;
        Front: () => JSX.Element;
    };
    vneck: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => JSX.Element;
        Front: () => JSX.Element;
    };
    tankTop: {
        Back: ({ color, graphic: Graphic }: import("./clothing/types").ClothingProps) => JSX.Element;
        Front: () => JSX.Element;
    };
    dress: typeof Dress;
    denimJacket: {
        Back: ({ color }: import("./clothing/types").ClothingProps) => JSX.Element;
        Front: () => JSX.Element;
    };
    hoodie: {
        Back: ({ color }: import("./clothing/types").ClothingProps) => JSX.Element;
        Front: () => JSX.Element;
    };
    chequeredShirt: typeof ChequeredShirt;
    chequeredShirtDark: typeof ChequeredShirtDark;
};
export declare const accessoryMap: {
    none: () => JSX.Element;
    roundGlasses: () => JSX.Element;
    tinyGlasses: () => JSX.Element;
    shades: () => JSX.Element;
    faceMask: () => JSX.Element;
    hoopEarrings: () => JSX.Element;
};
export declare const graphicsMap: {
    none: () => JSX.Element;
    redwood: () => JSX.Element;
    gatsby: () => JSX.Element;
    vue: () => JSX.Element;
    react: () => JSX.Element;
    graphQL: () => JSX.Element;
    donut: () => JSX.Element;
    rainbow: () => JSX.Element;
};
export declare const hatMap: {
    none: {
        Front: () => JSX.Element;
        Back: () => JSX.Element;
    };
    none2: {
        Front: () => JSX.Element;
        Back: () => JSX.Element;
    };
    none3: {
        Front: () => JSX.Element;
        Back: () => JSX.Element;
    };
    none4: {
        Front: () => JSX.Element;
        Back: () => JSX.Element;
    };
    none5: {
        Front: () => JSX.Element;
        Back: () => JSX.Element;
    };
    beanie: typeof Beanie;
    turban: typeof Turban;
    party: typeof Party;
    hijab: typeof Hijab;
};
export declare const bodyMap: {
    chest: typeof Chest;
    breasts: typeof Breasts;
};
export declare const bgShapeMap: {
    circle: {
        Shape: ({ bgColor }: import("./backgrounds/types").BgShapeProps) => JSX.Element;
        Mask: ({ id }: import("./backgrounds/types").BgMaskProps) => JSX.Element;
    };
    square: {
        Shape: ({ bgColor }: import("./backgrounds/types").BgShapeProps) => JSX.Element;
        Mask: ({ id }: import("./backgrounds/types").BgMaskProps) => JSX.Element;
    };
    squircle: {
        Shape: ({ bgColor }: import("./backgrounds/types").BgShapeProps) => JSX.Element;
        Mask: ({ id }: import("./backgrounds/types").BgMaskProps) => JSX.Element;
    };
};
export interface AvatarProps extends SvgProps {
    skinTone?: keyof typeof colors.skin;
    eyes?: keyof typeof eyesMap;
    eyebrows?: keyof typeof eyebrowsMap;
    mouth?: keyof typeof mouthsMap;
    hair?: keyof typeof hairMap;
    facialHair?: keyof typeof facialHairMap;
    clothing?: keyof typeof clothingMap;
    accessory?: keyof typeof accessoryMap;
    graphic?: keyof typeof graphicsMap;
    hat?: keyof typeof hatMap;
    body?: keyof typeof bodyMap;
    hairColor?: keyof typeof colors.hair;
    clothingColor?: keyof typeof colors.clothing;
    bgShape?: keyof typeof bgShapeMap;
    bgColor?: keyof typeof colors.bgColors;
    lipColor?: keyof typeof colors.lipColors;
    hatColor?: keyof typeof colors.clothing;
    showBackground?: boolean;
    lashes?: boolean;
    size?: number;
    containerStyles?: ViewStyle;
    containerProps?: ViewProps;
    svgRef?: React.Ref<React.Component<SvgProps>>;
}
export declare const Avatar: ({ skinTone, eyes, eyebrows, mouth, hair, facialHair, clothing, accessory, graphic, hat, body, hairColor, clothingColor, bgShape, bgColor, lipColor, hatColor, showBackground, lashes, size, containerStyles, containerProps, svgRef, ...rest }: AvatarProps) => JSX.Element;
