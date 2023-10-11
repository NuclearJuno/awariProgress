#Arrays, VETOR declarar lista de elemntos 
frutas = ['maça', 'banana']
print(frutas)

#acessando uma posição da lista aonde apenas se adiciona no final e remove no inicio 
print(frutas[0])
frutas.append('laranja') #adicionando um elemento por ultimo (sempre por ultimo)
print(frutas)

#removendo o elemento da lista considerando o valor
frutas.remove('laranja')

#removendo um elemntos da lista considerando a sua posição
frutas.pop (1)
print(frutas)


#FILA
numeros = [1, 2, 5, 6, 22,] # declaração 

numeros.append(444) #adicionando elementos na ultima posiçãp 
print(numeros)

numeros.pop(0) #removendo o primeiro elemento 
print(numeros)

#pilha 
# inserir na pilha uma elemento na ultima posição 
livros = ['livro1', 'livro2', 'livro3']
livros.insert('livro4')
print(livros)

livros.pop(0) # remover o primeiro elemento da pilha
print(livros)

