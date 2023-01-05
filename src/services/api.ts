import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product, ProductResponseType, ProductsResponseType } from '../types';
import { DELETE_METHOD, POST_METHOD, PUT_METHOD } from '../constants';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponseType, void>({
            query: () => 'products',
            providesTags: ["Products"]
        }),
        getProductsById: builder.query<ProductResponseType, void>({
            query: (id) => `products/${id}`,
            providesTags: ["Products"]
        }),
        createProduct: builder.mutation<void, Product>({
            query: (body) => ({
                url: 'Products',
                method: POST_METHOD,
                body
            }),
            invalidatesTags: ["Products"]
        }),
        updateProduct: builder.mutation<void, Product>({
            query: ({ id, ...rest }) => ({
                url: `products/${id}`,
                method: PUT_METHOD,
                body: rest
            }),
            invalidatesTags: ["Products"]
        }),
        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `products/${id}`,
                method: DELETE_METHOD,
            }),
            invalidatesTags: ["Products"]
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductsByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = apiSlice;
