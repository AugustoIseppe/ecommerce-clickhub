import Products from "@/data/model/Products";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";


interface ProductItemProps {
    product: Products;
    index: number;
}

export default function ProductItem(props: ProductItemProps) {
    const { product, index } = props;

    return (
        <div className="w-56 bg-zinc-200 shadow-md rounded-md p-4">
            <div className="flex flex-col items-center justify-center h">

                <Image
                    src={`http://localhost:3000/uploads/products/${product.image1}`}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="rounded-md"
                />
            </div>
            <div className="flex flex-col items-start justify-start mt-5 h-4">

                <p className="text-xs  font-bold text-zinc-700">{product.name}</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 ">
                <p className="text-xs text-zinc-500 line-clamp-2">{product.description}</p>
            </div>

            <div className="">
                <div className="flex items-center justify-between mt-4 gap">
                    <p className="text-xs font-bold text-zinc-700">R$ {product.price}</p>
                    <Link href={`/product/${product.product_id}`}>
                        <div className="bg-orange-500 text-xs p-1 rounded-2xl">
                            <div className="flex items-center justify-center gap-4 p-1">
                                <ShoppingCartIcon className="h-4 w-4 text-white" />

                                <span className="text-white font-bold text-xs">Add to Cart</span>
                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}