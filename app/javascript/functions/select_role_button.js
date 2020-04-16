import axios from 'axios';

const selectRoleButton = () => {
  const roleButtons = document.querySelectorAll('.user_role .form-check');

  if (roleButtons) {
    axios.get('/fetch_roles_for_sign_up')
    .then((data) => {
      const studentRoleID = data.data[0].id;
      const teacherRoleID = data.data[1].id;

      roleButtons.forEach((button, index) => {
        button.addEventListener('click', (event) => {
          if (event.target.id == `user_role_id_${studentRoleID}`) {
            button.classList.add('role-btn-selected');
            roleButtons[index + 1].classList.remove('role-btn-selected');
          } else if ((event.target.id == `user_role_id_${teacherRoleID}`)) {
            button.classList.add('role-btn-selected');
            roleButtons[index - 1].classList.remove('role-btn-selected');
          }
        })
      })
    })
  }
}

export default selectRoleButton;
