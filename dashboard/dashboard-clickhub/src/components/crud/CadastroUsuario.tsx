"use client";
import { useState } from "react";
import todosOsUsuarios from "@/data/constants/usuarios";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";
import FormUsuario from "./FormUsuario";
import Id from "@/data/model/Id";

export default function CadastroUsuario() {

    //O useState precisa do useClient e serve para o gereciamento de estado.
    const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(null);
    const [usuarios, setUsuario] = useState<Usuario[]>(todosOsUsuarios);

    function removerUsuario(usuario: Usuario) {
        const todosMenosUsuarioInformado = usuarios.filter((u) => u.id !== usuario.id);
        setUsuario(todosMenosUsuarioInformado);
    }

    function selecionarUsuario(usuario: Partial<Usuario>) {
        setUsuarioAtual(usuario);
    }

    function cancelar() {
        setUsuarioAtual(null);
    }

    function salvarUsuario() {
        const usuarioExistente = usuarios.find(u => u.id === usuarioAtual?.id);

        if (usuarioExistente) {
            const novosUsuarios = usuarios.map((u) => {
                return u.id === usuarioAtual?.id ? usuarioAtual : u;
            });
            setUsuario(novosUsuarios as Usuario[]);
        } else {
            setUsuario([...usuarios, usuarioAtual as Usuario]);
        }
        setUsuarioAtual(null);
    }

    return (
        <div className="flex flex-col">
            <button className="button-new-user self-end" onClick={() => selecionarUsuario({ id: Id.novo(), })}>Novo usuario</button>
            {usuarioAtual ? (
                <FormUsuario
                    usuario={usuarioAtual}
                    cancelar={cancelar}
                    alterarUsuario={setUsuarioAtual}
                    salvar={salvarUsuario}
                />
            ) : (
                <ListaUsuarios
                    usuarios={usuarios}
                    selecionarUsuario={selecionarUsuario}
                    removerUsuario={removerUsuario}
                />
            )
            }
        </div>
    )
}