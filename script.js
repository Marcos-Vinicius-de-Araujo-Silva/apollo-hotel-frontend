document.addEventListener('DOMContentLoaded', () => {
  const modalForm = document.getElementById('modalForm');
  const modalSuccess = document.getElementById('modalSuccess');
  const botoesAbrir = document.querySelectorAll('.open-modal');
  const reservationForm = document.getElementById('reservationForm');

  botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {
      modalForm.style.display = 'block';
    });
  });

  document.getElementById('closeForm').addEventListener('click', () => {
    modalForm.style.display = 'none';
  });

  document.getElementById('closeSuccess').addEventListener('click', () => {
    modalSuccess.style.display = 'none';
  });

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modalForm.style.display = 'none';
    modalSuccess.style.display = 'block';
    reservationForm.reset();
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalForm) modalForm.style.display = 'none';
    if (event.target === modalSuccess) modalSuccess.style.display = 'none';
  });
});


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