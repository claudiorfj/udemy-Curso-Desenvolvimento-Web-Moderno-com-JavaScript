let arrayPilha = [1, 2, 3, 4, 5]
let arrayAdiciona = [6, 7, 8, 9, 10]

function adicionaArray(arrayInicial, arrayAdicionar){
    for(let i = 0; i < arrayAdicionar.length; i++){
        console.log(arrayAdicionar[i])
        arrayInicial.push(arrayAdicionar[i])
    }
    console.log('Array adicionado: ' + arrayAdicionar)
    console.log('Array resultado: ' + arrayInicial)
}

adicionaArray(arrayPilha, arrayAdiciona)
