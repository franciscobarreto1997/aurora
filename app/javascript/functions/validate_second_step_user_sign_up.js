const validateSecondStepUserSignUp = () => {
  const form = document.querySelector('form#new_user');
  const formInputs = document.querySelector('form#new_user .form-inputs');
  const formActions = document.querySelector('form#new_user .form-actions');

  form.classList.add('rotate-vert-center');
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


export default validateSecondStepUserSignUp;


