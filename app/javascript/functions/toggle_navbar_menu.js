const toggleNavbarMenu = () => {
  const navbarUserButton = document.querySelector('.navbar i');
  const navbarMenu = document.querySelector('.navbar-menu')
  let toggled = false;

  if (navbarUserButton) {
    navbarUserButton.addEventListener('click', () => {
      if (!toggled) {
        navbarMenu.removeAttribute('hidden');
        toggled = true;
      } else {
        toggled = false;
        navbarMenu.setAttribute('hidden', '');
      }
    })
  }

}

export default toggleNavbarMenu;
