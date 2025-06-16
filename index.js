// Importa as funções de cálculo de desconto de arquivos separados
import { descontoPercentual } from './js/descontoPercentual.js';
import { descontoFixo } from './js/descontoFixo.js';
import { descontoProgressivo } from './js/descontoProgressivo.js';

// Define um objeto que mapeia os tipos de desconto às suas respectivas funções
const estrategiasDesconto = {
  percentual: descontoPercentual,
  fixo: descontoFixo,
  progressivo: descontoProgressivo
};

// Função principal para calcular o desconto
function calcularDesconto() {
  const valorInput = document.getElementById("valor").value.trim(); // Captura o valor do campo de entrada
  const valor = parseFloat(valorInput); // Converte o valor para número
  const tipoDesconto = document.getElementById("selectItem").value; // Captura o tipo de desconto selecionado

  // Validação do valor
  if (!valorInput || isNaN(valor) || valor <= 0) {
    document.getElementById("resultado").innerText = "Por favor, insira um valor válido."; // Exibe mensagem de erro
    return;
  }

  // Validação do tipo de desconto
  if (!tipoDesconto || !estrategiasDesconto[tipoDesconto]) {
    document.getElementById("resultado").innerText = "Por favor, selecione um tipo de desconto válido."; // Exibe mensagem de erro
    return;
  }

  // Aplicação da estratégia de desconto
  const resultado = estrategiasDesconto[tipoDesconto](valor); // Calcula o desconto usando a estratégia selecionada

  // Exibição do resultado
  document.getElementById("resultado").innerText = `Valor com desconto: R$ ${resultado.toFixed(2)}`; // Exibe o resultado formatado
}

// Expõe a função calcularDesconto ao escopo global
window.calcularDesconto = calcularDesconto;