// Interface (classe base) para estratégias de desconto
export class DescontoStrategy {
  calcular(valor) {
    throw new Error('O método calcular() deve ser implementado.');
  }
}
