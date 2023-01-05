import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from '@shopify/restyle';

import { Text } from '../Text';
import { Theme } from '../../../styles/theme';
import { Box } from '../Box';

type Props = TouchableOpacityProps & {
    onPress: () => void;
    label: string;
};

export function ButtonLabel({ onPress, label, ...rest }: Props) {
    const theme = useTheme<Theme>();

    return (
        <TouchableOpacity onPress={onPress} {...rest} style={{ marginLeft: 12 }}>
            <Box
                width="100%"
                borderRadius={10}
                backgroundColor="backgroundButton"
                padding="s"
                marginTop="x"
                alignItems="center"
                justifyContent="center"
            >

                <Text variant="buttonLabel">{label}</Text>

            </Box>
        </TouchableOpacity>
    );
};