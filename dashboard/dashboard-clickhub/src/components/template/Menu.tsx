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
        <h2 style={{ textAlign: 'start', fontWeight: 'bold' }}>CRUD - Léo Leitão</h2>
        <MenuItem texto="Listar Itens - Mock" icone={IconForms} href="/crud" />
        <MenuItem texto="Listar Itens - Postgresql" icone={IconForms} href="/crud-postgresql" />
        {/* <hr style={{ border: '0.2px solid #ccc' }} />
        <h2 style={{ textAlign: 'start', fontWeight: 'bold' }}>Usuários</h2>
        <MenuItem texto="Cadastrar Usuário" icone={IconUser} href="/categories-clickhub" />
        <MenuItem texto="Usuários Cadastrados" icone={IconList} href="/categories-clickhub" /> */}
        {/* <MenuItem texto="Layout" href="/layout" icone={IconLayout2} />
        <MenuItem texto="Não Existe" href="/nao-existe" icone={IconError404} />
        <MenuItem
          texto="Fetch Api - JsonPlaceholder"
          href="/posts"
          icone={IconArrowsDiff}
        />
        <MenuItem
          texto="Fetch Api - DummyJson"
          href="/products"
          icone={IconArrowsDiff}
        />
        <MenuItem texto="Produtos" href="/produtos" icone={IconListDetails} />
        <MenuItem texto="Usuarios" href="/usuarios" icone={IconUserHexagon} />
        <MenuItem
          texto="Cliente vs Servidor"
          href="/cliente-servidor"
          icone={IconArrowsDiff}
        />
        <MenuItem texto="Administração" href="/admin" icone={IconUserHexagon} /> */}
      </nav>
    </aside>
  );
}
