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
  }
}

export default injectStudentInvitationModal;
