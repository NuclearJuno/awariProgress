// minha versão 
const valor = window.prompt('digite um numero inteiro', 'por exemplo 10')
const pares = []; // pares
const impares = [];

for(var i=1; i<=valor; i++) {
    if(i % 2 === 0){
        pares.push(i);
    } else {
        impares.push(i);
    }
}
console.log ("numeros pares: " + pares);
console.log ("numeros impares: " + impares);

// /* 
//     7. Escreva um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.
//     Para saber se um dado numero é par ou ímpar a melhor maneira é usando o operador modulus/resto, % . Que retorna o resto da divisão de dois numeros.
//     Se n % 2 der resto zero, o numero é par, e impar caso contrário.
// */

const value = window.prompt('Digite um número inteiro:', '10');

const evens = []; // pares
const odds = []; // ímpares

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}

console.log('Numeros pares:', evens);
console.log('Numeros ímpares:', odds);