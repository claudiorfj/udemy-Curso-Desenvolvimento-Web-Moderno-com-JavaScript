function planoSaude(idade){
    if (idade < 10){
        return 100 + 80
    }else if(idade >= 10 && idade <= 30){
        return 100 + 50
    }else if(idade > 30 && idade <= 60){
        return 100 + 95
    }else if(idade > 60){
        return 100 + 130
    }
}
console.log(planoSaude(23))
console.log(planoSaude(333))
console.log(planoSaude(3))