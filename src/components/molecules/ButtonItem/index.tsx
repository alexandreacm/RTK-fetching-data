import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';

import { useDeleteProductMutation } from '../../../services/api';

import { Box, Text } from '../../atoms';

type Props = {
    id: number,
    name: string,
    onUpdate: (id: number) => void
}

export function ButtonItem({ id, name, onUpdate }: Props) {
    const [deleteProduct] = useDeleteProductMutation();

    return (
        <TouchableOpacity onPress={() => onUpdate(id)}>
            <Box
                backgroundColor={'cardBox'}
                marginBottom={'l'}
                borderRadius={10}
                padding={'l'}>
                <Box
                    width='100%'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'>
                    <Text variant={'text'} key={id}>Product: {name}</Text>
                    <Icon name='delete' size={20} color={'black'} onPress={() => deleteProduct(String(id))} />
                </Box>
            </Box>
        </TouchableOpacity>
    );
}
