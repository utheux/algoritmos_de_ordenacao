const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)

    let LivroAtual  = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco
    livros[menor] = LivroAtual

}
console.log(livros)