require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import responsiveLandingPageNavbar from '../functions/responsive_landing_page_navbar';
import animateOnScroll from '../functions/animate_on_scroll';
import animeLandingPage from '../functions/animejs_landing_page';
import removeCheckboxLabel from '../functions/remove_checkbox_label_sign_up_form';
import selectRoleButton from '../functions/select_role_button';
import validateFirstStepUserSignUp from '../functions/validate_first_step_user_sign_up';
import validateSchoolAdminSignUp from '../functions/validate_school_admin_sign_up';
import toggleNavbarMenu from '../functions/toggle_navbar_menu';


responsiveLandingPageNavbar();
animateOnScroll();
animeLandingPage();
removeCheckboxLabel();
selectRoleButton();
validateFirstStepUserSignUp();
validateSchoolAdminSignUp();
toggleNavbarMenu();

window.addEventListener('resize', () => {
  animeLandingPage();
})
