

/* Answer to: "injected stylesheet remove" */

function loadCSS(file) {
  var link = document.createElement("link");
  link.href = chrome.extension.getURL(file + '.css');
  link.id = file;
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}

function unloadCSS(file) {
  var cssNode = document.getElementById(file);
  cssNode && cssNode.parentNode.removeChild(cssNode);
}






const mobile_nav = document.querySelector(".mobile-navbar-btn_one");
const close_nav = document.querySelector(".close-navbar-btn");
const nav_header = document.querySelector(".navbar");


const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
close_nav.addEventListener("click", () => toggleNavbar());

$(".one").click(function (){
  $(this).addClass("active").siblings().removeClass("active");
});
window.addEventListener("resize", function() {
  "use strict"; window.location.reload(); 
});
  
