import Usuario from "@/data/model/Usuario";
import Image from "next/image";
import Link from "next/link";

interface UsuarioItemProps {
  usuario: Usuario;
}

export default function UsuarioItem(props: UsuarioItemProps) {
  const { usuario } = props;
  return (
    <Link
      href={`/usuarios/${usuario.id}`}
      className="flex gap-4 bg-zinc-900 rounded-md overflow-hidden"
    >
      <div className="min-w-20 min-h-20 relative">
        <Image src={usuario.imagemUrl} alt={usuario.nome} fill />
      </div>

      <div className="flex flex-col justify-center gap-1.5">
        <h2 className="text-1xl font-bold">{usuario.nome}</h2>
        <p className="text-xs text-white">E-mail:{usuario.email}</p>
        <span className="text-lg">CPF: {usuario.cpf}</span>
      </div>
    </Link>
  );
}
