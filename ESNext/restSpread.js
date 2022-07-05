//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))

//operador spread
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario }
console.log(clone)

const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)