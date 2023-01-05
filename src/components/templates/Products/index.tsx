import React from 'react';
import { FlatList } from 'react-native';
import { Product, ProductsResponseType } from '../../../types';
import { ProductItem } from '../../organisms/Product';

type Props = {
    data: ProductsResponseType | Product[],
}

export function Products({ data }: Props) {

    const renderItem = ({ item }: { item: Product }) => <ProductItem item={item} />

    return (
        <FlatList
            style={{ width: '100%', padding: 10, marginTop: 10 }}
            data={data as Product[]}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
        />
    );
}
