// Função para calcular o saldo de ranqueadas e determinar o nível do jogador
function calcularSaldoRankeadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
  
    if (vitorias < 10) {
      nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = 'Lendário';
    } else {
      nivel = 'Imortal';
    }
  //retorno da função do saldo que subtrai vitorias e derrotas
    return `O Jogador tem um saldo de ${saldo} está no nível de ${nivel}`;
  }
  
  // Exemplos teste para o uso da função
  console.log(calcularSaldoRankeadas(5, 2)); // Saída: "O Jogador tem um saldo de 3 está no nível de Ferro"
  console.log(calcularSaldoRankeadas(15, 8)); // Saída: "O Jogador tem um saldo de 7 está no nível de Bronze"
  console.log(calcularSaldoRankeadas(55, 20)); // Saída: "O Jogador tem um saldo de 35 está no nível de Ouro"
  