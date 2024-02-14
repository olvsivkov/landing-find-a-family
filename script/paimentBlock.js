// слайдер и стили точек

let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

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

// toggler помощь единоразовая и ежемесячная

const helpFields = document.querySelectorAll('.help-field > div');

function handleClick(event) {
  helpFields.forEach(elem => {
    elem.removeAttribute('id');
  });
  if (event.target.id === 'pay-active') return;
  event.target.id = 'pay-active';
}

helpFields.forEach(elem => {
  elem.addEventListener('click', handleClick);
});

// toggler выбора сумм пожертвования

const sums = document.querySelectorAll('.choose-sum-wrap > div');

function handleClickSum(event) {
  sums.forEach(elem => {
    elem.removeAttribute('id');
  });
  if (event.target.id === 'pay-active') return;
  event.target.id = 'pay-active';
}

sums.forEach(elem => {
  elem.addEventListener('click', handleClickSum);
})



