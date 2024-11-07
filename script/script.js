const buscador = document.querySelector('#buscador');
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
            <img src="${this.imagem}" alt="${this.nome}" />
            <h3>${this.nome}</h3>
            <p>${this.preco}</p>
        `;

        return cartaoProdutos;
    }
}

class Estante {
    constructor(arrayProdutos) {
        this.arrayProdutos = arrayProdutos;
    }

    exibirProdutos(arrayProdutos) {
        areaProdutos.innerHTML = '';
        if (arrayProdutos.length > 0) {
            arrayProdutos.forEach(produto => {
                areaProdutos.appendChild(produto.cartaoProduto());
            });
        } else {
            areaProdutos.innerHTML = 'Nenhum produto encontrado.';
        }
    }

    buscarProduto() {
        buscador.addEventListener('input', () => {
            const busca = buscador.value.toLowerCase();
            const itensBuscados = this.arrayProdutos.filter(produto => produto.nome.toLowerCase().includes(busca));
            this.exibirProdutos(itensBuscados);
        })
    }
}

const blusaLaranja = new Produto('blusa laranja', 'blusa', 'img/blusa-laranja.png', 79.99);
const blusaVerde = new Produto('blusa verde', 'blusa', 'img/blusa-verde001.png', 79.99);
const botaCouroMarrom = new Produto('bota de couro marrom', 'bota', 'img/bota-couro-marrom001.png', 189.99);
const botaCouroPreta = new Produto('bota de couro preta', 'bota', 'img/bota-couro-preta001.png', 189.99);
const saiaAzul = new Produto('saia azul', 'saia', 'img/saia-azul001.png', 99.99);
const saiaRosa = new Produto('saia rosa', 'saia', 'img/saia-rosa001.png', 99.99);
const vestidoAzul = new Produto('vestido azul', 'vestido', 'img/vestido-azul001.png', 139.99);
const vestidoAmarelo = new Produto('vestido amarelo', 'vestido', 'img/vestido-longo-amarelo001.png', 139.99);
const vestidoVermelho = new Produto('vestido vermelho', 'vestido', 'img/vestido-vermelho001.png', 139.99);

const listaDeProdutos = [blusaLaranja, blusaVerde, botaCouroMarrom, botaCouroPreta, saiaAzul, saiaRosa, vestidoAzul, vestidoAmarelo, vestidoVermelho];

const estante = new Estante (listaDeProdutos);
estante.exibirProdutos(listaDeProdutos);
estante.buscarProduto();