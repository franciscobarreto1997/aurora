import anime from 'animejs/lib/anime.es.js';

const animeLandingPage = () => {
  const smallIcons = document.querySelectorAll('.landing-page-container .advantages #small-icon')

  let myTimeline = anime.timeline({
    targets: smallIcons,
    delay: function(el, i) { return i * 200 },
    duration: 500, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: true // Is not inherited
  });

  myTimeline
    .add({
      translateX: 700,
      // override the easing parameter
      easing: 'spring',
    })
    .add({
      opacity: .5,
      scale: 2
    })
    .add({
      translateX: 0,
      scale: 1
    });
}

export default animeLandingPage;
