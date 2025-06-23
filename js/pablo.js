import { DescontoStrategy } from './DescontoStrategy.js';

export class DescontoPercentual extends DescontoStrategy {
  calcular(valor) {
    return valor - (valor * 0.20);
  }
}