const selectRoleButton = () => {
  const roleButtons = document.querySelectorAll('.user_role .form-check');

  roleButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      if (event.target.id == "user_role_id_9") {
        button.classList.add('role-btn-selected');
        roleButtons[index + 1].classList.remove('role-btn-selected');
      } else if ((event.target.id == "user_role_id_10")) {
        button.classList.add('role-btn-selected');
        roleButtons[index - 1].classList.remove('role-btn-selected');
      }
    })
  })
}

export default selectRoleButton;
