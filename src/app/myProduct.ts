export interface myProduct {
    id: number;
    product: Array<{
        name: string;
        description: string;
        price: number;
        category: string;
        available: boolean
    }>

}