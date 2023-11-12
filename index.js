
// Jogo do Herói

// 'npm prompt-sync' habilita prompts em node.js
const prompt = require('prompt-sync')();

// Variáveis básicas
let nomeHeroi = prompt("Escolha um nome para o Herói: ", "Padrão");
let xp = 0
let nivel = "Ignorante"

// Informações do Herói
let mensagem = "O Herói de nome "+ nomeHeroi + " está no nível "

// Loop do jogo

while (xp <= 11000) {
    
    // Incrementa a xp em 1 a cada nova iteração do loop
    xp+= 1

    // Condicionais que definem o nivel do Herói
    if (xp <= 1000) {nivel = "Ferro"};
    if (xp >= 1001) {nivel = "Bronze"};
    if (xp >= 2001) {nivel = "Prata"};
    if (xp >= 5001) {nivel = "Ouro"};
    if (xp >= 7001) {nivel = "Platina"};
    if (xp >= 8001) {nivel = "Ascendente"};
    if (xp >= 9001) {nivel = "Imortal"};
    if (xp >= 10001) {nivel = "Radiante"};

    // Garante que apenas as mensagens de troca de nível sejam exibidas
    switch (xp) {
        case 1: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 1001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 2001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 5001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 5001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 7001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 8001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 9001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
        case 10001: console.log(mensagem + nivel + ", " + xp + "xp.")
        break;
    }
}