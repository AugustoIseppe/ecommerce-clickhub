"use client";
import CadastroUsuarioPostgreSQL from "@/components/crud-postgresql/CadastroUsuarioPostgreSql";

export default function Cadastro() {
    return (
        <div>
            <h1>Cadastro de Usuário</h1>
            <h3>Criação, alteração, consultas e exclusão de usuários - PostgreSQL</h3>
            <CadastroUsuarioPostgreSQL />
        </div>
    )
}