document.addEventListener('DOMContentLoaded', function() { 
  var carousel = document.querySelector('.carousel');
    const carouselSwitcher = new lory(carousel, {
      infinite: 1,
      classNameFrame: 'carousel__frame',
      classNameSlideContainer: 'carousel__slides',
      slideSpeed: 600,
    });

  const arrows = carousel.getElementsByClassName('carousel__arrow');
  arrows[0].addEventListener('click', () => carouselSwitcher.prev());
  arrows[1].addEventListener('click', () => carouselSwitcher.next());
});