// Registro centralizado de estratégias de desconto
export const estrategiasDesconto = {}

// Interface (classe base) para estratégias de desconto
export class DescontoStrategy {
  constructor() {
    if (this.constructor !== DescontoStrategy) {
      // Registra a estratégia automaticamente usando o nome estático
      if (this.constructor.nomeChave && this.constructor.nomeExibicao) {
        estrategiasDesconto[this.constructor.nomeChave] = {
          nome: this.constructor.nomeExibicao,
          instancia: this
        }
      }
    }
  }

  calcular(valor) {
    throw new Error('O método calcular() deve ser implementado.')
  }
}
