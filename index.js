// Importa as funções de cálculo de desconto de arquivos separados
import { DescontoStrategy } from './js/DescontoStrategy.js';
import { DescontoPercentual } from './js/descontoPercentual.js';
import { DescontoFixo } from './js/descontoFixo.js';
import { DescontoProgressivo } from './js/descontoProgressivo.js';
import { pablo } from './js/pablo.js';

// Função para calcular desconto recebendo valor e uma estratégia
export function calcularDesconto(valor, estrategia) {
  // Nenhuma validação, apenas delega para a estratégia
  return estrategia.calcular(valor);
}

// Exemplo de uso:
// const resultado = calcularDesconto(200, new DescontoProgressivo());
// console.log(resultado);