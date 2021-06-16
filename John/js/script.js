//Этот файл необходим для верстки с помощью gulp
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
const menu = document.getElementById("menu__body");
const burger = document.getElementById("menu__burger");
const body = document.getElementById("body");


burger.onclick = function(){
  menu.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("hidden");
}