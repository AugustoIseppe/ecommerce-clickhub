// import ClickHubUsers from "@/data/model/ClickHubUsers";

// export default async function excluirUsuarioClickHub(usuario: ClickHubUsers) {
//     const response = await fetch(`http://localhost:3000/users/${usuario.user_id}`, {
//         method: 'DELETE',
//     });

//     // Verifica se a resposta foi bem-sucedida
//     if (!response.ok) {
//         console.error(`Erro ao excluir usuário: ${response.statusText}`);
//         return null; // Ou lançar uma exceção
//     }

//     try {
//         const deletedUsuario = await response.json();
//         console.log(`usuario service: ${JSON.stringify(deletedUsuario, null, 2)}`);
//         return deletedUsuario;
//     } catch (error) {
//         console.error(`Erro ao converter para JSON: ${error}`);
//         return null; // Ou lançar uma exceção
//     }
// }

export default async function excluirUsuarioClickHub(user_id: string) {
    const response = await fetch(`http://localhost:3000/users/${user_id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        console.error(`Erro ao excluir usuário: ${response.statusText}`);
        throw new Error('Erro ao excluir usuário');
    }

    try {
        const deletedUsuario = await response.json();
        console.log(`Usuário excluído: ${JSON.stringify(deletedUsuario, null, 2)}`);
        return deletedUsuario;
    } catch (error) {
        console.error(`Erro ao converter resposta para JSON: ${error}`);
        throw new Error('Erro ao processar resposta do servidor');
    }
}

