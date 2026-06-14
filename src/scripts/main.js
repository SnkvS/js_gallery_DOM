'use strict';

const image = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

image.addEventListener('click', (event) => {
  const link = event.target.closest('a');

  if (!link) {
    return;
  }
  event.preventDefault();
  largeImage.src = link.href;
  largeImage.alt = link.alt;
});
