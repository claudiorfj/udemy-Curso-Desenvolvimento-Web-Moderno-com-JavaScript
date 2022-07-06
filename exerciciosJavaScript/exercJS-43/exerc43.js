function salarioLiquido(horasMes, salarioHora){
    salario = (horasMes * salarioHora)
    imposto = salario * 0.3
    salario -= imposto
    const valorFormatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return `Salário igual a R$${valorFormatado}.`
}
console.log(salarioLiquido(220, 10.2))