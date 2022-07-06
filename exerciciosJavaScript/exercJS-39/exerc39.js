function trocaValores(arrayA, arrayB){
    if (arrayA.length == arrayB.length){
        for (let i = 0; i < arrayA.length; i++){
            arrayA[i] = arrayA[i] + arrayB[i]
            arrayB[i] = arrayA[i] - arrayB[i]
            arrayA[i] = arrayA[i] - arrayB[i]
        }
    }else{
        return 'Arrays de tamanhos diferentes.'
    }
    console.log('Novo array A: ' + arrayA)
    console.log('Novo array B: ' + arrayB)
}

let arrayA = [1,2,3]
let arrayB = [4,5,6]

trocaValores(arrayA,arrayB)