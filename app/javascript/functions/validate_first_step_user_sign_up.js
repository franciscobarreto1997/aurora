const validateFirstStepUserSignUp = () => {
  const nextButton = document.getElementById('next-btn');
  const formGroups = document.querySelectorAll('form#new_user .form-inputs .form-group')
  let validations = 0;

  validateInputs(formGroups);

  if (nextButton) {
    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      // validateInputs(formGroups);
    })
  }
}

const validateInputs = (formGroups) => {
  formGroups.forEach((group) => {
    group.firstChild.addEventListener('blur', (event) => {
      const groupId = group.firstChild.id;
      const userInput = group.firstChild.value;

      switch(group.firstChild.id) {
        case "user_email":
        validateEmail(userInput);
        break;
        case "user_first_name":
        validateName(userInput);
        break;
        case "user_last_name":
        validateName(userInput);
        break;
        case "user_password":
        validatePassword(userInput);
        break;
        case "user_password_confirmation":
        validatePasswordConfirmation(userInput);
        break;
        default:
        break;
      }
    })
  })
}

const validateEmail = (input) => {

}

const validateName = (input) => {

}

const validatePassword = (input) => {

}

const validatePasswordConfirmation = (input) => {

}

export default validateFirstStepUserSignUp;
