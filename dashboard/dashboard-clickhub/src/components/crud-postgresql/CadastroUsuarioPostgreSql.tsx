import { useState, useEffect } from "react";
import ListaUsuariosPostgreSql from "./ListaUsuariosPostgreSql";
import ClickHubUsers from "@/data/model/ClickHubUsers";
import todosOsUsuarios from "@/data/service/users/obterUsuariosClickHub";
import Loading from "@/app/(paginas)/crud-postgresql/loading";
import excluirUsuarioClickHub from "@/data/service/users/excluirUsuariosClickHub";

export default function CadastroUsuarioPostgreSQL() {
    const [usuario, setUsuario] = useState<ClickHubUsers[]>([]);
    const [loading, setLoading] = useState(true); // Estado para rastrear o carregamento

    useEffect(() => {
        async function fetchUsuarios() {
            setLoading(true); // Ativar o estado de carregamento
            try {
                const usuarios = await todosOsUsuarios();
                setUsuario(usuarios);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false); // Desativar o estado de carregamento
            }
        }
        fetchUsuarios();
    }, []);

    const handleRemoverUsuario = async (user: ClickHubUsers) => {
        try {
            await excluirUsuarioClickHub(user.user_id); // Passa apenas o ID do usuário
            setUsuario(prevUsuarios => prevUsuarios.filter(u => u.user_id !== user.user_id)); // Remove localmente
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
        }
    };


    return (
        <div>
            {loading ? (
                <Loading /> // Exibe a mensagem de carregamento
            ) : (
                <ListaUsuariosPostgreSql usuarios={usuario} removerUsuario={handleRemoverUsuario} />
            )}
        </div>
    );
}
