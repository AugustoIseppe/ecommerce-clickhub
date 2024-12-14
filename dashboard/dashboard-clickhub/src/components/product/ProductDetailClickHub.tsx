import ClickHubProducts from "@/data/model/ClickHubProducts";

interface ProductDetailsProps {
  produto: ClickHubProducts;
}

export default function ProdutoDetalhesClickHub(props: ProductDetailsProps) {
  const { produto } = props;
  return (
    <div className="flex flex-col items-center gap-4">
      {/* <div className="w-96 h-56 relative">
        <Image src={produto.imagemUrl} alt={produto.nome} fill />
      </div> */}
      <div className="flex flex-col items-center text-center gap-5 max-w-[500px]">
        <h1 className="text-4xl font-bold">{produto.name}</h1>
        <p className="text-lg text-gray-500">{produto.description}</p>
        <p className="text-lg text-gray-500">R$ {produto.price}</p>
        <p className="text-lg text-gray-500">Estoque: {produto.stock}</p>

        {/* <span className="text-2xl">R$ {produto.price}</span> */}
      </div>
    </div>
  );
}
