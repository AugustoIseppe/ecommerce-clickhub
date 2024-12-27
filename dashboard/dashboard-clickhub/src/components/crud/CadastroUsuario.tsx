"use client";
import { useState } from "react";
import todosOsUsuarios from "@/data/constants/usuarios";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";

export default function CadastroUsuario() {

    //O useState precisa do useClient
    const [usuarios, setUsuario] = useState<Usuario[]>(todosOsUsuarios);

    function removerUsuario(usuario: Usuario) {
        const todosMenosUsuarioInformado = usuarios.filter((u) => u.id !== usuario.id);
        setUsuario(todosMenosUsuarioInformado);
    }

    return (
        <div>
            <ListaUsuarios
                usuarios={usuarios}
                removerUsuario={removerUsuario}
            />
        </div>
    )
}