//jshint esversion:6


/*for sidebar*/

const sidebarContent = document.querySelector(".sidebar-content");


const hamburgerIcon = document.querySelector(".fa-bars");
const crossIcon = document.querySelector(".sidebar-content-cross");

crossIcon.addEventListener("click", function(){
  sidebarContent.style.width = "0px";
});

hamburgerIcon.addEventListener("click", function(){
  sidebarContent.style.width = "300px";

});


/*for sidebar*/
