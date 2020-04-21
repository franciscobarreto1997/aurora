const injectStudentInvitationModal = () => {
    const addStudentsButtons = document.querySelectorAll('#add-students-btn');

    if (addStudentsButtons) addStudentsButtons.forEach(button => button.addEventListener('click', showModal))
}

const showModal = () => {

}

export default injectStudentInvitationModal;
