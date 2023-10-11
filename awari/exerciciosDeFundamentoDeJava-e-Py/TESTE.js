function soma (a,b) {
    console.log(a + b)
}
soma(10, 52)

// Definir a lista de números
var lista = [1, 2, 3, 45, 68, 58];

// Definir um valor inicial para o maior número
var maior = lista[0];

// Usar um loop for para percorrer cada elemento da lista
for (var i = 0; i < lista.length; i++) {
  // Verificar se o elemento atual é maior do que o maior número
  if (lista[i] > maior) {
    // Atualizar o valor do maior número
    maior = lista[i];
  }
}

// Mostrar o resultado
console.log("O maior número é " + maior);

