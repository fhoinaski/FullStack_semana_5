const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrayQuadrados=[]

// cria uma funçào que pega todos os numeros do arrayNumeros e multiplica por 2
const dobro=arrayNumeros.map(numero=>{
    return numero*2
})
//arrayQuadrados recebe os numeros da função dobro
arrayQuadrados=dobro
console.log(arrayQuadrados)