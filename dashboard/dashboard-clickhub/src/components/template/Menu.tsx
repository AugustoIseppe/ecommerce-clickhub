import {
  IconArrowsDiff,
  IconBrandProducthunt,
  IconCategory,
  IconCategory2,
  IconError404,
  IconForms,
  IconHome2,
  IconLayout2,
  IconList,
  IconListDetails,
  IconUser,
  IconUserBolt,
  IconUserFilled,
  IconUserHexagon,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <aside className="w-75 bg-white p-6 border-r border-zinc-300">
      <nav className="flex flex-col gap-2 text-slate-950">
        {/* texto = Nome | href = rota | icone = icone  */}
        <MenuItem texto="Início" href="/" icone={IconHome2} />
        <hr style={{ border: '1px solid #ccc', margin: '0px 0' }} />
        <h2 style={{ textAlign: 'start', fontWeight: 'bold' }}>Produtos</h2>
        <MenuItem texto="Cadastrar Produto" icone={IconBrandProducthunt} href="/products-clickhub" />
        <MenuItem texto="Produtos Cadastrados" icone={IconList} href="/product-list-clickhub" />
        <hr style={{ border: '0.2px solid #ccc' }} />
        <h2 style={{ textAlign: 'start', fontWeight: 'bold' }}>Categorias</h2>
        <MenuItem texto="Cadastrar Categoria" icone={IconCategory2} href="/categories-clickhub" />
        <MenuItem texto="Categorias Disponíveis" icone={IconList} href="/categories-list-clickhub" />
        <hr style={{ border: '0.2px solid #ccc' }} />
        <h2 style={{ textAlign: 'start', fontWeight: 'bold' }}>Clientes</h2>
        <MenuItem texto="Usuários Cadastrados" icone={IconUser} href="/crud-postgresql" />
        <hr style={{ border: '0.2px solid #ccc' }} />
        <h2 style={{ textAlign: 'start', fontWeight: 'bold' }}>CRUD - Léo Leitão</h2>
        <MenuItem texto="CRUD - Mock" icone={IconForms} href="/crud" />
        <MenuItem texto="CRUD - Postgresql" icone={IconForms} href="/crud-postgresql" />

      </nav>
    </aside>
  );
}
