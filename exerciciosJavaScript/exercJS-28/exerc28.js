function numerosParesImpares(numeros){
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0){
            qtdPares++
        }else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
numerosParesImpares(array)