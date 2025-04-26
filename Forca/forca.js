function jogoDaForca() {
    const opcoes = ["emprego", "estagio", "desenvolvedor", "analista", "coisa", "nenhuma"];
    const palavraSecreta = opcoes[Math.floor(Math.random() * opcoes.length)].toLowerCase();
    const letrasCertas = new Set();
    const letrasErradas = new Set();
    const tentativasMaximas = 6;

    alert("Vamos jogar!");

    while (true) {
        let palavraMostrada = "";
        for (let letra of palavraSecreta) {
            if (letrasCertas.has(letra)) {
                palavraMostrada += letra + " ";
            } else {
                palavraMostrada += "_ ";
            }
        }
        console.log("\nPalavra:", palavraMostrada.trim());

        if (letrasErradas.size > 0) {
            console.log("Letras erradas:", Array.from(letrasErradas).join(" "));
        }

        if ([...palavraSecreta].every(letra => letrasCertas.has(letra))) {
            console.log("\nParabéns! Você acertou a palavra:", palavraSecreta);
            break;
        }

        if (letrasErradas.size >= tentativasMaximas) {
            console.log("\nGame Over! A palavra era:", palavraSecreta);
            break;
        }

        let tentativa = "";
        while (true) {
            tentativa = prompt("Digite uma letra:").toLowerCase();
            if (!tentativa || tentativa.length !== 1 || !tentativa.match(/[a-z]/i)) {
                alert("Por favor, digite apenas uma letra válida.");
            } else if (letrasCertas.has(tentativa) || letrasErradas.has(tentativa)) {
                alert("Você já tentou essa letra. Tente outra.");
            } else {
                break;
            }
        }

        if (palavraSecreta.includes(tentativa)) {
            letrasCertas.add(tentativa);
        } else {
            letrasErradas.add(tentativa);
            alert(`Errou! Você tem ${tentativasMaximas - letrasErradas.size} tentativas restantes.`);
        }
    }
}

jogoDaForca();