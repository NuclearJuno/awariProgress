// minha versão

const inputAge = prompt('Digite idades separadas por virgulas', '2,5,6,8,18');
const valores = inputAge.split(',');
console.log('Idades', valores);


for(let i =0; i<valores.length; i++) {
    total += parseInt(valores[i]);
}
const mediatotal = total / valores.length;
console.log('média', media);

// outro exemplo com array 
let idades = [];

for (let i = 0; i < 5; i++) {
  const idade = parseInt(prompt("Digite a idade:"));
  idades.push(idade);
}

const media = idades.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / idades.length;

console.log("A média das idades é: " + media);




// versão awari
// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31');
const values = input.split(',');
console.log('Idades', values);

let total = 0;
for(let i=0; i<values.length; i++) {
    total += parseInt(values[i]);
}

const media = total / values.length;
console.log('Média', media);