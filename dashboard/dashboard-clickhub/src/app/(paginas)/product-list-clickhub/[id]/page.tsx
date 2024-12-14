import ProdutoDetalhesClickHub from "@/components/product/ProductDetailClickHub";
import obterProductsClickHubById from "@/data/service/obterProductsClickHubById";
import Link from "next/link";

export default async function PaginaProdutoClickHubPorId({ params }: { params: { id: string } }) {
    const { id } = params; // Extrai o parâmetro `id` da rota
    // console.log(`PROPS.ID: ${id}`);

    const produto = await obterProductsClickHubById(id);
    // console.log(`PRODUTO: ${JSON.stringify(produto, null, 2)}`);

    if (!produto) return <div>Produto não encontrado</div>;
    return (
        <div className="flex flex-col gap-5">
            <ProdutoDetalhesClickHub produto={produto} />
            <Link href="/product-list-clickhub" className="self-center bg-blue-500 p-2 rounded">
                Voltar
            </Link>
        </div>
    );
}
