import ClickHubProducts from "@/data/model/ClickHubProducts";
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

interface ProductItemClickHubProps {
  product: ClickHubProducts;
  index: number;
}

interface ProductItemClickHubProps {
  product: ClickHubProducts;
  index: number;
}

export default function ProductItemClickHub(props: ProductItemClickHubProps) {
  const { product, index } = props;
  const isEven = index % 2 === 0;
  const i = index + 1;

  function formatDateToBrazilian(dateString: string | number | Date) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }




  return (
    // <Link href={`/product-list-clickhub/${product.product_id}`}>
    <>
      <tr className={`text-sm ${isEven ? "bg-white" : "bg-slate-100"} border-none text-black `}>
        <th className="text-center">{i}</th>
        <td>{product.name}</td>
        <td className="text-center">R$ {product.price}</td>
        <td className="text-center">{product.stock}</td>
        <td className="text-center">{formatDateToBrazilian(product.created_at)}</td>
        <td className="text-center">
          <Link href={`/product-list-clickhub/${product.product_id}`} className="flex justify-center">
            <PlusCircleIcon width={20} className="text-blue-500 cursor-pointer" />
          </Link>
        </td>
      </tr>
    </>
  );
}

// <Link href={`/product-list-clickhub/${product.product_id}`}>
//   <div
//     className={`elevation-1 gap-2 flex p-1 flex-row justify-between w-full rounded-lg ${isEven ? "bg-gray-200" : "bg-slate-100"
//       }`}
//   >
//     <div className="gap-2 flex flex-row items-center justify-start w-full">
//       {/* Exibe a imagem principal ou a imagem padrão diretamente no src */}
//       <img
//         src={
//           product.images.length > 0
//             ? `http://localhost:3000/uploads/products/${product.images.find((img) => img.is_main)?.image_url ||
//             product.images[0].image_url
//             }`
//             : defaultImage.src // Acessa a propriedade 'src' para obter a URL
//         }
//         alt={product.name || "Imagem padrão"}
//         className="w-8 h-8 rounded-md object-cover"
//       />

//       <div className="text-xs">{product.name}</div>
//     </div>
//     <div className="gap-4 flex flex-row justify-between items-center mr-4">
//       <ArrowRightCircleIcon width={18} className="text-blue-500 cursor-pointer" />
//     </div>
//   </div>
// </Link>

