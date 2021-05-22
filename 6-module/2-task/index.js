import createElement from '../../assets/lib/create-element.js';

const IMAGE_PATH = '/assets/images/products/';
const CURRENCY = '€';

const getCardTemplate = (name, price, image) => {
  return (
    `<div class="card">
      <div class="card__top">
          <img src="${IMAGE_PATH}${image}" class="card__image" alt="product">
          <span class="card__price">${CURRENCY}${price}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>`
  );
};

export default class ProductCard {
  constructor(product) {
    this._name = product.name;
    this._price = product.price.toFixed(2);
    this._category = product.category;
    this._image = product.image;
    this._id = product.id;

    this._template = getCardTemplate(this._name, this._price, this._image);
    this._card = createElement(this._template);

    this._onButtonClick = this._onButtonClick.bind(this);

    this.elem = this._getElem();
  }

  _onButtonClick () {
    const evt = new CustomEvent('product-add', {
      detail: this._id,
      bubbles: true,
    });

    this._card.dispatchEvent(evt);
  }

  _getElem = () => {
    this._card.querySelector('.card__button')
              .addEventListener('click', this._onButtonClick);
    return this._card;
  }

}
