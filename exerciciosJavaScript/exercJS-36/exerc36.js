let array = [1, 2, 3, 4, 5]

function multiplicaArray(array, multiplicador){
    let arrayResultado = []
    array.forEach(elemento => {
        arrayResultado.push(elemento * multiplicador)
    });
    return arrayResultado
}

console.log(multiplicaArray(array, 3))