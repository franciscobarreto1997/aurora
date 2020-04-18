import validateSecondStepUserSignUp from './validate_second_step_user_sign_up';
import validateTeacherCode from './validate_teacher_code';
import selectRoleButton from './select_role_button';

let validations = [];

const validateFirstStepUserSignUp = () => {
  const nextButton = document.getElementById('step-1-next-btn');
  const formGroups = document.querySelectorAll('form#new_user .form-inputs .form-group')
  const form = document.querySelector('form#new_user');
  const teacherButton = document.querySelectorAll('.user_role .form-check')[1];

  // selectRoleButton();

  if (nextButton) {
    validateInputs(formGroups);

    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      validateAll(formGroups);

      if (validations.length === 6) {
        if (form.classList.contains('fade-in-left')) {
          form.classList.remove('fade-in-left');
        }
        if (teacherButton.classList.contains('role-btn-selected')) {
          validateTeacherCode();
        } else {
          validateSecondStepUserSignUp();
        }
      }
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
  const input = document.querySelector(`form#new_user .form-inputs .form-group #${id}`);
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  if (!validations.includes(id)) {
    validations.push(id)
  }
  console.log(validations.length)
}

const inValidate = (id) => {
  const input = document.querySelector(`form#new_user .form-inputs .form-group #${id}`);
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
  if (validations.includes(id)) {
    const index = validations.indexOf(id);
    validations.splice(index, 1);
  }
  console.log(validations.length)
}


const validateRoleButtons = () => {
  const roleButtons = document.querySelectorAll('.user_role .form-check');
  const roleFieldSet = document.querySelector('.user_role');
  let selected = false;

  roleButtons.forEach((button) => {
    if (button.classList.contains("role-btn-selected")) {
      selected = true;
      if (!validations.includes('role_button')) {
        validations.push('role_button');
      }
    }
  })
  if (!selected) {
    if (!document.querySelector('form#new_user p')) {
      roleFieldSet.insertAdjacentHTML('afterend', '<p>Please select either Student or Teacher</p>');
    }
  } else {
    if (document.querySelector('form#new_user p')) {
      document.querySelector('form#new_user p').remove();
    }
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
