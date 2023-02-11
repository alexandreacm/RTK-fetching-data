import {
    boxRestyleFunctions,
    createBox,
    createVariant
} from '@shopify/restyle';

import { TextInput, TextInputProps } from "react-native";
import { Theme } from '../../../styles/theme';

const restyleFunctions = [
    ...boxRestyleFunctions,
    createVariant<Theme>({
        themeKey: 'inputVariants',
    }) as any,
];

export const Input = createBox<Theme, TextInputProps>(TextInput, restyleFunctions)
