const navToggle = () => {
  const $toggle = $('.toggle');
  const $navbarListItems = $('.navbar-list-items');

  $toggle.on('click', () => {
    $navbarListItems.toggleClass("active");
  });
}

export default navToggle;
