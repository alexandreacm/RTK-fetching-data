import React from 'react';
import { Platform, TextInput } from 'react-native';
import slugify from 'slugify';
import { useForm, Controller } from 'react-hook-form';

import { Box, Text } from '../../components/atoms';
import { ButtonLabel } from '../../components/atoms/ButtonLabel';

import {
    useCreateProductMutation,
    useGetProductsQuery,
    useUpdateProductMutation
} from '../../services/api';

import { Product } from '../../types';
import { Products } from '../../components/templates/Products';

export function Home() {
    const { data = [], isLoading, isFetching, error } = useGetProductsQuery();
    const [createProduct, { isSuccess }] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    const { control, handleSubmit, reset } = useForm();


    async function AddProduct(value: Product) {
        const newProduct: Product = {
            id: Number(`${slugify(Date.now() + " ", { lower: true })}`),
            name: value.name,
            description: 'New Prodcut',
            price: 5.0,
            category_id: 2
        }

        createProduct(newProduct);
        reset();

        // if (isSuccess) {
        //     alert('Created successfully');
        // }
    }

    function handleUpdateProduct(id: number) {
        const newProduct: Product = {
            id: id,
            name: "Chocolate",
            description: "New Product",
            price: 5.5,
            category_id: 2
        }

        updateProduct(newProduct);
        alert('updated')
    }

    return (
        <Box
            flex={1}
            backgroundColor={'primaryBackGround'}
            alignItems='center'
            justifyContent='center'>

            <Text variant={'header'} marginTop={Platform.OS === 'ios' ? 'xl' : 'none'}>List of Products</Text>

            <Box
                flexDirection="row"
                justifyContent="space-between"
            >
                <ButtonLabel
                    onPress={handleSubmit(async (data) => {
                        await AddProduct(data as Product);
                    })}
                    label='Create Product' />
                <ButtonLabel onPress={() => handleUpdateProduct(8)} label='Update Product' />
            </Box>

            <Controller
                name="name"
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={{
                            width: 200,
                            margin: 2,
                            borderWidth: 1,
                            height: 30,
                            padding: 5,
                            borderRadius: 5,
                            marginTop: 15,
                            borderColor: "rgba(0,0,0, 0.4)",
                        }} placeholder="Product Name"
                    />
                )}
            />

            {
                isLoading &&
                <Text
                    color={'loading'}
                    fontSize={35}>Loading...</Text>
            }

            {
                isFetching &&
                <Text
                    color={'loading'}
                    fontSize={35}>Fetching...</Text>
            }

            {
                error && <Text
                    color={'errorAlert'}
                    fontSize={30}>Something went wrong</Text>
            }


            <Products data={data} />
        </Box>
    );
}
