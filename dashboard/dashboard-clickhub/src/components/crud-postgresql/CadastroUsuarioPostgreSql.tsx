import { useState, useEffect } from "react";
import ListaUsuariosPostgreSql from "./ListaUsuariosPostgreSql";
import ClickHubUsers from "@/data/model/ClickHubUsers";
import todosOsUsuarios from "@/data/service/users/obterUsuariosClickHub";
import Loading from "@/app/(paginas)/crud-postgresql/loading";

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

    return (
        <div>
            {loading ? (
                <Loading /> // Exibe a mensagem de carregamento
            ) : (
                <ListaUsuariosPostgreSql usuarios={usuario} />
            )}
        </div>
    );
}
