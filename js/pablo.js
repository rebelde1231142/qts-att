import { DescontoStrategy } from './DescontoStrategy.js';

export class PabloDesconto extends DescontoStrategy {
  static nomeChave = 'pablo';
  static nomeExibicao = 'Pablo';
  calcular(valor) {
    return valor - (valor * 0.20);
  }
}

// Instancia para registro automático
new PabloDesconto();