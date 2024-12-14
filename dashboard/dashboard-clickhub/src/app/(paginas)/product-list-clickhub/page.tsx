import ProductItemClickHub from "@/components/product/ProductItemClickHub";
import ClickHubProducts from "@/data/model/ClickHubProducts";
import obterProductsClickHub from "@/data/service/obterProductsClickHub";

export default async function ProductListClickHub() {
    const products = await obterProductsClickHub();
    console.log(`TIPO DO PRODUTO: ${typeof products}`);
    console.log(`LISTA DE PRODUTOS: ${JSON.stringify(products, null, 2)}`);

    return (
        <>
            <div className="flex flex-row justify-between gap-2 p-1 text-sm font-bold">

                <h2 className="text-2xl font-black align-baseline">Produtos</h2>
                <h2 className="text-2xl font-black align-baseline">Ações</h2>

            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-0.5">
                    {products.map((product: ClickHubProducts, index: number) => (
                        <ProductItemClickHub key={product.product_id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </>

    );
}


