function handleClickMenu() {
  const menu = document.getElementById('headerMenu');
  const menuWrapper = menu.getElementsByClassName('navigation__menu-wrapper')[0];
  menuWrapper.style.zIndex = 2;
  menuWrapper.style.opacity = 1;
}

function handleCloseMenu() {
  const menu = document.getElementById('headerMenu');
  const menuWrapper = menu.getElementsByClassName('navigation__menu-wrapper')[0];
  menuWrapper.style.zIndex = -1;
  menuWrapper.style.opacity = 0;
}
