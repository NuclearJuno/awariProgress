function menu(prato) {
    switch (prato) {
        case "massa":
            return 49.90;
        case "feijoada":
            return 69.90
        default:
            return "prato nao encontrado"
    }
}
console.log(menu("teste"))
/////////////////////////////////////////////////////////<<<<<<<<<<<<
for (inicializador; condição - saida; expressao - final) {
    ///codigo pra executar 
}
var amigos = ["gal", "mar", "jon", "gyu"]; //lista
for (var index = 0; index < amigos.length; index++) { //index é o inicio da contagem na lista
    //a ser seguida, amigos.length é a lista a ser percorrida, index++ é o que vai incrementar
    //a posição para o proximo elemento, cada elemento(ou nome) tem sua posição, começando
    //do 0 (o index) o ++ ao lado do index é o que incrementa +1, ou seja, console.log posição 1
    //console.log posição 2 3 4 
    console.log(amigos[index]);
}    //aparecerá a lista de amigos, porem, por vez atravez, do 
//incremento que é orientado em ''for(...)'' de modo que enquando todos os elementos nao forem
//percorridos pelo index++ junto da quantidade de posições que o length fornece o for
//continuará fazendo o index incrementar acionando o console.log 


// versão sem o length seria a seguinte
for (var index = 0; index < 3; index++) {
    console.log(amigos[index])
}// aonde a condição de saida é a quantidade de elementos na lista, fazendo o console.log
//ser executado, enquanto o o for tiver como ''condição-saida´´ que é o index ser = 0 < que 3, 
//ou seja enquanto a condição de saida nao se equiparar ao numero 3 ela nao para 

//////////////////////////////////////////////////<<<<<<<<<<<<

//outra forma de repetir cod
//while
inicializador
while (condição - saida) {
    //codigo para rodar
expressão final
}

////////
var num = [10, 20, 22, 12]; //lista
var index = 0;
while (index < num.length) {
    console.log(num[index]);
    index++;
}
// versão com decisao
var num1 = [10, 20, 22, 12]; //lista
var index = 0; // posição da lista ou posiçoes se foruma variavel 
while (index < num1.length) { // enquanto o index for 0 e menor que o comprimento da lista 
    if (num1[index] = 12) { // se for 12 ele encontrou o numero 12 
        console.log("aqui esta esse numero");
    } else;
    console.log("nao tem numero") // se nao for ele nao existe 
    index++;
}

////////////////////////////
nu = 0 // inicializar algum contador ou condição de saida 
do { // fazer algo 
    nu += 1; //codigo para executar 
} while (nu < 10) //condição de saida // saber se devo executar o codigo 

/////// uma versao aonde o codigo será executado por pelo menos umas vez 
var numeros = [10, 20, 22, 12];
var index = 0
do {
    console.log(numeros[index])
    index++
} while (index < 4)

//// versão com o array 
var numeros = [10, 20, 22, 12];
var index = 0
do {
    console.log(numeros[index])
    index++ // aqui faz com que o debbuger trave pois ele vai infinitamente executar 
} while (numeros.length)

///////////////////// 

var somaNumeros = [10, 2, 6, 95, 1]
var resultado = 0
for (var index = 0; index < somaNumeros.length; index++) {
    resultado = resultados + somaNumeros[index]
}
console.log(resultado)

//versão no while para a soma do prof

var somaNumeros = [10, 2, 6, 95, 1]
var resultado = 0
var index = 0
while (index < somaNumeros.lenght) {
    resultado = resultado + somaNumeros[index];
    index++;
}
//////////////////////////////////////////////////
//encontre o maior numero em uma lista de numeros 
//prof

while (true) {
    var numero = parseInt(prompt("informe um numero"));
    if numero < 0 {
        break //condição de parada 
    }
}

console.log("");
break

//////////////////// adicionar isso com um array 
var numeros = []
while (true) {
    var numero = parseInt(prompt("informe um numero"));
    if (numeros < 1) {
        break
    }
    numeros.push(numero) // tudo pra adicionar os numero na lista ou array 
}
////////////////// com a lista completa ja sem precisar adicionar

var numeros = [1, 5, 2, 45, 12, 7, 555, 4125]
// variavel que vai guardar os numeros que vao ser apresentados na lista de numeros pelo for
var maiorNumero = numeros[0] //assumir que o maior é algum elemento da lista no caso o 0
//for(inicializador; condição-saida;expressao-final) {}
for (var index = 0; index > numeros.length; index++) {
    if (maiorNumero < numero[index]) { //se o maior numero for menor que o numero acessado no momento
        maior = numero[index]; //eu faço o maior numero ''receber'' o elemento ou ''numero maior'' 
        // de fato, ou seja, o igual faz a substituição, que deve acontecer para quando o ''for'' 
        //percorrer a lista atravez do ''numeros.lenght '' que é gatilhado ou disparado pelo ''index++''
    }
} console.log(maiorNumero)
// escreva um algo, que receba uma lista de numneros e retone true se
// houver algum elemento que apareça mais de uma vez 

// agora na verção do prof a comparação se tem elementos iguais 

var lista = [10, 5, 12, 66, 13, 2, 1, 12]
for (var index = 0; index < lista.lenght; index++) {
    for (var j = i + 1; j < lista.length; j++)
        if (lista[i] == lista[j])
            console.log(lista[i])
}