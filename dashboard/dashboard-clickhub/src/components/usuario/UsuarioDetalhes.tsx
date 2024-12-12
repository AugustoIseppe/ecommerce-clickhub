import Usuario from "@/data/model/Usuario";
import Image from "next/image";

interface UsuarioDetalhesProps {
  usuario: Usuario;
}

export default function UsuarioDetalhes(props: UsuarioDetalhesProps) {
  const { usuario } = props;
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-96 h-56 relative">
        <Image src={usuario.imagemUrl} alt={usuario.nome} fill />
      </div>
      <div className="flex flex-col items-center text-center gap-5 max-w-[500px]">
        <h1 className="text-4xl font-bold">{usuario.nome}</h1>
        <p className="text-lg text-gray-500">{usuario.email}</p>
        <span className="text-2xl">{usuario.cpf}</span>
      </div>
    </div>
  );
}
