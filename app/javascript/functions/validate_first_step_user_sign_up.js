const validateFirstStepUserSignUp = () => {
  const nextButton = document.getElementById('next-btn');
  const formGroups = document.querySelectorAll('form#new_user .form-inputs .form-group')
  let validations = 0;

  if (nextButton) {
    validateInputs(formGroups);

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      // validateInputs(formGroups);
    })
  }
}

const validateInputs = (formGroups) => {
  formGroups.forEach((group) => {
    if (group.firstChild.name == "user[role_id]") {
      group.childNodes.forEach((button) => {
        if (button.classList.length > 0) {
          if (button.classList.contains("role-btn-selected")) {
            button.style.border = '1px solid #55E5A5 !important'
          } else {
            button.style.border = '1px solid #DADEE3 !important'
          }
        }
      })
    } else {
      group.firstChild.addEventListener('blur', (event) => {
        const groupId = group.firstChild.id;
        const userInput = group.firstChild.value;

        switch(groupId) {
          case "user_email":
          validateEmail(userInput, groupId);
          break;
          case "user_first_name":
          validateName(userInput, groupId);
          break;
          case "user_last_name":
          validateName(userInput, groupId);
          break;
          case "user_password":
          validatePassword(userInput, groupId);
          break;
          case "user_password_confirmation":
          validatePasswordConfirmation(userInput, groupId);
          break;
          default:
          break;
        }
      })
    }
  })
}

const validateEmail = (input, id) => {
  ((/.+@.+\.\w{2,3}/).test(input)) ? validate(id) : inValidate(id)
}

const validateName = (input, id) => {
  (input !== "") ? validate(id) : inValidate(id)
}

const validatePassword = (input, id) => {
  ((/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/).test(input)) ? validate(id) : inValidate(id)
}

const validatePasswordConfirmation = (input, id) => {
  (input == document.querySelector('form#new_user .form-inputs .form-group #user_password').value) ? validate(id) : inValidate(id)
}

const validate = (id) => {
  const input = document.querySelector(`form#new_user .form-inputs .form-group #${id}`)
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

const inValidate = (id) => {
  const input = document.querySelector(`form#new_user .form-inputs .form-group #${id}`)
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
}

export default validateFirstStepUserSignUp;
