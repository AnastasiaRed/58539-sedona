/*menu*/
var navMain = document.querySelector('.page-header');
var navToggle = document.querySelector('.menu-trigger');

if(navMain.classList.contains('page-header--nojs')){
  navMain.classList.remove('page-header--nojs');
  navMain.classList.add('page-header--closed');
}

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

/*map*/
var mapExists = document.getElementById("map");
if(mapExists!=null){
  function initMap() {
      var uluru = {lat: 34.86, lng: -111.79};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
}
