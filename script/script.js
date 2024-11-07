const buscador = document.querySelector('#buscador');
const botaoBuscar = document.querySelector('#botao-buscar');
const areaProdutos = document.querySelector('#area-produtos');

class Produto {
    constructor(nome, tipo, imagem, preco) {
        this.nome = nome;
        this.tipo = tipo;
        this.imagem = imagem;
        this.preco = preco;
    }

    cartaoProduto() {
        const cartaoProdutos = document.createElement('div');
        cartaoProdutos.classList.add('cartao-produtos');
        cartaoProdutos.innerHTML = `
            <img src="${this.imagem}" alt="${this.nome}"</img>
            <h3>${this.nome}</h3>
            <p>${this.preco}</p>
        `;
    }
}

class Estante {
    constructor(produto) {
        this.produto = produto;
    }

    produto = [];

    exibirProdutos(produto) {
        areaProdutos.innerHTML = '';
        areaProdutos.appendChild(produto.cartaoProduto()); 
    }

    buscarProduto(busca) {
        botaoBuscar.addEventListener('click', () => {
            busca = buscador.value;
            let itensBuscados = listaDeProdutos.filter(produto => produto.nome.toLowerCase().includes(busca));
            this.exibirProdutos(itensBuscados);
            if (itensBuscados.length === 0) {
                areaProdutos.innerHTML = 'Nenhum produto foi encontrado';
            }
        })
    }
}


    const blusaLaranja = new Produto('blusa laranja', 'blusa', 'img/blusa-laranja.png', 79.99);
    const blusaVerde = new Produto('blusa verde', 'blusa', 'img/blusa-verde001.png', 79.99);
    const botaCouroMarrom = new Produto('bota de couro marrom', 'bota', 'img/bota-couro-marrom001.png', 189.99);
    const botaCouroPreta = new Produto('bota de couro preta', 'bota', 'img/bota-couro-preta0001.png', 189.99);
    const saiaAzul = new Produto('saia azul', 'saia', 'img/saia-azul001.png', 99.99);
    const saiaRosa = new Produto('saia rosa', 'saia', 'img/saia-rosa001.png', 99.99);
    const vestidoAzul = new Produto('vestido azul', 'vestido', 'img/vestido-azul001.png', 139.99);
    const vestidoAmarelo = new Produto('vestido amarelo', 'vestido', 'img/vestido-longo-amarelo001.png', 139.99);
    const vestidoVermelho = new Produto('vestido vermelho', 'vestido', 'img/vestido-vermelho001.png', 139.99);

