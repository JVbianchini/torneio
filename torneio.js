function calcularPontos() {
    let pontos = 0;
    let resultado;

    // Entrada: Recebe o resultado de cada uma das 6 partidas
    for (let i = 1; i <= 6; i++) {
        resultado = prompt(`Digite o resultado da ${i}ª partida (ganhou/perdeu):`);
        
        // Condicional para atribuir os pontos
        if (resultado.toLowerCase() === "ganhou") {
            pontos += 3; // Time ganha 3 pontos
        } else if (resultado.toLowerCase() === "perdeu") {
            pontos += 1; // Time ganha 1 ponto
        } else {
            console.log("Resultado inválido! Digite 'ganhou' ou 'perdeu'.");
            i--; // Repetir a partida
        }
    }

    // Exibe o total de pontos
    console.log(`Total de pontos conquistados: ${pontos}`);
    
    // Determina se o time foi campeão (com base em regras simples de pontos)
    if (pontos >= 15) {
        console.log("Você é o campeão!");
    } else {
        console.log("Você não foi o campeão.");
    }
}


// A estrutura condicional mais adequada para esse programa é a estruturas if e else if. Essa estrutura permite testar se o time ganhou ou perdeu e atribuir os pontos corretamente.

// Vamos supor que o time precisa de 15 pontos para ser considerado o campeão, com base no sistema de pontos
// Se o time ganhar uma partida, ele recebe 3 pontos.
// Para alcançar 15 pontos, o time precisa ganhar:
// Portanto, o time deve ganhar pelo menos 5 partidas para ser campeão, assumindo que ele participará de 6 partidas.

// Chama a função para calcular os pontos
calcularPontos();
