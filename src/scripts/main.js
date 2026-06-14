'use strict';

const image = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

image.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();
  largeImage.src = link.href;
  largeImage.alt = link.alt;
});
