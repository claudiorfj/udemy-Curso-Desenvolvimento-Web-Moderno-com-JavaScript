function contador(array){
    qtdNumeros = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] >= 10 && array[i] <= 20){
            qtdNumeros++
        }
    }
    return `${qtdNumeros} números dentro do intervalo.`
}

array = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(contador(array))