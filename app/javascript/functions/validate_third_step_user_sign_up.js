import axios from 'axios';

const form = document.querySelector('form#new_user');

const validateThirdStepUserSignUp = () => {
  hidePreviousStep();
  insertNewElements();
  fetchSchoolClasses();
  buttonActions();
}

const hidePreviousStep = () => {
  const formInput = document.querySelector('form#new_user .user_school_code');
  const formActions = document.querySelector('form#new_user .new-form-actions');

  setTimeout(() => {
    form.classList.add('fade-in-right');
    formInput.setAttribute('hidden', '');
    formActions.setAttribute('hidden', '');
  }, 100)
}

const insertNewElements = () => {
  const dropDownMenu = `<div class="form-group select required user_school_class">
                          <select class="form-control select required" name="user[school_class_id]" id="user_school_class_id">
                            <option value="">Select your class</option>
                          </select>
                        </div>`;

  const previousButton = `<input type="submit" name="commit" value="Previous" id="step-3-previous-btn" class="btn" data-disable-with="Previous">`;
  const nextButton = `<input type="submit" name="commit" value="Create Account" id="step-3-next-btn" class="btn" data-disable-with="Create Account">`;

  const lastFormActions = `<div class="last-form-actions">
                            ${previousButton}
                            ${nextButton}
                          </div>`;

  form.insertAdjacentHTML('beforeend', dropDownMenu);
  form.insertAdjacentHTML('beforeend', lastFormActions);
}

const fetchSchoolClasses = () => {
  const schoolValue = document.querySelector('form#new_user .user_school_code #user_school_code').value;

  axios.post('/fetch_for_sign_up', {
    school_code: schoolValue
  })
  .then((data) => {
    data.data.forEach((schoolClass) => {
      form.querySelector('.user_school_class .form-control').insertAdjacentHTML('beforeend', `<option value="${schoolClass.id}">${schoolClass.name}</option>`);
    })
  })
}

const buttonActions = () => {
  const buttons = form.querySelectorAll('.last-form-actions input');
  const lastFormActions = form.querySelector('.last-form-actions');
  const dropDownMenu = form.querySelector('.user_school_class');
  const schoolCodeInput = form.querySelector('.user_school_code');
  const previousFormActions = form.querySelector('.new-form-actions');

  if (buttons) {
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.id == "step-3-previous-btn") {
          form.classList.remove('fade-in-right');
          form.classList.add('fade-in-left');
          lastFormActions.remove();
          dropDownMenu.remove();
          schoolCodeInput.removeAttribute('hidden');
          previousFormActions.removeAttribute('hidden');
        }
      })
    })
  }
}

export default validateThirdStepUserSignUp;
