let hamburger = document.querySelectorAll(".burger-menu");
let exit = document.querySelectorAll(".exit");
let menu = document.querySelectorAll(".nav");

hamburger.forEach(function (element, index) {
  element.onclick = function () {
    menu[index].classList.toggle("active-burger");
    hamburger[index].classList.toggle("hamburger-open");
    exit[index].classList.remove("none");
    document.body.classList.add("no-scroll"); // Додати клас "no-scroll"
  };
});

exit.forEach(function (element, index) {
  element.onclick = function () {
    menu[index].classList.remove("active-burger");
    hamburger[index].classList.remove("hamburger-open");
    exit[index].classList.toggle("none");
    document.body.classList.remove("no-scroll"); // Видалити клас "no-scroll"
  };
});