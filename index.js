// Calculadora de partidas Rankeadas
const prompt = require('prompt-sync')();

let vitoria = prompt("Informe o número de vitórias: ");
let derrota = prompt("Informe o número de derrotas: ");
let resultado = diferenca(vitoria, derrota);
let saldoVitorias = resultado.saldo;
let nivel = resultado.nivel;

console.log(`O Herói tem o saldo de ${saldoVitorias}, está no nível de ${nivel}.`)

function diferenca(vitorias, derrotas){
	let saldo = vitorias - derrotas
    let nivel

    // criando a estrutura de decisão
    if (saldo <= 10) {
        nivel = "Ferro"
    } else if (saldo > 10 && saldo <= 20) {
        nivel = "Bronze"
    } else if (saldo > 20 && saldo <= 50) {
        nivel = "Prata"
    } else if (saldo > 50 && saldo <= 80) {
        nivel = "Ouro"
    } else if (saldo > 80 && saldo <= 90) {
        nivel = "Diamante"
    } else if (saldo > 90 && saldo <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    return {saldo, nivel}
}