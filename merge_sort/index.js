const listaLivros = require("./listaLivros");

function mergeSort(array){
    console.log("___________________________________")
    console.log("ARRAY DIVIDINDO")
    console.log(array)
    console.log("___________________________________")
    if(array.length > 1){
        const meio = Math.floor(array.length/2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2);
    }
    return array;
}

function ordena(parte1, parte2){
    console.log("___________________________________")
    console.log("arrays que chegam para ser ordenado")
    console.log(parte1,parte2)
    console.log("___________________________________")
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            console.log("___________________________________")
            console.log("push")
            console.log(resultado)
            console.log("___________________________________")
            posicaoAtualParte1++
        } else{
            resultado.push(produtoAtualParte2)
            console.log("___________________________________")
            console.log("push")
            console.log(resultado)
            console.log("___________________________________")
            posicaoAtualParte2++
        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))

}


console.log(mergeSort(listaLivros));