type TUsuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type AltUsuario = Omit<TUsuario, 'rg'>;
type ObgUsuario = Required<AltUsuario>;

const novoUsuário: ObgUsuario = {
    nome: 'Thiago',
    email: 'thiago@email.com',
    cpf: '789995',
    dataNacimento: '12/10/1990'
}

const cadastrarUsuário = (info: TUsuario): TUsuario => {
    return info;
}

const atualizarUsuário = (info: ObgUsuario): ObgUsuario => {
    return info;
}

console.log(atualizarUsuário(novoUsuário));

