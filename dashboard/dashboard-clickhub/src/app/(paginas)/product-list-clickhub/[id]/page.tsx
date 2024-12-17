// src/app/(paginas)/product-list-clickhub/[id]/page.tsx

"use client";

import { useRouter } from 'next/navigation'; // Import para redirecionamento
import { useState, useEffect } from 'react';
import obterProductsClickHubById from '@/data/service/obterProductsClickHubById';
import excluirProduto from '@/data/service/excluirProdutoClickHub';
import Link from 'next/link';

export default function PaginaProdutoClickHubPorId({ params }: { params: Promise<{ id: string }> }) {
    const [produto, setProduto] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            const resolvedParams = await params;
            const id = resolvedParams.id; // Resolve a promise de `params`
            console.log(`ID do produto: ${id}`);
            const produtoData = await obterProductsClickHubById(id);
            setProduto(produtoData);
        };

        fetchProduct();
    }, [params]);

    if (!produto) return <div>Carregando...</div>;

    const handleExcluirProduto = async () => {
        const confirmacao = confirm('Tem certeza que deseja excluir este produto?');
        const id = produto.product_id;
        if (!confirmacao) return;

        const resultado = await excluirProduto(id) !== undefined;
        if (resultado) {
            alert('Produto excluído com sucesso!');
            router.push('/product-list-clickhub'); // Redireciona para a lista de produtos
        } else {
            alert('Ocorreu um erro ao excluir o produto.');
        }
    };

    if (!produto) return <div>Carregando...</div>;

    return (
        <div className="p-5 flex flex-col gap-1 justify-center items-center">
            {/* Nome do Produto */}
            <h1 className="text-2xl font-bold text-center">{produto.name}</h1>

            {/* Descrição */}
            <p className="text-sm text-gray-700 text-center">{produto.description}</p>

            {/* Detalhes do Produto */}
            <div className="flex justify-around items-center p-2 rounded-md">
                <p><strong>Preço:</strong> R$ {produto.price}</p>
                <p><strong>Estoque:</strong> {produto.stock} unidades</p>
            </div>

            {/* Galeria de Imagens */}
            <div className="flex flex-wrap gap-4 justify-center">
                {produto.images.map((image: any) => (
                    <div
                        key={image.product_image_id}
                        className={`relative w-36 h-26 rounded overflow-hidden ${image.is_main ? 'border-blue-500' : 'border-gray-300'}`}
                    >
                        <img
                            src={`http://localhost:3000/uploads/products/${image.image_url}`}
                            className="object-cover w-full h-full"
                        />
                        {image.is_main && (
                            <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 text-xs rounded">
                                Destaque
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Botões */}
            <button className="btn btn-outline btn-success w-1/2 text-black">Alterar Produto</button>
            <button
                className="btn btn-outline btn-error w-1/2"
                onClick={handleExcluirProduto} // Função chamada ao clicar no botão
            >
                Excluir Produto
            </button>

            <Link href="/product-list-clickhub" className="w-1/2">
                <button className="btn btn-primary text-white">Voltar</button>
            </Link>
        </div>
    );
}
