import ClickHubUsers from "@/data/model/ClickHubUsers";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

export interface ListaUsuariosPostgreSqlProps {
    usuarios: ClickHubUsers[];
    removerUsuario: (usuario: ClickHubUsers) => void;
}

export default function ListaUsuariosPostgreSql(props: ListaUsuariosPostgreSqlProps) {
    function renderizarUsuarios(usuario: ClickHubUsers) {
        return (
            <div className="flex items-center px-3 py-2 rounded-md bg-zinc-200 mb-1">
                <div className="flex-1 flex flex-row">
                    {/* Inserir uma imagem do usuario */}

                    <div className="flex flex-row gap-1 justity-center items-center">
                        {/* Inserir uma imagem do usuario - se nao tiver uma imagem, usar uma padrao blank-avatar.png */}
                        {usuario.profile_picture === "" ? (
                            <Image
                                alt="Imagem do usuário"
                                src="/blank-avatar.png"
                                width={50}
                                height={50}
                                className="object-cover w-10 h-10 rounded-full"
                            />
                        ) : (
                            <Image
                                alt="Imagem do usuário"
                                src={`http://localhost:3000/uploads/users/${usuario.profile_picture}`}
                                width={50}
                                height={50}
                                className="object-cover w-10 h-10 rounded-full"
                            />
                        )}
                        <div className="flex flex-col ml-2">

                            <span>{usuario.name}</span>
                            <span className="text-xs text-zinc-500 font-normal">{usuario.email}</span>
                        </div>
                    </div>
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
                <li key={usuario.user_id} className="text-black text-sm font-semibold">
                    {renderizarUsuarios(usuario)}
                </li>
            )
            )}
        </ul>
    )
}