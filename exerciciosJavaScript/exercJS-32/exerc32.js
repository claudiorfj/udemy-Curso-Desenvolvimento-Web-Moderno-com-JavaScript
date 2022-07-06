function mediaArray(array){
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    return soma / array.length
}
array = [1, 2, 99, 4, 5]
console.log(mediaArray(array))
