const form = document.querySelector('form#new_school_admin');
if (form) {
  const createButton = form.querySelector('.form-actions .btn');
}

const validateSchoolAdminSignUp = () => {
  validateInputs();
}

const validateInputs = () => {
  if (form) {
    const formInputs = form.querySelectorAll('.form-inputs .form-group input');
    formInputs.forEach((formInput) => {
      formInput.addEventListener('blur', () => {
        const id = formInput.id;
        const input = formInput.value;

        switch(id) {
          case "school_admin_email":
            validateEmail(input, id);
            break;
          case "school_admin_password":
            validatePassword(input, id);
            break;
          case "school_admin_password_confirmation":
            validatePasswordConfirmation(input, id);
            break;
          default:
            break;
        }
      })
    })
  }
}

const validateEmail = (input, id) => {
  ((/.+@.+\.\w{2,3}/).test(input)) ? validate(id) : inValidate(id)
}

const validatePassword = (input, id) => {
  ((/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/).test(input)) ? validate(id) : inValidate(id)
}

const validatePasswordConfirmation = (input, id) => {
  ((input == form.querySelector('.form-inputs .form-group #school_admin_password').value) && (input.length > 1)) ? validate(id) : inValidate(id)
}

const validate = (id) => {
  const input = form.querySelector(`.form-inputs .form-group #${id}`);
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

const inValidate = (id) => {
  const input = form.querySelector(`.form-inputs .form-group #${id}`);
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
}

export default validateSchoolAdminSignUp;
