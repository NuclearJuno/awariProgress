// minha versão 
const value = window.prompt('digite um numero inteiro:', '10')
for(let j=0; j<=10; j++){
    console.log("tabuada de" + value)
    console.log(value + "x" + j + "=" + (value * j));
    }

// versão awari 
// 6. Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

const target = window.prompt('Digite um número inteiro:', '5');

console.log(`Tabuada de ${target}`);
for (let i=1; i<=10; i++) {
    const result = target * i;
    console.log(`${target} x ${i} = ${result}`);
}

