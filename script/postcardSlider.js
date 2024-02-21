let cardsSlides = document.querySelectorAll('.cards-item-slider');
let cardsDots = document.querySelectorAll('.dot-postcard');
console.log(cardsSlides)

function cardsShowSlides(slideIndex) {
  for (let i = 0; i < cardsSlides.length; i++) {
    if (i === slideIndex) {
      cardsSlides[i].style.display = 'block';
    } else {
      cardsSlides[i].style.display = 'none';
    }
  }

  for (let i = 0; i < cardsDots.length; i++) {
    if (i === slideIndex) {
      cardsDots[i].classList.add('dot-active');
    } else {
      cardsDots[i].classList.remove('dot-active');
    }
  }
}


// при разрашении экрана больше 639px всем блокам с картами возвращаем видимость 

let mediaQuery = window.matchMedia('(min-width: 639px)');

if (mediaQuery.matches) {
  changeDisplayStyleOfCardsSlides();
}

mediaQuery.addListener(changeDisplayStyleOfCardsSlides);

function changeDisplayStyleOfCardsSlides() {
  let cardsSlides = document.querySelectorAll('.cards-item-slider');

  cardsSlides.forEach(slide => {
    slide.style.display = 'block';
  });
}
