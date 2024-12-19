'use server'

export default async function obterProductsClickHubById(id: string) {
    const response = await fetch(`http://localhost:3000/products/${id}`);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
        console.error(`Erro ao obter produto: ${response.statusText}`);
        return null; // Ou lançar uma exceção
    }

    try {
        const posts = await response.json();
        console.log(`PRODUTO service: ${JSON.stringify(posts, null, 2)}`);
        return posts;
    } catch (error) {
        console.error(`Erro ao converter para JSON: ${error}`);
        return null; // Ou lançar uma exceção
    }
}
