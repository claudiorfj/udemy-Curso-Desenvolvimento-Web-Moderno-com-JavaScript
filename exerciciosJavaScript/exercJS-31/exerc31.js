function contNumNegativos (array){
    let qtdNegativos = 0
    for(let i = 0; i < array.length; i++){
        if (array[i] < 0){
            qtdNegativos++
        }
    }

    return`Há ${qtdNegativos} número(s) negativo(s) no array.`
}
array =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log(contNumNegativos(array))
