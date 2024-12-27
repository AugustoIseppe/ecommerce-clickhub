"use client";
import Usuario from "@/data/model/Usuario";
import { IconEdit, IconTrash } from "@tabler/icons-react";

export interface ListaUsuariosProps {
    usuarios: Usuario[];
    removerUsuario: (usuario: Usuario) => void;
}

export default function ListaUsuarios(props: ListaUsuariosProps) {
    function renderizarUsuarios(usuario: Usuario) {
        return (
            <div className="flex items-center px-3 py-2 rounded-md bg-zinc-200 mb-1">
                <div className="flex-1 flex flex-col">

                    <span>{usuario.nome}</span>
                    <span className="text-xs text-zinc-500 font-normal">{usuario.email}</span>
                </div>
                <div className="flex gap-2 ml-auto">

                    <button className=" bg-blue-600 py-1 px-3"><IconEdit color="white" size={16} /></button>
                    <button className=" bg-red-500  py-1 px-3"><IconTrash color="white" size={16} onClick={() => props.removerUsuario(usuario)} /></button>
                </div>
            </div>
        )

    }
    return (
        <ul className="">
            {props.usuarios.map(usuario => (
                <li key={usuario.id} className="text-black text-sm font-semibold">
                    {renderizarUsuarios(usuario)}
                </li>
            )
            )}
        </ul>
    )
}