import validateThirdStepUserSignUp from './validate_third_step_user_sign_up';
import axios from 'axios';

const form = document.querySelector('form#new_user');
const formInputs = document.querySelector('form#new_user .form-inputs');
const formActions = document.querySelector('form#new_user .form-actions');
let schooCodeValid = false;

const validateSecondStepUserSignUp = () => {
  hidePreviousStep();
  injectNewElements();
  buttonActions();
}

const hidePreviousStep = () => {
  form.classList.add('fade-in-right');
  setTimeout(() => {
    form.classList.remove('fade-in-right');
  }, 500)
  formInputs.setAttribute('hidden', '')
  formActions.setAttribute('hidden', '')
}

const injectNewElements = () => {
  const schoolCodeInput = `<div class="form-group string required user_school_code">
                             <input class="form-control string required" required="required" aria-required="true" placeholder="Type in your school code" type="text" name="user[school_code]" id="user_school_code">
                           </div>`

  const previousButton = `<input type="submit" name="commit" value="Previous" id="step-2-previous-btn" class="btn" data-disable-with="Previous">`
  const nextButton = `<input type="submit" name="commit" value="Next" id="step-2-next-btn" class="btn" data-disable-with="Next">`


  const newFormActions = `<div class="new-form-actions">
                            ${previousButton}
                            ${nextButton}
                          </div>`

  formInputs.insertAdjacentHTML('afterend', newFormActions);
  formInputs.insertAdjacentHTML('afterend', schoolCodeInput);
}

const validateSchoolCode = () => {
  const schoolCodeInput =  document.querySelector('form#new_user .user_school_code #user_school_code');
  const schoolCode = document.querySelector('form#new_user .user_school_code #user_school_code').value;
  const errorMessage = form.querySelector('p');

  axios.post('/fetch_school_classes_for_sign_up', {
    school_code: schoolCode
  })
  .then((data) => {
    console.log(data.data)
    if (data.data.length == 0) {
      schoolCodeInput.classList.remove('is-valid');
      schoolCodeInput.classList.add('is-invalid');
      if (errorMessage) {
        errorMessage.remove();
      }
      schoolCodeInput.insertAdjacentHTML('afterend', '<p>Invalid School Code</p>');
      form.querySelector('p').style.color = 'red';
      schooCodeValid = false;
    } else {
      schoolCodeInput.classList.remove('is-invalid');
      schoolCodeInput.classList.add('is-valid');
      if (errorMessage) {
        errorMessage.remove();
      }
      schooCodeValid = true;
    }
  })
}

const buttonActions = () => {
  const buttons = document.querySelectorAll('form#new_user .new-form-actions input');
  const newFormActions = document.querySelector('form#new_user .new-form-actions');
  const schoolCodeInput = document.querySelector('form#new_user .user_school_code');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.id == "step-2-previous-btn") {
        removeTransitionClasses();
        form.classList.add('fade-in-left');
        formInputs.removeAttribute('hidden');
        formActions.removeAttribute('hidden');
        newFormActions.remove();
        schoolCodeInput.remove();
      } else {
        validateSchoolCode();
        setTimeout(() => {
          if (schooCodeValid) {
            removeTransitionClasses();
            validateThirdStepUserSignUp();
          }
        }, 500)
      }
    })
  })
}

const removeTransitionClasses = () => {
  form.classList.contains('fade-in-left') ? form.classList.remove('fade-in-left') : null
  form.classList.contains('fade-in-right') ? form.classList.remove('fade-in-right') : null
}


export default validateSecondStepUserSignUp;


