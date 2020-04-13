const validateFirstStepUserSignUp = () => {
  const nextButton = document.getElementById('next-btn');
  const formGroups = document.querySelectorAll('form#new_user .form-inputs .form-group')
  let validations = 0;

  if (nextButton) {
    nextButton.addEventListener('click', (event) => {
      event.preventDefault();
      validateInputs(formGroups);
    })
  }
}

const validateInputs = (formGroups) => {
  formGroups.forEach((group) => {
    console.log(group.firstChild.value)
  })
}

export default validateFirstStepUserSignUp;
