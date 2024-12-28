"use client";
import { useState } from "react";
import todosOsUsuarios from "@/data/constants/usuarios";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";
import FormUsuario from "./FormUsuario";

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

    return (
        <div className="flex flex-col">
            <button className="button-new-user self-end" onClick={() => selecionarUsuario({})}>Novo usuario</button>
            {usuarioAtual ? (
                <FormUsuario
                    usuario={usuarioAtual}
                    cancelar={cancelar}
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