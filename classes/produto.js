export class Produto {

    constructor(codigo, nome, preco, quantidade) {
        this.codigo = codigo
        this.nome = nome
        this.preco = preco
        this.quantidadeEmEstoque = quantidade
    }

    exibirDadosProdutos() {
        console.log('----------\nCodigo: ' + this.codigo + '\nNome: ' + this.nome + '\nPreco: ' + this.preco +
        '\nQtd. em Estoque: ' + this.quantidadeEmEstoque + '\n----------\n')
    }

}