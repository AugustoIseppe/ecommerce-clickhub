export default async function excluirCategoriaClickHub(id: string) {
    const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'DELETE',
    });

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
        console.error(`Erro ao excluir categoria: ${response.statusText}`);
        return null; // Ou lançar uma exceção
    }

    try {
        const posts = await response.json();
        console.log(`Categoria service: ${JSON.stringify(posts, null, 2)}`);
        return posts;
    } catch (error) {
        console.error(`Erro ao converter para JSON: ${error}`);
        return null; // Ou lançar uma exceção
    }
}
