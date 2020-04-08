const carousel = () => {
  const carouselElement = document.querySelector('.carousel');
  const arrows = document.querySelectorAll('.controls i');
  const images = ['assets/background.jpg']

  carouselElement.style.background = `url('${images[0]}')`;
  carouselElement.style.backgroundSize = 'cover';

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
      const elementClass = event.target.attributes.class.value;
      if (elementClass == "fa-arrow-circle-right") {

      }
    })
  })
}

export default carousel;
