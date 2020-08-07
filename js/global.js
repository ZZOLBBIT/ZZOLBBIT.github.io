
// menu
const mainMenu = document.querySelector(".mainMenu");
const hamburger = document.querySelector(".hamburger");
const backgroundBox = document.querySelectorAll(".menuBackground .backgroundBox");
const menuGrid = document.querySelector(".menuGrid");
hamburger.addEventListener("click", function(){
  for (let i = 0; i < backgroundBox.length; i++){
    backgroundBox[i].classList.toggle("active");
  } 
  menuGrid.classList.toggle("active");
  mainMenu.classList.toggle("active");
});


