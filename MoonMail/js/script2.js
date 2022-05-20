window.onscroll = function () {
  scrollFunction()
};

var how_to_wel_con = document.querySelector(".how-to-wel-con");
var menu_desktop = document.querySelector(".menu-desktop");

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    how_to_wel_con.style.filter = "blur(70px)";
    how_to_wel_con.style.background = "transparent";
    menu_desktop.style.background = "#2727279e";
  } else {
    how_to_wel_con.style.filter = "blur(0px)";
    how_to_wel_con.style.background = "#2727279e";
    menu_desktop.style.background = "#27272700";
  }
}