"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Products from "@/data/model/Products"; // Importe o seu modelo de Produtos
import Image from "next/image";
import fetchProductById from "@/data/service/obterProductsById";

export default function ProductDetailPage() {
  //useParams() -> Hook que retorna os parâmetros dinâmicos da URL como um objeto.
  //{ id } = useParams(): Desestrutura o objeto retornado por useParams e extrai o parâmetro id, que é o valor presente na URL (por exemplo, o ID do produto).
  const { id } = useParams(); // Pega o ID da URL e garante que é uma string
  const [product, setProduct] = useState<Products | null>(null);

  // useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais
  // Ex: buscar dados de uma API, manipular o DOM, etc.
  // o useEffect é executado após a renderização do componente
  useEffect(() => {
    if (id) {
      // Busca o produto ao carregar a página
      fetchProductById(id as string).then(setProduct);
    }
  }, [id]);

  if (!product) {
    return <p>Carregando...</p>; // Exibe enquanto o produto está sendo carregado
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="flex gap-4">
        <div className="relative w-64 h-64">
          <Image src={product.thumbnail} alt={product.title} fill />
        </div>
        <div>
          <p className="text-lg">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            R$ {product.price.toFixed(2)}
          </p>
          <span className="text-sm text-gray-400 mt-2">
            Desconto:{product.discountPercentage}
          </span>
          <p className="text-sm text-gray-400 mt-2">
            Categoria: {product.category}
          </p>
        </div>
      </div>
    </div>
  );
}
