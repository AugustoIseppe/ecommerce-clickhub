// src/app/(paginas)/product-list-clickhub/[id]/page.tsx

"use client";

import { useRouter } from 'next/navigation'; // Import para redirecionamento
import { useState, useEffect } from 'react';
import obterProductsClickHubById from '@/data/service/obterProductsClickHubById';
import excluirProduto from '@/data/service/excluirProdutoClickHub';
import Link from 'next/link';
import obterCategoriasClickHubById from '@/data/service/obterCategoriesClickHubById';
import excluirCategoriaClickHub from '@/data/service/excluirCategoriaClickHub';

export default function PaginaCategoriaClickHubPorId({ params }: { params: Promise<{ id: string }> }) {
    const [categoria, setCategoria] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            const resolvedParams = await params;
            const id = resolvedParams.id; // Resolve a promise de `params`
            console.log(`ID da categoria: ${id}`);
            const categorieData = await obterCategoriasClickHubById(id);
            setCategoria(categorieData);
        };

        fetchProduct();
    }, [params]);

    if (!categoria) return <div>Carregando...</div>;

    const handleExcluirProduto = async () => {
        const confirmacao = confirm('Tem certeza que deseja excluir esta categoria?');
        const id = categoria.category_id;
        if (!confirmacao) return;

        const resultado = await excluirCategoriaClickHub(id) !== undefined;
        if (resultado) {
            alert('Categoria excluída com sucesso!');
            router.push('/categories-list-clickhub'); // Redireciona para a lista de produtos
        } else {
            alert('Ocorreu um erro ao excluir essa categoria.');
        }
    };

    if (!categoria) return <div>Carregando...</div>;

    return (
        <div className="p-5 flex flex-col gap-1 justify-center items-center">
            {/* Nome do Produto */}
            <h1 className="text-2xl font-bold text-center text-black">{categoria.name}</h1>




            <div className="flex flex-col gap-4 justify-center items-center">

                <div className="flex flex-col gap-2 w-1/2 items-center">
                    <button
                        className="btn btn-outline btn-error w-60"
                        onClick={handleExcluirProduto} // Função chamada ao clicar no botão
                    >
                        Excluir Categoria
                    </button>
                    <Link href="/categories-list-clickhub" className="mt-2 w-60">
                        <button className="button-form">Voltar</button>
                    </Link>
                </div>




            </div>
        </div>
    );
}

