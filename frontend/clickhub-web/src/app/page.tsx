import ProductItem from "@/components/product/ProductItem";
import HomePage from "@/components/template/HomePage";
import Products from "@/data/model/Products";
import getProducts from "@/data/service/get-products";

export default async function Home() {
  const products = await getProducts();

  return (
    <HomePage>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Produtos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
          {products.map((product: Products, index: number) => (
            <ProductItem key={product.product_id} product={product} index={index} />
          ))}
        </div>
      </div>

    </HomePage>
  );
}
