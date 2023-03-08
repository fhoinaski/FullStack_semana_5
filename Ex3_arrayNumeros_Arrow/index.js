const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arrayInvertido = []

// metodo para interver array
const inverterArray = () => {
         //cia uma variavel i e inicia com o valor do ultimoelemento do arrayNumeros
         // o arrayNumeros tem 9 elementos mas o indice do ultimo elemento sera 8
    for (let i = arrayNumeros.length - 1; i >= 0; i--) {
        // adiciona o elemento que esta no indice "i" na variavel arrayInvertido
        arrayInvertido.push(arrayNumeros[i]);
    }
}
//chamao metodo para inverter array
inverterArray();

console.log(arrayInvertido)