import { useState, useEffect } from "react";
import ListaUsuariosPostgreSql from "./ListaUsuariosPostgreSql";
import ClickHubUsers from "@/data/model/ClickHubUsers";
import todosOsUsuarios from "@/data/service/users/obterUsuariosClickHub";
import excluirUsuarioClickHub from "@/data/service/users/excluirUsuariosClickHub";
import FormUsuarioPostgreSql from "./FormUsuarioPostgreSql";

export default function CadastroUsuarioPostgreSQL() {
    const [usuarioAtual, setUsuarioAtual] = useState<Partial<ClickHubUsers> | null>(null);
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

    function selecionarUsuario(usuario: Partial<ClickHubUsers>) {
        setUsuarioAtual(usuario);
    }

    function cancelar() {
        setUsuarioAtual(null);
    }

    function salvarUsuario() {
        const usuarioExistente = usuario.find(u => u.user_id === usuarioAtual?.user_id);

        if (usuarioExistente) {
            const novosUsuarios = usuario.map((u) => {
                return u.user_id === usuarioAtual?.user_id ? usuarioAtual : u;
            });
            setUsuario(novosUsuarios as ClickHubUsers[]);
        } else {
            setUsuario([...usuario, usuarioAtual as ClickHubUsers]);
        }
        setUsuarioAtual(null);
    }


    return (
        <div>
            {usuarioAtual ? (
                <FormUsuarioPostgreSql
                    usuario={usuarioAtual}
                    cancelar={cancelar}
                    alterarUsuario={setUsuarioAtual}
                    salvar={salvarUsuario}
                />
            ) : (
                <ListaUsuariosPostgreSql
                    usuarios={usuario}
                    selecionarUsuario={selecionarUsuario}
                    removerUsuario={handleRemoverUsuario}
                />
            )}
        </div>
    );
}
