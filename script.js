// Selecionando os elementos
const modalForm = document.getElementById('modalForm');
const modalSuccess = document.getElementById('modalSuccess');
const botoesAbrir = document.querySelectorAll('.button--reservation');
const reservationForm = document.getElementById('reservationForm');

// Abrir o formulário
botoesAbrir.forEach(botao => {
  // Adiciona o evento de clique individualmente
  botao.onclick = function() {
    modalForm.style.display = "block";
  };
});

// Fechar nos botões (X)
document.getElementById('closeForm').onclick = () => modalForm.style.display = "none";
document.getElementById('closeSuccess').onclick = () => modalSuccess.style.display = "none";

// Lógica de envio
reservationForm.onsubmit = function(e) {
  e.preventDefault(); // Impede a página de recarregar
  
  // 1. Esconde o formulário
  modalForm.style.display = "none";
  
  // 2. Mostra o sucesso
  modalSuccess.style.display = "block";
  
  // Opcional: Limpar o formulário para a próxima vez
  reservationForm.reset();
};

// Fechar se o usuário clicar fora da caixa branca
window.onclick = (event) => {
  if (event.target == modalForm) modalForm.style.display = "none";
  if (event.target == modalSuccess) modalSuccess.style.display = "none";
}


///////// Função para alterar o valor do input de adultos

function changeValue(delta) {
  const input = document.getElementById('adults');
  let currentValue = parseInt(input.value);
  let newValue = currentValue + delta;

  // Verifica os limites (mínimo 1, por exemplo)
  if (newValue >= 1 && newValue <= 10) {
    input.value = newValue;
  }
}