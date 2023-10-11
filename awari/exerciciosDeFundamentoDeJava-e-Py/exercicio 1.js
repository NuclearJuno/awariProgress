var numero = 1
var texto = "eu sou legal" 
var resultado = true 
console.log(numero, texto, resultado)
console.log(------)

//multiplicação//
function multiplicação(a, b){
    return a*b
}
console.log(multiplicação(8, 2))

//faça um algoritmo para calcular a area de um retangulo//
function getAreaRetangulo(base, altura){
    return base * altura
}
console.log(getAreaRetangulo(8, 2))

//para saber o tipo de uma variavel e ajudar na representação 
numero = 10 // number
texto = "alo" //string
valor = false //boolean
console.log(typeof numero, texto, valor)

//variavel global e local 
var pi = 3,14;
function teste1(){
    var result = pi * 2;
    return result; //varial local
}
function teste2 (){
    return pi *2;
}
console.log(teste1)
console.log(teste2)

//constantes nao podem ser alteradas

const pi
pi = 3,14;
function teste3(){
    var result = pi * 2;
    return result; //varial local
}
function teste4 (){
    return pi *2;
}
console.log(teste3)
console.log(teste4)




