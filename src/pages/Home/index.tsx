import React, { useState } from 'react';
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
    const [createProduct] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    const { control, handleSubmit, reset } = useForm();
    const [productId, setProductId] = useState<number>();


    async function AddProduct(value: string) {
        const newProduct: Product = {
            id: Number(`${slugify(Date.now() + " ", { lower: true })}`),
            name: value,
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

    async function handleUpdateProduct(nameProduct: string) {
        const upProduct: Product = {
            id: Number(productId),
            name: nameProduct,
            description: "New Product",
            price: 5.5,
            category_id: 2
        }

        updateProduct(upProduct);
        alert('Field updated');
        reset();
    }

    function onHandleUpdate(id: number) {
        setProductId(id);
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
                        await AddProduct(data.name);
                    })}
                    label='Create Product'
                />
                <ButtonLabel
                    onPress={handleSubmit(async (data) => {
                        await handleUpdateProduct(data?.name)
                    })}
                    label='Update Product' />
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


            <Products data={data} onUpdate={onHandleUpdate} />
        </Box>
    );
}
