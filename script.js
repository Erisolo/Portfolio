document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.gif-hover');

    if (img){
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
  });}

});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".round-container");
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting);
        });
    },
    {
        threshold: 0.4
    }
    );

    cards.forEach(card => observer.observe(card));
});