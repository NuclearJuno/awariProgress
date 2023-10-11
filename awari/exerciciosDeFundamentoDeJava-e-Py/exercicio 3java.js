var idade = 18; // idade
if (idade > 20) { //se a idade for maior q 20 jovem adulto 
    console.log("jovem adulto")
}   else if(idade > 70) { //se for e ainda adulto e maior que 70 é idoso
        console.log("pessoa idosa")
} else // se nao for <<<

////////////////////////////////////////////

var usuario = "haroldo junior lima" //.split quebra a cada espaço a STRING
var resultado = usuario.split("") //o que esta dentro dos parenteses em split("") seria o (...)
console.log(resultado) //o padrão de separação ou split

//array 
var usuario = "ahahah hahaha hahaha"
console.log = (usuario.length)
//ou com os couchetes pra imprimir só a posição especifica do length
console.log = (usuario[0])

//////////////////////
var cpf = 
if (cpf.lenght == 14) { // verifica a quantidade ou tamanho dos caracteres
    console.log("cpf valido")
} else {
    console.log("cpf invalido")}
///////////////////////
function menu(prato) {
    switch(prato) { // é uma forma de organização , ou modelo de decisão 
        case "pizza": //case é equivalente a igual aonde o elemento no case remete a o que vc retornara dentro dele
            return "comprar (...) calabresas, queijo, (...)"
        case "sanuiche":
            return "comprar (...) paes, queijo, presunto, maionese, (...)"
    }
}
console.log(menu(pizza))

///////////////////////////////Escreva um algoritmo que lê a idade de uma pessoa e 
//verifica e mostre se ela deve votar (obrigatório para pessoas com idade entre 18 e 70 anos), 
//pode votar (opcional para pessoas com idade entre 16 e 18 anos ou maior que 70 anos) 
//ou não pode votar (impedido para pessoas com idade menor que 16 anos).
var idade = 16
if(idade < 16) {
    console.log("nao pode votar")
} else if ((idade > 16 & idade < 18) ||  idade < 70) {
    console.log("voto opcional")
} else (idade > 18);
    console.log ("deve votar")

    //professor

var idade = 16
if(idade < 16){
    console.log("nao pode votar")
} else if ((idade > 16 & idade < 18) || idade > 70) {
    console.log("voto opcional")
} else {
    console.log("seu voto é obrigatorio")
}

var salario = 1320
var vendas = 1550
    if (vendas >= 1000 & vendas <= 5000) {
        console.log (salario + 500)
    } else if (vendas > 5000 & vendas < 7000) {
        console.log (salario + 700)
    } else if (vendas > 7500) {
        console.log (salario + 1000)
    } else console.log(salario);

    //professor 

var salario = 1550
var totalVendas = 1200

if(totalVendas > 1000 & totalVendas < 5000) {
    console.log(salario + 500);
} else if(totalVendas > 5000 & totalVendas < 7500) {
    console.log(salario + 700);
} else if(totalVendas > 7500){
    console.log(salario + 1000);
}

var num = 1
if (num > 1)  {
    console.log(num = num +2);
} else(num < 1);
    console.log(num)

