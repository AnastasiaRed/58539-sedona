  var navMain = document.querySelector('.page-header');
  var navToggle = document.querySelector('.menu-trigger');

  navMain.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('page-header--closed')) {
      navMain.classList.remove('page-header--closed');
      navMain.classList.add('page-header--opened');
      navToggle.innerHTML = "Закрыть меню";
    } else {
      navMain.classList.add('page-header--closed');
      navMain.classList.remove('page-header--opened');
      navToggle.innerHTML = "Открыть меню";
    }
  });
