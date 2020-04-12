const removeCheckboxLabel = () => {
  const checkBoxLabel = document.querySelector('.form-group .col-form-label');
  if (checkBoxLabel) {
    checkBoxLabel.remove();
  }
}

export default removeCheckboxLabel;
