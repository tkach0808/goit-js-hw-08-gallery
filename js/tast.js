'use strict';

// eslint-disable-next-line
import images from './gallery-items.js';
// eslint-disable-next-line
import cardMinImg from './minimg.js';

const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const lightboxImg = document.querySelector('.lightbox__image');

function renderGalery(item) {
  gallery.insertAdjacentHTML('afterbegin', `${cardMinImg}`);
  const itemCard = document.querySelector('.gallery__item');
  const cardImg = itemCard.querySelector('.gallery__image');
  const cardOriginal = document.querySelector('.gallery__link');
  cardOriginal.href = item.original;
  cardImg.src = item.preview;
  cardImg.alt = item.description;
  cardImg.setAttribute('data-source', item.original);
}

images.forEach(renderGalery);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName === lightboxImg) {
    return;
  }
  lightboxImg.src = event.target.getAttribute('data-source');
  modal.classList.add('is-open');
}

gallery.addEventListener('click', openModalWindow);

function closeModal(event) {
  if (event.target.nodeName !== 'IMG') {
    modal.classList.remove('is-open');
    lightboxImg.src = '#';
  }
}

modal.addEventListener('click', closeModal);
