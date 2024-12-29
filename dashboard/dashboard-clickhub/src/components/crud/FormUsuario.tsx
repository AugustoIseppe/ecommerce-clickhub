import Usuario from "@/data/model/Usuario";

export interface FormUsuarioProps {
    usuario: Partial<Usuario>;
    alterarUsuario: (usuario: Partial<Usuario>) => void;
    cancelar: () => void;
    salvar: () => void;
}

export default function FormUsuario(props: FormUsuarioProps) {
    const { usuario, alterarUsuario, salvar, cancelar } = props;
    return (
        <div>
            <div className="flex flex-col">
                <span>Nome</span>
                <input
                    type="text" className="input-form "
                    value={props.usuario.nome ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, nome: e.target.value })}
                />
            </div>
            <div className="flex flex-col">
                <span>Email</span>
                <input
                    type="text"
                    className="input-form"
                    value={props.usuario.email ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, email: e.target.value })}
                />
            </div>
            <div className="flex flex-col">
                <span>Senha</span>
                <input
                    type="password"
                    className="input-form"
                    value={props.usuario.senha ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, senha: e.target.value })}
                />
            </div>
            <div className="flex flex-row gap-1">
                <button className="botaozinho" onClick={salvar}>Salvar</button>
                <button className="botaozinho" onClick={cancelar}>Cancelar</button>
            </div>
        </div>
    );
}