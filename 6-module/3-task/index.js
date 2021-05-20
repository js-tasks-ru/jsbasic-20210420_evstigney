import createElement from '../../assets/lib/create-element.js';

const IMAGE_PATH = '/assets/images/carousel/';
const CURRENCY = '€';

const getSlideTemplate = (image = '', price = 0, name = '', id = null) => {
  price = price.toFixed(2);

  return (
    `<div class="carousel__slide" data-id="${id}">
      <img src="${IMAGE_PATH}${image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">${CURRENCY}${price}</span>
        <div class="carousel__title">${name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
  );
};

const getSliderTemplate = (slidesArr = []) => {
  if (!slidesArr.length) return;

  return (
    `<div class="carousel__inner">
      ${slidesArr.map(({image, price, name, id} = {}) => {
                    return getSlideTemplate(image, price, name, id);
                  })
                 .join('')}
    </div>`
  );
};

const getCarouselTemplate = (slidesArr) => {
  return (
    `<div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      ${getSliderTemplate(slidesArr)}
    </div>`
  );
};

export default class Carousel {
  constructor(slides) {
    this._slides = slides.slice();
    this._template = getCarouselTemplate(this._slides);
    this._carousel = createElement(this._template);
    this._slideContainer = this._carousel.querySelector('.carousel__inner');
    this._arrowLeft = this._carousel.querySelector('.carousel__arrow_left');
    this._arrowRight = this._carousel.querySelector('.carousel__arrow_right');
    this._shift = 0;

    this._checkShift = this._checkShift.bind(this);
    this._rotateSlider = this._rotateSlider.bind(this);
    this._generateProductAddEvent = this._generateProductAddEvent.bind(this);
    this._clickHandler = this._clickHandler.bind(this);
  }

  _checkShift (width) {
    const maxShift = 0;
    const minShift = -width * (this._slides.length - 1);
    this._arrowRight.style.display = '';
    this._arrowLeft.style.display = '';
    
    if (this._shift >= maxShift) {
      this._shift = maxShift;
      this._arrowLeft.style.display = 'none';
    }
    if (this._shift <= minShift) {
      this._shift = minShift;
      this._arrowRight.style.display = 'none';
    }
  }

  _rotateSlider (evt) {
    const width = this._slideContainer.offsetWidth;

    if (evt.target === this._arrowLeft) this._shift += width;

    if (evt.target === this._arrowRight) this._shift -= width;;

    this._checkShift(width);
    this._slideContainer.style.transform = `translateX(${this._shift}px)`;
  }

  _generateProductAddEvent (evt) {
    const product = evt.target.closest('.carousel__slide');
    const id = product.dataset.id;
    const productAddEvt = new CustomEvent('product-add', {
      detail: id,
      bubbles: true,
    });

    this._carousel.dispatchEvent(productAddEvt);
  }

  _clickHandler (evt) {
    if (evt.target.closest('.carousel__arrow')) this._rotateSlider(evt);
    
    if (evt.target.closest('.carousel__button')) this._generateProductAddEvent(evt);
  }

  get elem () {
    this._arrowLeft.style.display = 'none';
    this._carousel.addEventListener('click', this._clickHandler);
    
    return this._carousel;
  }
}
