import UsuarioDetalhes from "@/components/usuario/UsuarioDetalhes";
import obterUsuarioPorId from "@/data/service/obterUsuarioPorId";
import Link from "next/link";

export default async function PaginaUsuarioPorId(props: any) {
  const usuario = await obterUsuarioPorId(+props.params.id);
  if (!usuario) return <div>Usuário não encontrado</div>;
  return (
    <div className="flex flex-col gap-5">
      <UsuarioDetalhes usuario={usuario} />
      <Link href="/usuarios" className="self-center bg-blue-500 p-2 rounded">
        Voltar
      </Link>
    </div>
  );
}
