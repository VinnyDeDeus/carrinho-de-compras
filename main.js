import {Produto} from './classes/produto.js'
import {CarrinhoDeCompras} from './classes/carrinho.js'

// INSTANCIAR PRODUTO (CODIGO, NOME, PRECO, QTD. EM ESTOQUE)
const prod = new Produto(1, 'Caixa Bombom Nestle', 14.99, 10)
prod.exibirDadosProdutos()

// INSTANCIAR CARRINHO DE COMPRAS
const car = new CarrinhoDeCompras()

// ADICIONAR PRODUTO NO CARRINHO
car.adicionarProdutoNoCarrinho(prod)

// PESQUISAR PRODUTO NO CARRINHO (NOME)
car.pesquisarProdutoNoCarrinho('Caixa Bombom Nestle')
car.pesquisarProdutoNoCarrinho('Doritos')

// EXIBIR A QUANTIDADE DE PRODUTOS NO CARRINHO
car.exibirQuantidadeDeProdutosNoCarrinho()

// CALCULAR O PRECO TOTAL DOS PRODUTOS NO CARRINHO
car.calcularTotalDoCarrinho()

// COMPRAR CARRINHO (NOME, QUANTIDADE)
car.comprarProduto('Caixa Bombom Nestle', 2)
car.exibirProdutosNoCarrinhoDeCompras()

// EXCLUIR PRODUTO DO CARRINHO (NOME)
car.excluirProdutoDoCarrinhoDeCompras('Caixa Bombom Nestle')
car.exibirProdutosNoCarrinhoDeCompras()