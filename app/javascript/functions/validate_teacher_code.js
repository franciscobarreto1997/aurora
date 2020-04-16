import axios from 'axios';
import validateThirdStepUserSignUp from './validate_third_step_user_sign_up';



const form = document.querySelector('form#new_user');
const formInputs = document.querySelector('form#new_user .form-inputs');
const formActions = document.querySelector('form#new_user .form-actions');
let teacherCodeValid = false;

const validateTeacherCode = () => {
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
  const teacherCodeInput = `<div class="form-group string required user_teacher_code">
                             <input class="form-control string required" required="required" aria-required="true" placeholder="Type in your teacher code" type="text" name="user[teacher_code]" id="user_teacher_code">
                           </div>`

  const previousButton = `<input type="submit" name="commit" value="Previous" id="step-2-previous-btn" class="btn" data-disable-with="Previous">`
  const nextButton = `<input type="submit" name="commit" value="Next" id="step-2-next-btn" class="btn" data-disable-with="Next">`


  const newFormActions = `<div class="new-form-actions">
                            ${previousButton}
                            ${nextButton}
                          </div>`

  formInputs.insertAdjacentHTML('afterend', newFormActions);
  formInputs.insertAdjacentHTML('afterend', teacherCodeInput);
}

const validate = () => {
  const teacherCodeInput =  document.querySelector('form#new_user .user_teacher_code #user_teacher_code');
  const teacherCode = document.querySelector('form#new_user .user_teacher_code #user_teacher_code').value;
  const errorMessage = form.querySelector('p');

  axios.post('/fetch_teachers_codes_for_sign_up', {
    teacher_code: teacherCode
  })
  .then((data) => {
    console.log(data.data)
    if (data.data.length == 0) {
      teacherCodeInput.classList.remove('is-valid');
      teacherCodeInput.classList.add('is-invalid');
      if (errorMessage) {
        errorMessage.remove();
      }
      teacherCodeInput.insertAdjacentHTML('afterend', '<p>Invalid Teacher Code</p>');
      form.querySelector('p').style.color = 'red';
      teacherCodeValid = false;
    } else {
      teacherCodeInput.classList.remove('is-invalid');
      teacherCodeInput.classList.add('is-valid');
      if (errorMessage) {
        errorMessage.remove();
      }
      teacherCodeValid = true;
    }
  })
}

const buttonActions = () => {
  const buttons = document.querySelectorAll('form#new_user .new-form-actions input');
  const newFormActions = document.querySelector('form#new_user .new-form-actions');
  const teacherCodeInput = document.querySelector('form#new_user .user_teacher_code');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.id == "step-2-previous-btn") {
        removeTransitionClasses();
        form.classList.add('fade-in-left');
        formInputs.removeAttribute('hidden');
        formActions.removeAttribute('hidden');
        newFormActions.remove();
        teacherCodeInput.remove();
      } else {
        validate();
        setTimeout(() => {
          if (teacherCodeValid) {
            removeTransitionClasses();
            // validateThirdStepUserSignUp();
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

export default validateTeacherCode;
