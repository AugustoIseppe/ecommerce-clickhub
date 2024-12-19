import ClickHubCategories from "@/data/model/ClickHubCategories";
import obterCategoriesClickHub from "@/data/service/obterCategoriesClickHub";
import ProductItemClickHub from "@/components/product/ProductItemClickHub";
import CategorieItemClickHub from "@/components/category/CategorieItemClickHub";

export default async function CategoriesListClickhub() {
    const categories = await obterCategoriesClickHub();
    console.log(`TIPO DO PRODUTO: ${typeof categories}`);
    console.log(`LISTA DE PRODUTOS: ${JSON.stringify(categories, null, 2)}`);

    return (
        <div className="overflow-x-auto h-screen bg-white text-black border-none">
            <table className="table table-xs w-full h-full bg-white text-black border-none">
                <thead>
                    <tr>
                        <th className="text-center text-black">#</th>
                        <th className="text-left text-black">Nome</th>
                        <th className="text-left text-black">Criado em</th>
                        <th className="text-center text-black">Detalhes</th>

                    </tr >
                </thead >
                {categories.length === 0 && (
                    <tbody>
                        <tr>
                            <td colSpan={6} className="text-center">Nenhuma categoria cadastrada</td>
                        </tr>
                    </tbody>
                )
                }
                <tbody>
                    {categories.map((product: ClickHubCategories, index: number) => (

                        <CategorieItemClickHub
                            key={product.category_id}
                            categories={product}
                            index={index}
                        />
                    ))}
                </tbody>
            </table >
        </div >
    );
}

