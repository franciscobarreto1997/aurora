const validateFirstStepUserSignUp = () => {
  const nextButton = document.getElementById('next-btn');
  const formGroups = document.querySelectorAll('form#new_user .form-inputs .form-group')
  let validations = 0;

  if (nextButton) {
    validateInputs(formGroups);

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      validateAll(formGroups)
    })
  }
}

const validateInputs = (formGroups) => {
  formGroups.forEach((group) => {
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
  ((input == document.querySelector('form#new_user .form-inputs .form-group #user_password').value) && (input.length > 1)) ? validate(id) : inValidate(id)
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


const validateRoleButtons = () => {
  const roleButtons = document.querySelectorAll('.user_role .form-check');
  const roleFieldSet = document.querySelector('.user_role');
  let selected = false;

  roleButtons.forEach((button) => {
    console.log(button.classList.contains("role-btn-selected"))
    if (button.classList.contains("role-btn-selected")) {
      selected = true;
    }
  })
  if (!selected) {
    if (!document.querySelector('form#new_user p')) {
      roleFieldSet.insertAdjacentHTML('afterend', '<p>Please select either Student or Teacher</p>');
    }
  } else {
    document.querySelector('form#new_user p').remove();
  }

  const errorMessage = document.querySelector('form#new_user p');

  if (errorMessage) {
    errorMessage.style.color = 'red';
  }
}

const validateAll = (formGroups) => {
  formGroups.forEach((group) => {
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
  validateRoleButtons()
}

export default validateFirstStepUserSignUp;
