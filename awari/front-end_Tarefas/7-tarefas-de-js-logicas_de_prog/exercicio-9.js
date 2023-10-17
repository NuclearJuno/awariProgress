//minha versão 
const inputAge = prompt('Digite idades', '10,12,33,55,58,25');
const valores = inputAge.split(',');
console.log('Idades', valores);

let contador = 0;
for(let i = 0; i < valores.length; i++) {
    const age = parseInt(valores[i]);
    if(age >= 18) {
        contador++;
    }
}
console.log('maiores de idade', contador)

//outra versão 

const inputAge = prompt('Digite idades separadas por vírgula (por exemplo: 10,12,33,55,58,25)');
const valores = inputAge.split(',');
console.log('Idades:', valores);

let contador = 0;
for (let i = 0; i < valores.length; i++) {
  const age = parseInt(valores[i]);
  if (age >= 18) {
    contador++;
  }
}
console.log(`Quantidade de pessoas com mais de 18 anos: ${contador}`);

//versão awari
// 9. Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31,50,13,2,80,42');
const values = input.split(',');
console.log('Idades', values);

let counter = 0;
for(let i=0; i<values.length; i++) {
    const age = parseInt(values[i]);
    if (age >= 18) {
        counter ++;
    }
}

console.log('Maiores de idade', counter);