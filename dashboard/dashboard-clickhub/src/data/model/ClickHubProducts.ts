import ClickHubProductImage from "./ClickHubProductImage";

export default interface ClickHubProducts {
    product_id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: ClickHubProductImage[];
}

