import axios from 'axios';

const validateThirdStepUserSignUp = () => {
  const form = document.querySelector('form#new_user');
  const formInput = document.querySelector('form#new_user .user_school_code');
  const schoolValue = document.querySelector('form#new_user .user_school_code #user_school_code').value
  const formActions = document.querySelector('form#new_user .new-form-actions');

  axios.post('/fetch_for_sign_up', {
    school_code: schoolValue
  })
  .then((data) => {
    console.log(data);
  })

  setTimeout(() => {
      form.classList.add('fade-in-right');
      formInput.setAttribute('hidden', '');
      formActions.setAttribute('hidden', '');
  }, 100)



}

export default validateThirdStepUserSignUp;
