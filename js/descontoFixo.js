import { DescontoStrategy } from './DescontoStrategy.js';

export class DescontoFixo extends DescontoStrategy {
  static nomeChave = 'fixo';
  static nomeExibicao = 'Fixo (R$ 20)';
  calcular(valor) {
    return valor - 20;
  }
}
// Instancia para registro automático
new DescontoFixo();