import { DescontoStrategy } from './DescontoStrategy.js';

export class DescontoPercentual extends DescontoStrategy {
  static nomeChave = 'percentual';
  static nomeExibicao = 'Percentual (10%)';
  calcular(valor) {
    return valor - (valor * 0.10);
  }
}
// Instancia para registro automático
new DescontoPercentual();