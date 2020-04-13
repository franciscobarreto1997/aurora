const validateSecondStepUserSignUp = () => {
  const form = document.querySelector('form#new_user');
  form.classList.add('rotate-vert-center');
  const formInputs = document.querySelector('form#new_user .form-inputs');
  formInputs.style.display = 'none';

  const schoolCodeInput = `<div class="form-group string required user_school_code">
                             <input class="form-control string required" required="required" aria-required="true" placeholder="Type in your school code" type="text" name="user[school_code]" id="user_school_code">
                           </div>`

  formInputs.insertAdjacentHTML('afterend', schoolCodeInput)
}

export default validateSecondStepUserSignUp;
