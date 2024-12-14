import ClickHubProducts from "@/data/model/ClickHubProducts";
// import { IconEdit, IconTrash } from "@tabler/icons-react";
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import defaultImage from "@/assets/images/default-image.webp";

interface ProductItemClickHubProps {
  product: ClickHubProducts;
  index: number;
}

export default function ProductItemClickHub(props: ProductItemClickHubProps) {
  const { product, index } = props;
  const isEven = index % 2 === 0;
  const i = index + 1;
  //dashboard\dashboard-clickhub\src\assets\images\default-image.webp
  //dashboard\dashboard-clickhub\public\suco.jpeg
  return (
    <Link href={`/product-list-clickhub/${product.product_id}`}>
      <div
        className={`elevation-1 gap-2 flex p-1 flex-row justify-between w-full rounded-lg ${isEven ? "bg-gray-200" : "bg-slate-100"
          }`}
      >
        <div className="gap-2 flex flex-row items-center justify-start w-full">
          {/* Exibe a imagem principal ou a imagem padrão diretamente no src */}
          <img
            src={
              product.images.length > 0
                ? `http://localhost:3000/uploads/products/${product.images.find((img) => img.is_main)?.image_url ||
                product.images[0].image_url
                }`
                : defaultImage.src // Acessa a propriedade 'src' para obter a URL
            }
            alt={product.name || "Imagem padrão"}
            className="w-8 h-8 rounded-md object-cover"
          />

          <div className="text-xs">{product.name}</div>
        </div>
        <div className="gap-4 flex flex-row justify-between items-center mr-4">
          <PencilIcon width={17} className="text-blue-400" />
          <TrashIcon width={18} className="text-red-400" />
        </div>
      </div>
    </Link>
  );
}
