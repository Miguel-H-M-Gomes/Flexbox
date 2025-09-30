// Seleciona todas as imagens com classe 'mega'
const megaImages = document.querySelectorAll('.mega');

megaImages.forEach(img => {
  let isMega = false;

  img.addEventListener('click', () => {
    if (!isMega) {
      img.src = img.dataset.mega;
      isMega = true;
    } else {
      img.src = img.dataset.normal;
      isMega = false;
    }
  });
});
