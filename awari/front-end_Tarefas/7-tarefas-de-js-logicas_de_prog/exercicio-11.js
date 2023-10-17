//minha versão 

const input = prompt('digite um numero inteiro', '9');
let resultado = '';
for let (index = 1; index <= input; index++){
    for(let jindex = 1; jindex<=index; jindex++){
        resultado += '*';
    }
    resultado +='\n'
}
console.log(resultado);

// 10. Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.

const input = prompt('Digite um número inteiro:', '5');

let result = '';
for(let i=1; i<=input; i++) {
    for(let j=1; j<=i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);