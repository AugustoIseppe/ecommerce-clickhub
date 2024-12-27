"use client";
import { useState } from "react";
import todosOsUsuarios from "@/data/constants/usuarios";
import Usuario from "@/data/model/Usuario";
import ListaUsuarios from "./ListaUsuarios";

export default function CadastroUsuario() {

    //O useState precisa do useClient
    const [usuario, setUsuario] = useState<Usuario[]>(todosOsUsuarios);

    return (
        <div>
            <ListaUsuarios usuarios={usuario} />
        </div>
    )
}