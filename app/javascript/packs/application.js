require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import responsiveNavbar from '../functions/responsive_navbar';
import animateOnScroll from '../functions/animate_on_scroll';
import animeLandingPage from '../functions/animejs_landing_page';
import removeCheckboxLabel from '../functions/remove_checkbox_label_sign_up_form';
import hoverSignUpButton from '../functions/hover_role_sign_up_form';


responsiveNavbar();
animateOnScroll();
animeLandingPage();
removeCheckboxLabel();
hoverSignUpButton();

window.addEventListener('resize', () => {
  animeLandingPage();
})
