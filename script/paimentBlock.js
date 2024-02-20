// слайдер и стили точек

let slides = document.querySelectorAll('.slide-item');
let dots = document.querySelectorAll('.dot-paiment-item');

function showSlides(slideIndex = 0) {
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex || i === slideIndex + 1 || i === slideIndex + 2) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }

  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex) {
      dots[i].classList.add('dot-active');
    } else {
      dots[i].classList.remove('dot-active');
    }
  }
}

// toggler id="pay-active" в блоках помощь единоразовая/ежемесячная и выбор суммы доната.

const helpFields = document.querySelectorAll('.help-field > div');
const sums = document.querySelectorAll('.choose-sum-wrap > div');

function handleClick(event, elements) {
  elements.forEach(elem => {
    elem.removeAttribute('id');
  });
  if (event.target.id === 'pay-active') return;
  event.target.id = 'pay-active';
}

helpFields.forEach(elem => {
  elem.addEventListener('click', (event) => handleClick(event, helpFields));
});

sums.forEach(elem => {
  elem.addEventListener('click', (event) => handleClick(event, sums));
})

// Напишите нам

function openEmail() {
  window.location.href = `mailto: info@sirota.ru`;
}

