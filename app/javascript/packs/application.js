require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

import responsiveNavbar from '../functions/responsive_navbar';
import animateOnScroll from '../functions/animate_on_scroll';
import animeLandingPage from '../functions/animejs_landing_page';
import removeCheckboxLabel from '../functions/remove_checkbox_label_sign_up_form';
import selectRoleButton from '../functions/select_role_button';
import validateFirstStepUserSignUp from '../functions/validate_first_step_user_sign_up';
import validateSchoolAdminSignUp from '../functions/validate_school_admin_sign_up';


responsiveNavbar();
animateOnScroll();
animeLandingPage();
removeCheckboxLabel();
selectRoleButton();
validateFirstStepUserSignUp();
validateSchoolAdminSignUp();

window.addEventListener('resize', () => {
  animeLandingPage();
})
