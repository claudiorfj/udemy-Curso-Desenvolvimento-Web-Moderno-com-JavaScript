function calcularCrescimento(altura1, taxaCrescimento1, altura2, taxaCrescimento2){
if(altura1 == altura2){
    if (taxaCrescimento1 > taxaCrescimento2){
        return 'A crianca 1 ultrapassará a criança 2 em 1 ano.'
    } else if (taxaCrescimento1 < taxaCrescimento2){
        return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
    } else {
        return 'As crianças tem altura e taxa de crescimento iguais.'
    }
}else {
    if(altura1 > altura2){
        if (taxaCrescimento1 >= taxaCrescimento2){
            return 'A criança menor não ultrapassará a maior.'
        }else{
            return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxaCrescimento2, altura1, taxaCrescimento1)} anos`
        }
    }else {
        if(taxaCrescimento2 >= taxaCrescimento1){
            return 'A criança menor não ultrapassará a maior.'
        }else{
            return `A criança menor ultrapassará a maior em ${calcularTempo(altura1,taxaCrescimento1, altura2, taxaCrescimento2)} anos`
        }
    }
}
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior){
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4))