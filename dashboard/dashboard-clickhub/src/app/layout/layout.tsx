"use client";
import Pagina from "@/components/template/Pagina";
import { useState } from "react";

export default function Layout(props: any) {
  const [data] = useState(new Date().toLocaleDateString());
  return (
    <Pagina>
      <div className="border-8 border-red-500 p-8">
        <span>{data}</span>
        <main>{props.children}</main>
      </div>
    </Pagina>
  );
}
