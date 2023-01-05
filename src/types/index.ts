export type BaseResponseType = {
    status: string;
    message: string;
}

export type Product = {
    id: number;
    name: string;
    description: string
    price: number;
    category_id: number;
};

export interface ProductsResponseType extends BaseResponseType {
    data: Array<Product>;
};

export interface ProductResponseType extends BaseResponseType {
    data: Product;
};
