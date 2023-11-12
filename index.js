
// Jogo do Herói

// 'npm prompt-sync' é uma dependência para código funcionar em node.js
const prompt = require('prompt-sync')();

// Variáveis básicas
let nomeHeroi = prompt("Escolha um nome para o Herói: ", "Padrão");
let xpHeroi = 0
let nivel = "Ignorante"

let mensagem = console.log("O Herói de nome "+ nomeHeroi + " está no nível de " + nivel + ".")

if (nomeHeroi != null) {
    mensagem
    return
}