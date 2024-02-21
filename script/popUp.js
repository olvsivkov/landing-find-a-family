// открыть / закрыть попап

const postCardBTN = document.querySelectorAll('.postcard-btn')
const popupVisible = document.querySelector('.pop-up-paiment')
const closePopupBTN = document.querySelector('.paiment-block-wrapper-popup>img')

postCardBTN.forEach(element => element.addEventListener("click", function(e) {
  e.preventDefault();
  popupVisible.classList.add("modal-show");
}))

closePopupBTN.addEventListener("click", function(e) {
  popupVisible.classList.remove("modal-show");
})

// второй попап

const submitBTN = document.querySelector(".pay-form-submit-popup")
const secondPopup = document.querySelector(".second-popup")

submitBTN.addEventListener("click", function(e) {
  e.preventDefault();
  popupVisible.classList.remove("modal-show");
  secondPopup.classList.add("modal-show");
  setTimeout(() => {
    secondPopup.classList.remove('modal-show');
  }, 2000);
})

// слайдер попап

let popupSlides = document.querySelectorAll('.slide');
let popupDots = document.querySelectorAll('.dot-popup');

function showSlidesPopup(slideIndex = 0) {
  for (let i = 0; i < popupSlides.length; i++) {
    if (i === slideIndex || i === slideIndex + 1 || i === slideIndex + 2) {
      popupSlides[i].style.display = 'block';
    } else {
      popupSlides[i].style.display = 'none';
    }
  }

  for (let i = 0; i < popupDots.length; i++) {
    if (i === slideIndex) {
      popupDots[i].classList.add('dot-active');
    } else {
      popupDots[i].classList.remove('dot-active');
    }
  }
}


