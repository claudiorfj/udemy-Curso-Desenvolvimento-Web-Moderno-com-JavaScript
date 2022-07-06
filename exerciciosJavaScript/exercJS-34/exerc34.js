function verificaString(string1, string2){
    let inString = true
    for (let i = 0; i < string1.length; i++){
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2){
                inString = true
                break
            }else{
                inString = false
            }
        }
        if (!inString){
            return inString
        }
    }
    return inString
}

console.log(verificaString('abc', 'cba'))
console.log(verificaString('abc', 'zxv'))