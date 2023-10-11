#
def http_error(status):
    match status:
        case 400:
            return "bad request"
        case 404:
            return "not found"
        case 418:
            return "imma tapot"
        case _:
            return "somethings wrong w t internet"
print(http_error(418))


######################## <<<<<<<<<<<<<<

for valor in numeross:
    #codigo a executar 

numeros = [1, 1, 5, 6, 8]
for numero in numeros: #é a variavel de inicialização, 
     print(numero) #numeros é a lista a ser percorrida, for é a orientação 

##########################<<<<<<<<<<<<<< versão while no python para percorrer uma lista 
numeros = [1, 1, 5, 6, 8]
index = 0
while (len(numeros)) :
    print(numeros)
    index = index + 1

########################## versão do do em while no python 
numeros = [1, 1, 5, 6, 8] ## array a ser percorrido 
index = 0
condição_de_parada = true 
while (condição_de_parada):
    print(numeros[index])
    index = index + 1
    condição_de_parada = index < len(numeros)
##################################
soma_numero = [1, 2, 5, 6, 8, 12]
resultado = 0 # aqui tentei fazer a soma de cada elemento percorrido
for lista in soma_numero:
    print(resultado = resultado + lista)
    ddd