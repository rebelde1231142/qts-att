// Importa as funções de cálculo de desconto de arquivos separados
import { estrategiasDesconto } from './js/estrategiasDesconto.js';

// Função para calcular desconto recebendo valor e uma estratégia
export function calcularDesconto(valor, estrategia) {
  const estrategiaSelecionada = estrategiasDesconto[estrategia]?.instancia;
  if (!estrategiaSelecionada) {
    throw new Error('Estratégia de desconto inválida.');
  }
  return estrategiaSelecionada.calcular(valor);
}

// Exemplo de uso:
// const resultado = calcularDesconto(200, new DescontoProgressivo());
// console.log(resultado);