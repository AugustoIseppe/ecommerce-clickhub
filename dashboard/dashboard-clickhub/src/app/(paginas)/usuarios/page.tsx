import UsuarioItem from "@/components/usuario/UsuarioItem";
import obterUsuarios from "@/data/service/obterUsuarios";
import obterPosts from "@/data/service/obterPosts";
export default async function UsuariosPage() {
  const usuarios = await obterUsuarios();
  // const posts = await obterPosts();
  // console.log(posts.slice(0, 5));
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-black">Usuários</h1>
      <div className="flex flex-col gap-6">
        {usuarios.map((usuario) => (
          <UsuarioItem key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  );
}
