import Products from "@/data/model/Products";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: Products;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex gap-4 bg-zinc-900 rounded-md overflow-hidden"
    >
      <div className="min-w-48 min-h-36 relative">
        <Image src={product.thumbnail} alt={product.title} fill />
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-xs text-zinc-400">{product.description}</p>
        <span className="text-lg">R$ {product.price.toFixed(2)}</span>
      </div>
    </Link>
  );
}
