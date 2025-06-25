import { DescontoStrategy } from './DescontoStrategy.js';

export class DescontoProgressivo extends DescontoStrategy {
  static nomeChave = 'progressivo';
  static nomeExibicao = 'Progressivo';
  calcular(valor) {
    const descontos = [
      { limite: 100, percentual: 0.05 },
      { limite: Infinity, percentual: 0.15 }
    ];
    const desconto = descontos.find(d => valor <= d.limite) || descontos[descontos.length - 1];
    return valor - (valor * desconto.percentual);
  }
}
// Instancia para registro automático
new DescontoProgressivo();