require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import responsiveNavbar from '../functions/responsive_navbar';
import animateOnScroll from '../functions/animate_on_scroll';
import animeLandingPage from '../functions/animejs_landing_page';


responsiveNavbar();
animateOnScroll();
animeLandingPage();

window.addEventListener('resize', () => {
  animeLandingPage();
})
