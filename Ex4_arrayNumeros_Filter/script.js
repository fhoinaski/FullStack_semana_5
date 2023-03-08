const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayImpares = []

// metodo para filtrar os números impares
const filtrarArray = arrayNumeros.filter(numero=>{
    //verifica se o resto da divisão do número por 2 é diferente de 0
if(numero % 2 !== 0){
    // se o numero for impar ele adiciona o numero no arrayImpares
    arrayImpares.push(numero)
    return true
}else {
    return false
}
})


//
console.log(arrayImpares)