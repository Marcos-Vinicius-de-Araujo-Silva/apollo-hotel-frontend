document.addEventListener('DOMContentLoaded', () => {
  const modalForm = document.getElementById('modalForm');
  const modalSuccess = document.getElementById('modalSuccess');
  const botoesAbrir = document.querySelectorAll('.open-modal');
  const reservationForm = document.getElementById('reservationForm');

  botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {
      modalForm.style.display = 'flex';
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
    
    // Obter las fechas
    const inputs = reservationForm.querySelectorAll('input[type="date"]');
    const checkInDate = new Date(inputs[0].value);
    const checkOutDate = new Date(inputs[1].value);
    
    // Validar que la fecha de entrada sea anterior a la de salida
    if (checkInDate >= checkOutDate) {
      alert('A data de entrada deve ser anterior à data de saída.');
      return;
    }
    
    modalForm.style.display = 'none';
    modalSuccess.style.display = 'flex';
    reservationForm.reset();
  });

  window.addEventListener('click', (event) => {
    if (event.target === modalForm) modalForm.style.display = 'none';
    if (event.target === modalSuccess) modalSuccess.style.display = 'none';
  });

  const galleryImage = document.getElementById('galleryImage');
  const galleryCaption = document.getElementById('galleryCaption');
  const prevButton = document.querySelector('.gallery__button--prev');
  const nextButton = document.querySelector('.gallery__button--next');

  const galleryItems = [
    { src: './assets/galeria1.jpg', caption: 'Fachada iluminada do hotel à noite' },
    { src: './assets/conforto-image.jpg', caption: 'Suíte confortável com decoração acolhedora' },
    { src: './assets/entretenimento-image.jpg', caption: 'Área de entretenimento com luz ambiente' },
    { src: './assets/home-image.jpg', caption: 'Vista panorâmica do hotel' },
    { src: './assets/localizacao-image.jpg', caption: 'Hotel em localização central em Mônaco' },
    { src: './assets/img1 home2.4.png', caption: 'Atrações esportivas' },
    { src: './assets/img2 home2.4.png', caption: 'Espaço interno sofisticado e moderno' },
    { src: './assets/img3 home2.4.png', caption: 'Relaxamento em ambiente exclusivo' },
    { src: './assets/Home 2.4 background.png', caption: 'Ambiente elegante e acolhedor' },
  ];

  let galleryIndex = 0;

  const updateGallery = () => {
    const item = galleryItems[galleryIndex];
    galleryImage.src = item.src;
    galleryCaption.textContent = item.caption;
  };

  prevButton.addEventListener('click', () => {
    galleryIndex = (galleryIndex + galleryItems.length - 1) % galleryItems.length;
    updateGallery();
  });

  nextButton.addEventListener('click', () => {
    galleryIndex = (galleryIndex + 1) % galleryItems.length;
    updateGallery();
  });

  updateGallery();
});


///////// Função para alterar o valor do input de adultos

function changeValue(delta, fieldId) {
  const input = document.getElementById(fieldId);
  if (!input) return;

  let currentValue = parseInt(input.value) || 0;
  let newValue = currentValue + delta;
  const min = parseInt(input.min) || 0;
  const max = parseInt(input.max) || 10;

  if (newValue >= min && newValue <= max) {
    input.value = newValue;
  }
}