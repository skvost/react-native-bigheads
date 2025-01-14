/// <reference types="react" />
import { colors } from '../../theme';
export interface ClothingProps {
    color: keyof typeof colors.clothing;
    graphic?: React.ComponentType;
    hasBreasts?: boolean;
}
