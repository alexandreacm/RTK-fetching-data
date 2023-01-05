import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDeleteProductMutation } from '../../../services/api';
import { Product } from '../../../types';

import { Box, Text } from '../../atoms';

type Props = {
    item: Product
}

export function ButtonItem({ item }: Props) {
    const [deleteProduct] = useDeleteProductMutation();

    return (
        <TouchableOpacity onPress={() => deleteProduct(String(item?.id))}>
            <Box
                backgroundColor={'cardBox'}
                marginBottom={'l'}
                borderRadius={10}
                padding={'s'}>
                <Text variant={'text'} key={item.id}>Product: {item?.name}</Text>
            </Box>
        </TouchableOpacity>
    );
}
