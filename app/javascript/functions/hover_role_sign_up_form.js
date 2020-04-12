const hoverSignUpButton = () => {
  const roleButtons = document.querySelectorAll('.user_role .form-check');

  roleButtons.forEach((button, index) => {
    button.addEventListener('mouseover', (event) => {
      button.style.backgroundColor = '#0094D2';
      button.querySelector('label').style.color = 'white';
    })
    button.addEventListener('mouseout', (event) => {
      button.style.backgroundColor = 'white';
      button.querySelector('label').style.color = '#0094D2';
    })
    button.addEventListener('click', (event) => {
      if (event.target.id == "user_role_id_1") {
        button.style.border = '2px solid #0094D2';
        roleButtons[index + 1].style.border = '1px solid #DADEE3';
      } else if ((event.target.id == "user_role_id_2")) {
        button.style.border = '2px solid #0094D2';
        roleButtons[index - 1].style.border = '1px solid #DADEE3';
      }
    })
  })
}

export default hoverSignUpButton;
