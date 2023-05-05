type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type EnderecoCliente = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> &
{
    endereco: EnderecoCliente,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
};

const venda: NovoCarrinho = {
    item: {
        nome: 'string',
        descricao: 'string',
        valor: 120
    },
    qtd: 3,
    desconto: 40,
    frete: 57,
    tipoTransacao: 'debito',
    cartao: {
        numero: 1555884,
        validade: 'string',
        nome: 'string',
        cvv: 478
    },
    endereco: {
        cep: 'string',
        rua: 'string',
        bairro: 'string',
        cidade: 'string',
        estado: 'string'
    }
}