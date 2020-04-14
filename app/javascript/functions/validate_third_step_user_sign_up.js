import axios from 'axios';

const validateThirdStepUserSignUp = () => {
  const form = document.querySelector('form#new_user');
  const formInput = document.querySelector('form#new_user .user_school_code');
  const schoolValue = document.querySelector('form#new_user .user_school_code #user_school_code').value
  const formActions = document.querySelector('form#new_user .new-form-actions');

  setTimeout(() => {
      form.classList.add('fade-in-right');
      formInput.setAttribute('hidden', '');
      formActions.setAttribute('hidden', '');
  }, 100)

  const dropDownMenu = `<div class="form-group select required user_school_class">
                          <select class="form-control select required" name="user[school_class_id]" id="user_school_class_id">
                            <option value="">Select your class</option>
                          </select>
                        </div>`

  form.insertAdjacentHTML('beforeend', dropDownMenu)

  axios.post('/fetch_for_sign_up', {
    school_code: schoolValue
  })
  .then((data) => {
    console.log(data.data)
    data.data.forEach((schoolClass) => {
      form.querySelector('.user_school_class .form-control').insertAdjacentHTML('beforeend', `<option>${schoolClass}</option>`)
    })
  })


}

export default validateThirdStepUserSignUp;
