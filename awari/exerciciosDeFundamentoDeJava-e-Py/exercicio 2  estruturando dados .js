// sobre estruturação de dados, usuarios e cadastro...(...)
// (...) e como estruturar e tem haver com boilerplates...(...)
// (...) como manipular de uma forma dinamica
var us1 = "maria"
var us2 = "joao"
var us3 = "robert"
var us4 = "alan"
var us5 = "bida" 

//vetores, filas e pilhas e como funcionam 
//VETOR seria uma prateleira de livros 
var frutas = ['maça', 'banana']; //declarando uma lista de elementos
console.log(frutas);

console.log(frutas[0]) //acessar uma posição da lista 

frutas.push('laranja'); //adicionar um elemento a lista
console.log(frutas); //demonstrar atualizado

frutas.pop(); //pop remove um elemento da lista mas ele remove o ultimo elemento
console.log(frutas);

const index = frutas.indexOf('banana'); //considerar a posição da lista atravez do (...)
console.log(frutas); // (...)index (ou a posição do elemento)
frutas.splice(index, 1);// manipular a remoção por posição do elemento, index posição e 1 ela propriamente dita

//FILA é parecido com o vetor, porem com um comportamento diferente
var numeros = [2, 5, 6, 7, 41, 23] //declaração da fila

numero.push(555); //adicionando um novo elemento na fila na ultima posição
console.log(numeros);

numeros.shift(); // removendo o elemento na primeira posição da fila 
console.log(numeros); 

//PILHA
//decarar elementos na pilha 
var livros = ['livro1', 'livros2', 'livro3'] 
console.log(livros);

livros.unshift('livros4'); //adicionando elementos novo na pilha 
console.log(livros);

livros.shift(); //removendo o primeiro elemento
console.log(livros);





