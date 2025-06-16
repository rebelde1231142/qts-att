// Função para calcular um desconto progressivo
export const descontoProgressivo = (valor) => {
  if (valor > 100) {
    return valor - (valor * 0.15); // 15% de desconto para valores acima de R$ 100
  } else {
    return valor - (valor * 0.05); // 5% de desconto para valores abaixo de R$ 100
  }
};