const injectStudentInvitationModal = () => {
  const addStudentsButtons = document.querySelectorAll('#add-students-btn');

  if (addStudentsButtons) {
    addStudentsButtons.forEach((button) => {
      button.addEventListener('click', () => {
        inject(button);
      })
    })
  }
}

const inject = (button) => {
  const modal = document.querySelector('.modal-content');
  const schoolClassName = button.dataset.schoolClassName;
  if (modal) {
    modal.querySelector('.modal-body .header h2').innerText = `Invite students for ${schoolClassName}`;
    buttonActions(modal);
  }
}

const buttonActions = (modal) => {
  const buttons = modal.querySelectorAll('.form .form-actions input');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.id == "add-btn") {
        insertNewInput();
        return;
      }
      sendInvitation();
    })
  })
}

const insertNewInput = () => {
  const form = document.getElementById('invite_students_form');
  const inviteButton = document.getElementById('invite-btn');
  form.insertAdjacentHTML('afterbegin', `<input type="text" class="email-input" name="student_email" placeholder="Type in the student's email">`)
  inviteButton.value = 'Invite All';
}

const sendInvitation = () => {
  console.log("send invitation")
}

export default injectStudentInvitationModal;
