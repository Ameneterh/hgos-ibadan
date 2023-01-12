var year = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = year;

function getDropMenu() {
  var menu = document.getElementById("drop-down-menu");

  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function getResourcesDropMenu() {
  var menu = document.getElementById("resources");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
