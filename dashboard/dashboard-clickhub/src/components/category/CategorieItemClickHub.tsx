import ClickHubCategories from "@/data/model/ClickHubCategories";
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

interface CategorieItemClickHubProps {
  categories: ClickHubCategories;
  index: number;
}


export default function CategorieItemClickHub(props: CategorieItemClickHubProps) {
  const { categories, index } = props;
  const isEven = index % 2 === 0;
  const i = index + 1;

  function formatDateToBrazilian(dateString: string | number | Date) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    // const hours = String(date.getHours()).padStart(2, "0");
    // const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  }




  return (
    <tr className={`text-sm ${isEven ? "bg-white" : "bg-slate-100"} border-none text-black `}>
      <th className="text-center">{i}</th>
      <td>{categories.name}</td>
      <td>{formatDateToBrazilian(categories.created_at)}</td>
      <td className="text-center">
        <Link href={`/categories-list-clickhub/${categories.category_id}`} className="flex justify-center">
          <PlusCircleIcon width={20} className="text-blue-500 cursor-pointer" />
        </Link>
      </td>
    </tr>
  );
}


