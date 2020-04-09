const carousel = () => {
  const carouselElement = document.querySelector('.carousel');
  const arrows = document.querySelectorAll('.controls i');
  const images = ['assets/background.jpg', 'assets/123.jpg', 'assets/logo.png'];
  let index = 0;

  carouselElement.style.background = `url('${images[index]}')`;
  carouselElement.style.backgroundSize = 'cover';

  arrows.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
      const elementClass = event.target.attributes.class.value;
      if (elementClass == "fas fa-arrow-circle-right") {
        index += 1;
        if (index <= images.length - 1) {
          index = index;
        } else {
          index = 0;
        }
        carouselElement.style.opacity = '0';
        setTimeout(() => {
          carouselElement.style.background = `url('${images[index]}')`;
          carouselElement.style.backgroundSize = 'cover';
          carouselElement.style.opacity = '1';
        }, 1050)
      } else {
        if (index == 0) {
          index = images.length - 1;
        } else {
          index -= 1;
        }
        carouselElement.style.opacity = '0';
        setTimeout(() => {
          carouselElement.style.background = `url('${images[index]}')`;
          carouselElement.style.backgroundSize = 'cover';
          carouselElement.style.opacity = '1';
        }, 1050)
      }
    })
  })
}

export default carousel;
