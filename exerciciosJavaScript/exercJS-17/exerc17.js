function calcularReajuste(planoTrabalho, salarioAtual){
    switch(planoTrabalho){
        case('A')://10%
            return salarioAtual * 1.1
        case('B')://15%
            return salarioAtual * 1.15
        case('C')://20%
            return salarioAtual * 1.2
        default:
            return "Plano invalido"
    }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 2700));