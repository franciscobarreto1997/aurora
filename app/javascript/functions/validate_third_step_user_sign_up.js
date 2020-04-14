const validateThirdStepUserSignUp = () => {
  const form = document.querySelector('form#new_user');
  const formInput = document.querySelector('form#new_user .user_school_code');
  const formActions = document.querySelector('form#new_user .new-form-actions');

  setTimeout(() => {
      form.classList.add('fade-in-right');
      formInput.setAttribute('hidden', '');
      formActions.setAttribute('hidden', '');
  }, 100)



}

export default validateThirdStepUserSignUp;
