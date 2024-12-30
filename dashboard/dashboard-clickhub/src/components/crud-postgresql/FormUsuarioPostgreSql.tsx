import Usuario from "../../data/model/ClickHubUsers";

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
                    value={props.usuario.name ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, name: e.target.value })}
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
                    value={props.usuario.password ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, password: e.target.value })}
                />
            </div>
            <div className="flex flex-col">
                <span>Phone</span>
                <input
                    type="text"
                    className="input-form"
                    value={props.usuario.phone ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, phone: e.target.value })}
                />
            </div>
            <div className="flex flex-col">
                <span>CPF</span>
                <input
                    type="text"
                    className="input-form"
                    value={props.usuario.cpf ?? ""}
                    onChange={(e) => alterarUsuario({ ...usuario, cpf: e.target.value })}
                />
            </div>
            <div className="flex flex-row gap-1">
                <button className="botaozinho" onClick={salvar}>Salvar</button>
                <button className="botaozinho" onClick={cancelar}>Cancelar</button>
            </div>
        </div>
    );
}