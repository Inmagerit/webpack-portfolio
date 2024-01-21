
ALFABETO = "ABCDEFGHIJKLMNÑRSTOPQXYZ"

salida = ""

modo = input("¿Desea cifrar (c) o descifrar (D)? (c/D): ")
texto = input("Introduzca su texto: ")
clave = int(input("Introduzca un número entre 1 y 25 como clave: "))
for simbolo in texto.upper():
    if simbolo in ALFABETO:
        indice = ALFABETO.find(simbolo) 

        if modo == "c":
            pos = (indice - clave) % 26
        elif modo == "D":
            pos = (indice + clave) % 26  # Adjusted to add the key for decryption

        salida += ALFABETO[pos]

    else:
        salida += simbolo

print(salida)

