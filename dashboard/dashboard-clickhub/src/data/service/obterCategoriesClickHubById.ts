'use server'

export default async function obterCategoriasClickHubById(id: string) {
    const response = await fetch(`http://localhost:3000/categories/${id}`);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
        console.error(`Erro ao obter categoria: ${response.statusText}`);
        return null; // Ou lançar uma exceção
    }

    try {
        const categorias = await response.json();
        console.log(`PRODUTO service: ${JSON.stringify(categorias, null, 2)}`);
        return categorias;
    } catch (error) {
        console.error(`Erro ao converter para JSON: ${error}`);
        return null; // Ou lançar uma exceção
    }
}
