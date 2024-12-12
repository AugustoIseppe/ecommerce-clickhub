import ProductItem from "@/components/product/ProductItem";
import Products from "@/data/model/Products";
import obterProducts from "@/data/service/obterProducts";

export default async function ProductsDummyPage() {
  const products = await obterProducts();
  // console.log(`TIPO DO PRODUTO: ${typeof products}`);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black">Products Dummy</h1>
      <div className="flex flex-col gap-6">
        {products?.products.map((product: Products) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
