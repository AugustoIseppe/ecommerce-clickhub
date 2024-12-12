import Image from "next/image";
import Link from "next/link";
import obterNotFound from "@/data/service/obterNotFound";

export default async function Pagina404() {
  const notfound = await obterNotFound();
  console.log("Not Found:", notfound);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-7 text-center">
      <h1 className="text-3xl text-zinc-400 font-bold">
        404 - Página não encontrada!
      </h1>
      <Image src={notfound.image.jpg} alt="Erro 404" width={300} height={300} />

      <p className="text-lg max-w-[600px]">
        Você parece ter perdido o caminho... Mas não se preocupe, até os
        melhores exploradores se perdem às vezes! 🧭
      </p>

      <Link href="/" className="bg-blue-500 py-2 px-4 rounded-md">
        Voltar
      </Link>
    </div>
  );
}
