document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.gif-hover');

  // Double-check if the element was actually found

  img.addEventListener('mouseenter', () => {
    img.src = img.dataset.gif + '?t=' + new Date().getTime();
  });

  img.addEventListener('mouseleave', () => {
    img.src = img.dataset.static;
  });

  img.addEventListener('touchstart', () => {
    img.src = img.dataset.gif + '?t=' + new Date().getTime();
    setTimeout(() => {
      img.src = img.dataset.static;
    }, 1400);
  });

});