// Footer 

window.addEventListener('DOMContentLoaded', () => {
  // Sélectionnez toutes les images avec la classe "img-footer"
  let imgdef = document.querySelectorAll('.img-footer');

  let i = 0;

  function startAnimation() {
    imgdef.forEach((img, index) => {
      if (index !== i) {
        img.style.animation = '';
      }
    });

    imgdef[i].style.animation = 'defilement 15s linear infinite';

    i = (i + 1) % imgdef.length;

    setTimeout(startAnimation, 15000);
  }
  startAnimation();
});


// Modal 

function openModal() {
  document.querySelector(".overlay").style.display = 'block';
  document.querySelector(".modal").classList.add('modal-open');
}

function closeModal() {
  document.querySelector(".overlay").style.display = 'none';
  document.querySelector(".modal").classList.remove('modal-open');
}