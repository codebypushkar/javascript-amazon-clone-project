import { calculateCartQuantity } from '../utils/calculateCartQuantity.js';

export function renderCheckoutHeader() {
  document.querySelector('.js-return-to-home-link').innerHTML = `${calculateCartQuantity()} items`;
}