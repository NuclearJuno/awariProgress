def soma(a,b):
    print(a + b)
soma(22, 11)

for i in range(2, 9, 2): 
    for j in range (i, 5): 
        for k in range(1, j+1, i): 
            print(i, ", ", j, ", ", k)
