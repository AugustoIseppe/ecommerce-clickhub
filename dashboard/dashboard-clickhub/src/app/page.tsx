import Pagina from "@/components/template/Pagina";
import Image from "next/image";

export default function Home() {
  return (
    // dashboard\dashboard-clickhub\public\logo.jpg
    <Pagina>
      {/* Imagem(logo) da pagina  dentro da pasta public*/}
      <Image src="/logo.jpg" alt="Logo" width={400} height={400} className="logo-clickhub-homepage elevation-3" />
    </Pagina>
  );
}
