window.onscroll = function () {
  scrollFunction()
};

var wel_con = document.querySelector(".wel-con");
var menu_desktop = document.querySelector(".menu-desktop");
var con1 = document.querySelector(".con1");

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    wel_con.style.filter = "blur(70px)";
    // wel_con.style.background = "transparent";
    menu_desktop.style.background = "#2727279e";
  } else {
    wel_con.style.filter = "blur(0px)";
    // wel_con.style.background = "#272727";
    menu_desktop.style.background = "#27272700";
  }
}