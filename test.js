var gallery = document.querySelector('.gallery');
var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('maximized');
    gallery.classList.toggle('maximized');
  });
});

  