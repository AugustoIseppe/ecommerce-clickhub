import Usuario from "@/data/model/Usuario";

export interface FormUsuarioProps {
    usuario: Partial<Usuario>;
}

export default function FormUsuario(props: FormUsuarioProps) {
    return (
        <div>
            <div className="flex flex-col">
                <span>Nome</span>
                <input type="text" className="input-form" value={props.usuario.nome} />
            </div>
            <div className="flex flex-col">
                <span>Email</span>
                <input type="text" className="input-form" value={props.usuario.email} />
            </div>
            <div className="flex flex-col">
                <span>Senha</span>
                <input type="password" className="input-form" value={props.usuario.senha} />
            </div>
            <div className="flex flex-row gap-1">
                <button className="botaozinho">Salvar</button>
                <button className="botaozinho">Cancelar</button>
            </div>
        </div>
    );
}