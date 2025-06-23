import { DescontoStrategy } from './DescontoStrategy.js';

export class DescontoFixo extends DescontoStrategy {
  calcular(valor) {
    return valor - 20;
  }
}