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

    exibirProdutos() {
        const cartaoProdutos = document.createElement('div');
        cartaoProdutos.classList.add('cartao-produtos');
        cartaoProdutos.innerHTML = `
            <img src="${this.imagem}" alt="${this.nome}"</img>
            <h3>${this.nome}</h3>
            <p>${this.preco}</p>
        `;
    }
}

class Prateleira {
    
}