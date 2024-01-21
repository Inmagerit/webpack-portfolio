#Cifra atbash

CLARO = "abcdefghijklmnñopqrstxyz"

CIFRA = "ZYXTSRQPOÑNMLKJIHGFEDCBA"

salida = ""

texto = input("introduzca texto para cifrar")

for simbolo in texto.lower():

    if simbolo in CLARO:
        indice = CLARO.index(simbolo)
        salida += CIFRA[indice]

print(salida)
