import random

def jogo_da_forca():
    opcoes = ["emprego", "estagio", "desenvolvedor", "analista", "coisa", "nenhuma"]
    
    
    palavra_secreta = random.choice(opcoes).lower()
    letras_certas = set()
    letras_erradas = set()
    tentativas = 6 
    
    print("Vamos jogar!f")
    
    while True:
        palavra_mostrada = ""
        for letra in palavra_secreta:
            if letra in letras_certas:
                palavra_mostrada += letra + " "
            else:
                palavra_mostrada += "_ "
        print("\nPalavra:", palavra_mostrada)
        
        if letras_erradas:
            print("Letras erradas:", " ".join(letras_erradas))
        
        if all(letra in letras_certas for letra in palavra_secreta):
            print("\nParabéns! Você acertou a palavra:", palavra_secreta)
            break
        
        if len(letras_erradas) >= tentativas:
            print("\nGame Over! A palavra era:", palavra_secreta)
            break
        
        while True:
            tentativa = input("Digite uma letra: ").lower()
            if len(tentativa) != 1 or not tentativa.isalpha():
                print("Por favor, digite apenas uma letra válida.")
            elif tentativa in letras_certas or tentativa in letras_erradas:
                print("Você já tentou essa letra. Tente outra.")
            else:
                break
        
        if tentativa in palavra_secreta:
            letras_certas.add(tentativa)
        else:
            letras_erradas.add(tentativa)
            print(f"Errou! Você tem {tentativas - len(letras_erradas)} tentativas restantes.")

if __name__ == "__main__":
    jogo_da_forca()