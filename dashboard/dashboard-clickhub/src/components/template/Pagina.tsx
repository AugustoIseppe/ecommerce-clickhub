import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-col h-screen bg-white text-slate-950">
      <Cabecalho />
      <div className="flex-1 flex bg-white">
        <Menu />
        <main className="flex-1 p-8">{props.children}</main>
      </div>
      <Rodape />
    </div>
  );
}
