const form = document.querySelector('form#new_user');
const formInputs = document.querySelector('form#new_user .form-inputs');
const formActions = document.querySelector('form#new_user .form-actions');

const validateSecondStepUserSignUp = () => {
  form.classList.add('fade-in-right');
  formInputs.setAttribute('hidden', '')
  formActions.setAttribute('hidden', '')

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

  validateSchoolCode()
  buttonActions()
}

const validateSchoolCode = () => {
  const schoolCodeInput = document.querySelector('form#new_user .user_school_code #user_school_code');

  schoolCodeInput.addEventListener('blur', () => {
    if (schoolCodeInput.value.length == 10) {
      schoolCodeInput.classList.remove('is-invalid')
      schoolCodeInput.classList.add('is-valid')
      return true
    } else {
      schoolCodeInput.classList.remove('is-valid')
      schoolCodeInput.classList.add('is-invalid')
      return false
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
        form.classList.remove('fade-in-right');
        form.classList.add('fade-in-left');
        formInputs.removeAttribute('hidden');
        formActions.removeAttribute('hidden');
        newFormActions.remove();
        schoolCodeInput.remove();
      } else {

      }
    })
  })
}


export default validateSecondStepUserSignUp;


