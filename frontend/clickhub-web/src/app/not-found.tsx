import Link from "next/link";

export default function Pagina404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <p className="text-lg mb-6">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 font-medium">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
