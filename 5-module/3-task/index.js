function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const arrowRight = carousel.querySelector('.carousel__arrow_right');
  const arrowLeft = carousel.querySelector('.carousel__arrow_left');

  const slideContainer = carousel.querySelector('.carousel__inner');
  const slidesArr = Array.from(slideContainer.querySelectorAll('.carousel__slide'));

  const slideCoords = slideContainer.getBoundingClientRect();
  let shift = 0;
  const maxShift = 0;
  const minShift = -slideCoords.width * (slidesArr.length - 1);

  const checkShift = function () {
    arrowRight.style.display = '';
    arrowLeft.style.display = '';
    
    if (shift >= maxShift) {
      shift = maxShift;
      arrowLeft.style.display = 'none';
    }
    if (shift <= minShift) {
      shift = minShift;
      arrowRight.style.display = 'none';
    }

    return shift;
  };

  const rotateSlider = function (evt) {
    const target = evt.target.closest('.carousel__arrow');

    if (!target) return;

    if (target === arrowLeft) shift += slideCoords.width;

    if (target === arrowRight) shift -= slideCoords.width;

    checkShift();
    slideContainer.style.transform = `translateX(${shift}px)`;
  };

  checkShift();
  carousel.addEventListener('click', rotateSlider);
}
