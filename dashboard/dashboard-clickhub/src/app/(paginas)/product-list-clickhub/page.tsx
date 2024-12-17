import ProductItemClickHub from "@/components/product/ProductItemClickHub";
import ClickHubProducts from "@/data/model/ClickHubProducts";
import obterProductsClickHub from "@/data/service/obterProductsClickHub";

export default async function ProductListClickHub() {
    const products = await obterProductsClickHub();
    console.log(`TIPO DO PRODUTO: ${typeof products}`);
    console.log(`LISTA DE PRODUTOS: ${JSON.stringify(products, null, 2)}`);

    return (
        <div className="overflow-x-auto h-screen bg-white text-black border-none">
            <table className="table table-xs w-full h-full bg-white text-black border-none">
                <thead>
                    <tr>
                        <th className="text-center text-black">#</th>
                        <th className="text-left text-black">Nome</th>
                        <th className="text-center text-black">Preço</th>
                        <th className="text-center text-black">Estoque</th>
                        <th className="text-center text-black">Criado em</th>
                        <th className="text-center text-black">Detalhes</th>
                    </tr >
                </thead >
                <tbody>
                    {products.map((product: ClickHubProducts, index: number) => (
                        <ProductItemClickHub
                            key={product.product_id}
                            product={product}
                            index={index}
                        />
                    ))}
                </tbody>
            </table >
        </div >
    );
}
