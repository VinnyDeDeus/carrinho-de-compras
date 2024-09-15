export class CarrinhoDeCompras {

    constructor() {
        this.carrinhoDeCompras = []
    }

    adicionarProdutoNoCarrinho(produto) {
        this.carrinhoDeCompras.push(produto)
        console.log('Produto adicionado ao carrinho!\n')
    }

    comprarProduto(nome, quantidade) {
        for(let i in this.carrinhoDeCompras) {
            if(this.carrinhoDeCompras[i].nome == nome) {
                if(this.carrinhoDeCompras[i].quantidadeEmEstoque >= quantidade) {
                    this.carrinhoDeCompras[i].quantidadeEmEstoque -= quantidade
                    console.log('Compra realizada com sucesso!\nPreco total: ' + (this.carrinhoDeCompras[i].preco * quantidade) + '\n')
                    return
                } else {
                    console.log('Produto fora de estoque!\nNao foi possivel realizar a compra.\n')
                    return
                }
            } else {
                console.log('Produto nao encontrado!\n')
            }
        }
    }

    pesquisarProdutoNoCarrinho(nome) {
        for(let i in this.carrinhoDeCompras) {
            if(this.carrinhoDeCompras[i].nome == nome) {
                this.carrinhoDeCompras[i].exibirDadosProdutos()
                return
            } else {
                console.log('Produto nao encontrado!\n')
            }
        }
    }

    exibirProdutosNoCarrinhoDeCompras() {
        if(this.carrinhoDeCompras.length > 0) {
            for(let i in this.carrinhoDeCompras) {
                this.carrinhoDeCompras[i].exibirDadosProdutos()
                return
            }
        } else {
            console.log('Carrinho vazio!\n')
        }
        
    }

    excluirProdutoDoCarrinhoDeCompras(nome) {
        for(let i in this.carrinhoDeCompras) {
            if(this.carrinhoDeCompras[i].nome == nome) {
                this.carrinhoDeCompras.splice(i, 1)
                console.log('Produto removido do carrinho!\n')
                return
            } else {
                console.log('Produto nao encontrado!\n')
            }
        }
    }

    exibirQuantidadeDeProdutosNoCarrinho() {
        console.log('Quantidade de produtos no carrinho: ' + this.carrinhoDeCompras.length + '\n')
    }

    calcularTotalDoCarrinho() {
        let total = 0.00
        for(let i in this.carrinhoDeCompras) {
            total += this.carrinhoDeCompras[i].preco
        }
        console.log('Preco total do carrinho: ' + total + '\n')
    }

}